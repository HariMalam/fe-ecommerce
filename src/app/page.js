"use client";
import Link from "next/link";
import Featured from "@/components/Featured";
import { useAppContext } from "@/context/AppContext";
import { useState } from "react";

export default function Home() {
  const { setToastData } = useAppContext();
  const [email, setEmail] = useState("");

  const handleSubsribe = (event) => {
    event.preventDefault();
    setToastData({
      type: "success",
      message: `You have successfully subscribed with ${email}`,
    });
  };
  return (
    <>
      {/* Hero */}
      <section id="new" className="relative overflow-hidden">
        <div className="pointer-events-none absolute inset-0 -z-10 bg-gradient-to-b from-white via-white to-gray-50" />
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12 md:py-20">
          <div className="grid md:grid-cols-2 gap-10 items-center">
            <div className="space-y-6">
              <span className="inline-block text-xs font-semibold tracking-wider uppercase text-gray-600">
                New Season • Up to 50% Off
              </span>
              <h1 className="text-4xl sm:text-5xl font-extrabold leading-tight">
                Discover your style with our latest collections
              </h1>
              <p className="text-gray-600">
                Curated essentials for everyday comfort. Premium quality, fair
                prices, fast shipping.
              </p>
              <div className="flex flex-col sm:flex-row gap-3">
                <Link
                  href="#featured"
                  className="inline-flex items-center justify-center rounded-md bg-black text-white px-6 py-3 text-sm font-medium hover:bg-black/90"
                >
                  Shop Now
                </Link>
              </div>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 pt-2">
                {[
                  { t: "Free Shipping", d: "Orders over $50" },
                  { t: "Secure Checkout", d: "Protected payments" },
                  { t: "Easy Returns", d: "30-day policy" },
                  { t: "24/7 Support", d: "We’re here to help" },
                ].map((f) => (
                  <div key={f.t} className="flex items-start gap-2">
                    <span className="mt-1 text-green-600">
                      <svg
                        width="18"
                        height="18"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                      >
                        <path d="M20 6L9 17l-5-5" />
                      </svg>
                    </span>
                    <div>
                      <div className="text-sm font-semibold">{f.t}</div>
                      <div className="text-xs text-gray-500">{f.d}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="relative">
              <div className="absolute -right-10 -top-10 h-64 w-64 rounded-full bg-black/5 blur-3xl hidden sm:block" />
              <div className="aspect-[4/3] rounded-2xl bg-gray-100 overflow-hidden shadow-lg">
                <img
                  src="https://images.unsplash.com/photo-1515378791036-0648a3ef77b2?q=80&w=1600&auto=format&fit=crop"
                  alt="Latest collection"
                  className="h-full w-full object-cover"
                  loading="eager"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured */}
      <Featured />

      {/* Newsletter */}
      <section className="py-12 sm:py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="rounded-2xl border bg-white px-6 py-10 sm:px-10 sm:py-12">
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div>
                <h3 className="text-2xl font-bold">
                  Get 10% off your first order
                </h3>
                <p className="text-gray-600 mt-1">
                  Subscribe for new arrivals, trends, and exclusive offers.
                </p>
              </div>
              <form
                className="flex flex-col sm:flex-row gap-3"
                onSubmit={handleSubsribe}
              >
                <input
                  type="email"
                  required
                  placeholder="Your email address"
                  className="w-full sm:flex-1 rounded-md border px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-black/20"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
                <button
                  className="rounded-md bg-black text-white px-6 py-3 text-sm font-medium hover:bg-black/90"
                  type="submit"
                >
                  Subscribe
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
