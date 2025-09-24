"use client";
import ProductsShow from "@/components/ProductShow";
import React from "react";
import { useAppContext } from "@/context/AppContext";

function Products() {
  const { products } = useAppContext();
  return (
    <section className="py-12 sm:py-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="rounded-2xl border bg-white px-6 py-10 sm:px-10 sm:py-12">
          <ProductsShow products={products} />
        </div>
      </div>
    </section>
  );
}

export default Products;
