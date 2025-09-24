"use client";
import { createContext, useContext, useEffect, useState } from "react";
import productsData from "@/data/products.json";
import { toast } from "react-toastify";

const AppContext = createContext();

export function AppProvider({ children }) {
  const [search, setSearch] = useState("");
  const [products, setProducts] = useState(productsData);
  const [cart, setCart] = useState(() => {
    // Initialize cart from localStorage
    if (typeof window !== "undefined") {
      const savedCart = localStorage.getItem("cart");
      return savedCart ? JSON.parse(savedCart) : [];
    }
    return [];
  });
  const [toastData, setToastData] = useState({ type: "", message: "" });

  // Persist cart to localStorage whenever it changes
  useEffect(() => {
    if (typeof window !== "undefined") {
      localStorage.setItem("cart", JSON.stringify(cart));
    }
  }, [cart]);

  // Filter products when search changes
  useEffect(() => {
    if (search === "") {
      setProducts(productsData);
    } else {
      setProducts(
        productsData.filter((product) =>
          product.name.toLowerCase().includes(search.toLowerCase())
        )
      );
    }
  }, [search]);

  // Add product to cart
  const addToCart = (productId, qty = 1, color = "") => {
    const product = productsData.find((p) => p.id === productId);
    if (!product) return;

    const colorValue = typeof color === "object" ? color.name : color;

    setCart((prevCart) => {
      const existing = prevCart.find(
        (item) => item.id === productId && item.color === colorValue
      );

      if (existing) {
        return prevCart.map((item) =>
          item.id === productId && item.color === colorValue
            ? { ...item, qty: item.qty + qty }
            : item
        );
      }

      setToastData({
        type: "success",
        message: `${product.name} added to cart!`,
      });

      return [
        ...prevCart,
        {
          id: product.id,
          name: product.name,
          qty,
          color: colorValue,
          price: product.price,
          image: product.images[0],
        },
      ];
    });
  };

  // Remove product from cart
  const removeCart = (productId, color = "") => {
    const product = products.find((p) => p.id === productId);
    setCart((prevCart) =>
      prevCart.filter(
        (item) => !(item.id === productId && item.color === color)
      )
    );

    setToastData({
      type: "warn",
      message: `${product[0]?.name || "Item"} removed from cart!`,
    });
  };

  // Update product quantity/color in cart
  const updateCart = (productId, qty, color = null) => {
    setCart((prevCart) =>
      prevCart.map((item) =>
        item.id === productId
          ? {
              ...item,
              qty,
              color: color || item.color,
            }
          : item
      )
    );
  };

  // Watch for changes in toastData and trigger Toastify
  useEffect(() => {
    if (toastData.message) {
      switch (toastData.type) {
        case "success":
          toast.success(toastData.message);
          break;
        case "error":
          toast.error(toastData.message);
          break;
        case "info":
          toast.info(toastData.message);
          break;
        case "warn":
          toast.warn(toastData.message);
          break;
        default:
          toast(toastData.message);
      }
      setToastData({ type: "", message: "" });
    }
  }, [toastData]);

  return (
    <AppContext.Provider
      value={{
        search,
        setSearch,
        products,
        setProducts,
        cart,
        addToCart,
        removeCart,
        updateCart,
        setCart,
        setToastData,
      }}
    >
      {children}
    </AppContext.Provider>
  );
}

// Custom hook
export function useAppContext() {
  const context = useContext(AppContext);
  if (!context) {
    throw new Error("useAppContext must be used inside AppProvider");
  }
  return context;
}
