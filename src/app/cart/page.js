"use client";
import { useAppContext } from "@/context/AppContext";
import { Minus, Plus, Trash2 } from "lucide-react";
import Link from "next/link";

export default function CartPage() {
  const { cart, updateCart, removeCart } = useAppContext();

  const total = cart.reduce(
    (sum, item) => sum + item.price.sellPrice * item.qty,
    0
  );

  if (cart.length === 0) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50 text-gray-600">
        <p className="text-lg">🛒 Your cart is empty</p>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 p-6">
      <div className="max-w-4xl mx-auto bg-white rounded-2xl shadow p-6">
        <h1 className="text-2xl font-bold mb-6 text-gray-800">Your Cart</h1>
        <div className="overflow-x-auto">
          <table className="min-w-full border">
            <thead>
              <tr className="bg-gray-100 text-gray-700">
                <th className="p-3 text-left">Product</th>
                <th className="p-3 text-left">Color</th>
                <th className="p-3 text-center">Price</th>
                <th className="p-3 text-center">Quantity</th>
                <th className="p-3 text-center">Subtotal</th>
                <th className="p-3 text-center">Remove</th>
              </tr>
            </thead>
            <tbody>
              {cart.map((item, index) => (
                <tr
                  key={`${item.id}-${item.color?.name || "default"}-${index}`}
                  className="border-b"
                >
                  <td className="p-3 flex items-center gap-3">
                    <img
                      src={item.image}
                      alt={item.name}
                      className="w-16 h-16 object-cover rounded-lg border"
                    />
                    <span className="font-semibold text-gray-800">
                      {item.name}
                    </span>
                  </td>
                  <td className="p-3 text-gray-500">
                    {item.color?.name || "-"}
                  </td>
                  <td className="p-3 text-center">
                    ₹{item.price.sellPrice.toLocaleString()}
                  </td>
                  <td className="p-3 text-center">
                    <div className="flex items-center justify-center gap-2">
                      <button
                        onClick={() =>
                          updateCart(
                            item.id,
                            Math.max(1, item.qty - 1),
                            item.color
                          )
                        }
                        className="p-1 rounded-full bg-gray-100 hover:bg-gray-200"
                      >
                        <Minus size={16} />
                      </button>
                      <span className="w-8 text-center font-medium">
                        {item.qty}
                      </span>
                      <button
                        onClick={() =>
                          updateCart(item.id, item.qty + 1, item.color)
                        }
                        className="p-1 rounded-full bg-gray-100 hover:bg-gray-200"
                      >
                        <Plus size={16} />
                      </button>
                    </div>
                  </td>
                  <td className="p-3 text-center font-medium">
                    ₹{(item.price.sellPrice * item.qty).toLocaleString()}
                  </td>
                  <td className="p-3 text-center">
                    <button
                      onClick={() => removeCart(item.id, item.color)}
                      className="p-2 rounded-full bg-red-100 hover:bg-red-200 text-red-600"
                    >
                      <Trash2 size={16} />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        {/* Cart Total */}
        <div className="flex justify-between items-center mt-6">
          <p className="text-lg font-semibold text-gray-800">
            Total: ₹{total.toLocaleString()}
          </p>
          <Link
            className="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
            href="checkout"
          >
            Checkout
          </Link>
        </div>
      </div>
    </div>
  );
}
