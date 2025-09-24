import React from 'react'
import Link from "next/link";
import ProductsShow from '@/components/ProductShow'
import PromoBanner from '@/components/PromoBanner'
import { useAppContext } from '@/context/AppContext';

function Featured() {
    const { products } = useAppContext()
    const displayedProducts = products.slice(0, 8);

    return (
        <section id="featured" className="py-12 sm:py-16 bg-gray-50">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                <div className="flex items-end justify-between mb-6">
                    <h2 className="text-2xl sm:text-3xl font-bold">
                        Featured Products
                    </h2>
                    <Link
                        href="/products"
                        className="text-sm text-gray-600 hover:text-gray-900"
                    >
                        See more
                    </Link>
                </div>

                <ProductsShow products={displayedProducts} />

                {/* Promo banner */}
                <PromoBanner />
            </div>
        </section>
    )
}

export default Featured