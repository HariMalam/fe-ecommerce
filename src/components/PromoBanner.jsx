import React from 'react'
import Link from "next/link";

function PromoBanner() {
    return (
        <div
            id="deals"
            className="mt-10 overflow-hidden rounded-2xl bg-gradient-to-r from-gray-900 to-black text-white"
        >
            <div className="px-6 sm:px-10 py-10 flex flex-col md:flex-row items-center gap-6 md:gap-10">
                <div className="flex-1">
                    <h3 className="text-2xl sm:text-3xl font-bold">
                        Weekend Deal: Extra 20% Off
                    </h3>
                    <p className="text-white/80 mt-1">
                        Use code WEEKEND20 at checkout. Limited time only.
                    </p>
                </div>
                <Link
                    href="#featured"
                    className="inline-flex items-center justify-center rounded-md bg-white text-black px-6 py-3 text-sm font-medium hover:bg-white/90"
                >
                    Shop Deals
                </Link>
            </div>
        </div>
    )
}

export default PromoBanner