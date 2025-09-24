"use client";

import { useParams } from "next/navigation";
import { useState, useMemo } from "react";
import { useAppContext } from "../../../context/AppContext";
import ProductNotFound from "@/components/productNotFound";
import { useRouter } from "next/navigation";

const inr = (v) =>
  new Intl.NumberFormat("en-IN", { style: "currency", currency: "INR" }).format(
    v
  );

export default function ProductPage() {
  const { products, addToCart, setToastData } = useAppContext();
  const { slug } = useParams();
  const product = products.find((p) => p.slug === slug);

  const [activeIdx, setActiveIdx] = useState(0);
  const [qty, setQty] = useState(1);
  const [color, setColor] = useState({
    name: product.attributes.colors?.[0].name || "",
    code: product.attributes.colors?.[0].code || "",
  });

  const discountPct = useMemo(() => {
    if (!product) return 0;
    const { mrp, sellPrice } = product.price;
    return Math.round(((mrp - sellPrice) / mrp) * 100);
  }, [product]);

  if (!product) return <ProductNotFound />;
  const router = useRouter();

  const handleAddToCart = () => {
    addToCart(product.id, qty, color);
  };

  const handleBuyNow = () => {
    // Add product to cart (or handle purchase)
    addToCart(product.id, qty, color);

    // Show purchase toast
    setToastData({
      type: "success",
      message: `You have successfully purchased ${product.name}!`,
    });

    // Navigate to checkout
    router.push("/checkout");
  };

  return (
    <div className="min-h-screen bg-[#f7f9fc] text-[#0f172a] p-2 sm:p-4">
      <div className="mx-auto max-w-5xl flex flex-col lg:flex-row gap-8">
        {/* Images Section */}
        <div className="flex-1 flex flex-col gap-4 top-4 self-start w-full lg:w-auto static">
          <div className="relative rounded-xl overflow-hidden bg-white border border-[#e5e7eb] shadow-sm">
            <img
              src={product.images[activeIdx]}
              alt={product.name}
              loading="eager"
              className="w-full h-64 sm:h-96 object-cover transition-all duration-200"
            />
            {discountPct > 0 && (
              <span className="absolute top-3 left-3 bg-[#10b981] text-white font-bold px-3 py-1.5 rounded-full text-xs shadow-md">
                -{discountPct}%
              </span>
            )}
          </div>
          <div className="flex gap-2 overflow-x-auto pb-1">
            {product.images.map((src, i) => (
              <button
                key={src}
                onClick={() => setActiveIdx(i)}
                aria-label={`Image ${i + 1}`}
                className={`border-2 rounded-lg bg-white p-0 cursor-pointer transition-all duration-150 ${
                  i === activeIdx
                    ? "border-[#3b82f6] ring-2 ring-[#93c5fd]/60"
                    : "border-[#e5e7eb]"
                }`}
              >
                <img
                  src={src}
                  alt={`${product.name} ${i + 1}`}
                  loading="lazy"
                  className="block w-16 h-16 sm:w-20 sm:h-20 object-cover"
                />
              </button>
            ))}
          </div>
        </div>
        {/* Details Section */}
        <div className="flex-1 flex flex-col gap-5">
          <div className="text-[#6b7280] text-xs mb-1">
            Home / {product.category} / {product.subCategory}
          </div>
          <h1 className="text-2xl sm:text-3xl font-bold leading-tight">
            {product.name}
          </h1>
          <div className="text-[#6b7280] text-sm mb-2">by {product.brand}</div>
          <div className="flex items-center gap-2.5 mb-2">
            <StarBar rating={product.rating.rate} />
            <span className="text-[#6b7280] text-sm">
              {product.rating.rate.toFixed(1)} (
              {formatCount(product.rating.count)})
            </span>
          </div>
          <div className="flex items-center gap-4 bg-white border border-[#e5e7eb] rounded-lg p-4">
            <div className="text-2xl font-extrabold tracking-wide">
              {inr(product.price.sellPrice)}
            </div>
            <div className="flex gap-2 items-baseline">
              <span className="text-[#6b7280] line-through text-sm">
                MRP: {inr(product.price.mrp)}
              </span>
              {discountPct > 0 && (
                <span className="text-[#059669] font-bold text-sm">
                  {discountPct}% off
                </span>
              )}
            </div>
          </div>
          <div className="flex flex-wrap items-center gap-4 text-[#475569] text-sm">
            {product.stock > 0 ? (
              <span className="text-[#059669] font-bold">In stock</span>
            ) : (
              <span className="text-[#dc2626] font-bold">Out of stock</span>
            )}
            <span className="pl-4 border-l border-[#e5e7eb]">
              SKU: {product.sku}
            </span>
          </div>
          <div className="grid gap-2.5">
            {/* Render attributes except colors */}
            {Object.entries(product.attributes)
              .filter(([key]) => key !== "colors")
              .map(([key, value]) => (
                <Attr
                  key={key}
                  label={key
                    .replace(/_/g, " ")
                    .replace(/\b\w/g, (l) => l.toUpperCase())}
                  value={value}
                />
              ))}
            {/* Render colors */}
            {product.attributes.colors && (
              <div className="flex items-center gap-2.5 text-sm">
                <div className="min-w-[110px] text-[#64748b]">Color</div>
                <div className="flex gap-2">
                  {product.attributes?.colors?.map((c) => (
                    <button
                      key={c.name}
                      type="button"
                      aria-label={c.name}
                      onClick={() => setColor(c)}
                      className={`w-7 h-7 rounded-full border-2 flex items-center justify-center transition-all duration-150 ${
                        color.name === c.name
                          ? "border-[#3b82f6] ring-2 ring-[#93c5fd]/60"
                          : "border-[#e5e7eb]"
                      }`}
                      style={{
                        backgroundColor: c.code,
                      }}
                    >
                      {color.name === c.name && (
                        <span className="block w-3 h-3 rounded-full border-2 border-white bg-white/40" />
                      )}
                    </button>
                  ))}
                </div>
              </div>
            )}
          </div>
          <div className="flex flex-col sm:flex-row gap-4 items-stretch">
            <div className="inline-flex items-center bg-white border border-[#e5e7eb] rounded-xl overflow-hidden">
              <button
                onClick={() => setQty((q) => Math.max(1, q - 1))}
                aria-label="Decrease quantity"
                className="w-10 h-10 bg-transparent text-[#111827] text-xl cursor-pointer"
              >
                -
              </button>
              <input
                type="number"
                min={1}
                max={Math.min(10, product.stock)}
                value={qty}
                onChange={(e) =>
                  setQty(Math.max(1, Math.min(10, Number(e.target.value) || 1)))
                }
                className="w-12 h-10 text-center bg-transparent text-[#111827] border-0 outline-none text-base"
              />
              <button
                onClick={() =>
                  setQty((q) => Math.min(Math.min(10, product.stock), q + 1))
                }
                aria-label="Increase quantity"
                className="w-10 h-10 bg-transparent text-[#111827] text-xl cursor-pointer"
              >
                +
              </button>
            </div>
            <div className="flex-1 flex gap-2">
              <button
                className="flex-1 h-11 rounded-xl font-bold cursor-pointer bg-white text-[#1e3a8a] border border-[#bfdbfe] hover:bg-[#eff6ff] disabled:opacity-60 disabled:cursor-not-allowed transition-all"
                onClick={handleAddToCart}
                disabled={!product.stock}
              >
                Add to Cart
              </button>
              <button
                className="flex-1 h-11 rounded-xl font-bold cursor-pointer text-white bg-gradient-to-b from-[#4f9cff] to-[#2b6fe3] shadow-md disabled:opacity-60 disabled:cursor-not-allowed transition-all"
                onClick={handleBuyNow}
                disabled={!product.stock}
              >
                Buy Now
              </button>
            </div>
          </div>
          <div className="p-4 border border-[#e5e7eb] rounded-xl bg-white mt-2">
            <h2 className="mb-2 text-lg font-semibold">Description</h2>
            <p className="text-[#334155] leading-relaxed">
              {product.description}
            </p>
          </div>
          <div className="p-4 border border-[#e5e7eb] rounded-xl bg-white">
            <h2 className="mb-2 text-lg font-semibold">Features</h2>
            <ul className="pl-5 text-[#334155] leading-relaxed list-disc space-y-1">
              {product.features.map((f) => (
                <li key={f}>{f}</li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

function Attr({ label, value }) {
  return (
    <div className="flex items-center gap-2.5 text-sm">
      <div className="min-w-[110px] text-[#64748b]">{label}</div>
      <div>{value}</div>
    </div>
  );
}

function StarBar({ rating }) {
  const pct = Math.max(0, Math.min(100, (rating / 5) * 100));
  const mask =
    'url(\'data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="110" height="18" viewBox="0 0 110 18" fill="none"><g fill="%23ffffff"><path d="M9 0l2.472 5.008 5.528.804-4 3.902.944 5.5L9 12.9 4.056 15.214 5 9.714l-4-3.902 5.528-.804L9 0z"/><path d="M31 0l2.472 5.008 5.528.804-4 3.902.944 5.5L31 12.9l-4.944 2.314.944-5.5-4-3.902 5.528-.804L31 0z"/><path d="M53 0l2.472 5.008 5.528.804-4 3.902.944 5.5L53 12.9l-4.944 2.314.944-5.5-4-3.902 5.528-.804L53 0z"/><path d="M75 0l2.472 5.008 5.528.804-4 3.902.944 5.5L75 12.9l-4.944 2.314.944-5.5-4-3.902 5.528-.804L75 0z"/><path d="M97 0l2.472 5.008 5.528.804-4 3.902.944 5.5L97 12.9l-4.944 2.314.944-5.5-4-3.902 5.528-.804L97 0z"/></g></svg>\')';
  return (
    <div
      className="relative w-[110px] h-[18px]"
      aria-label={`Rating ${rating} out of 5`}
    >
      <div
        className="absolute inset-0 bg-[#e2e8f0]"
        style={{ WebkitMaskImage: mask, maskImage: mask }}
      />
      <div
        className="absolute inset-y-0 left-0 bg-[#f59e0b]"
        style={{ width: `${pct}%`, WebkitMaskImage: mask, maskImage: mask }}
      />
    </div>
  );
}

function formatCount(n) {
  if (n >= 1_000_000) return (n / 1_000_000).toFixed(1) + "M";
  if (n >= 1_000) return (n / 1_000).toFixed(1) + "k";
  return String(n);
}
