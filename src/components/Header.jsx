"use client";
import React, { useEffect, useState } from "react";
import Link from "next/link";
import { useAppContext } from "@/context/AppContext";

function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [mounted, setMounted] = useState(false);
  const { search, setSearch, cart } = useAppContext();
  useEffect(() => {
    setMounted(true); // runs only on client
  }, []);

  return (
    <header className="sticky top-0 z-30 bg-white/80 backdrop-blur border-b">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <div className="flex items-center gap-6">
            <button
              className="md:hidden p-2 rounded-md border hover:bg-gray-50"
              aria-label="Toggle menu"
              onClick={() => setMobileOpen((v) => !v)}
            >
              <svg
                width="20"
                height="20"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path d="M3 6h14M3 12h14M3 18h14" />
              </svg>
            </button>
            <Link href="/" className="text-xl font-bold">
              ShopMate
            </Link>
            <nav className="hidden md:flex items-center gap-6 text-sm">
              <Link href="/products" className="hover:text-gray-600">
                Products
              </Link>
              <Link href="/about" className="hover:text-gray-600">
                About
              </Link>
              <Link href="/contact" className="hover:text-gray-600">
                Contact
              </Link>
            </nav>
          </div>

          <div className="hidden md:flex items-center gap-3">
            <div className="relative">
              <input
                type="text"
                placeholder="Search products..."
                className="w-64 rounded-md border px-3 py-2 pr-9 text-sm focus:outline-none focus:ring-2 focus:ring-black/20"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
              />
              <span className="absolute right-2 top-1/2 -translate-y-1/2 text-gray-500">
                <svg
                  width="18"
                  height="18"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <circle cx="8" cy="8" r="6" />
                  <path d="M15 15l-2.5-2.5" />
                </svg>
              </span>
            </div>
            <Link
              className="relative p-2 rounded-md hover:bg-gray-50"
              aria-label="Cart"
              href="/cart"
            >
              <svg
                width="22"
                height="22"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path d="M6 6h13l-1.5 9h-11L5 3H2" />
                <circle cx="9" cy="19" r="1" />
                <circle cx="16" cy="19" r="1" />
              </svg>
              {mounted && (
                <span className="absolute -top-1 -right-1 text-xs bg-black text-white rounded-full px-1">
                  {cart.length}
                </span>
              )}
            </Link>
          </div>
        </div>

        {/* Mobile menu */}
        {mobileOpen && (
          <div className="md:hidden pb-4 space-y-2">
            <div className="relative">
              <input
                type="text"
                placeholder="Search products..."
                className="w-full rounded-md border px-3 py-2 pr-9 text-sm focus:outline-none focus:ring-2 focus:ring-black/20"
              />
              <span className="absolute right-2 top-1/2 -translate-y-1/2 text-gray-500">
                <svg
                  width="18"
                  height="18"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <circle cx="8" cy="8" r="6" />
                  <path d="M15 15l-2.5-2.5" />
                </svg>
              </span>
            </div>
            <nav className="grid gap-2 text-sm">
              <Link href="/products" className="py-2 px-2 rounded hover:bg-gray-50">
                Products
              </Link>
              <Link
                href="/about"
                className="py-2 px-2 rounded hover:bg-gray-50"
              >
                About
              </Link>
              <Link
                href="/contact"
                className="py-2 px-2 rounded hover:bg-gray-50"
              >
                Contact
              </Link>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}

export default Header;
