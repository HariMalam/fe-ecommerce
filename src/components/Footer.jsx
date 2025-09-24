import React from 'react'
import Link from "next/link";

function Footer() {
    return (
        <footer className="border-t">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-10">
                <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
                    <div>
                        <div className="text-lg font-bold">ShopMate</div>
                        <p className="text-sm text-gray-600 mt-2">
                            Your one-stop shop for quality apparel and accessories.
                        </p>
                    </div>
                    <div>
                        <div className="font-semibold mb-2">Shop</div>
                        <ul className="space-y-2 text-sm text-gray-600">
                            <li>
                                <Link href="#" className="hover:text-gray-900">
                                    Men
                                </Link>
                            </li>
                            <li>
                                <Link href="#" className="hover:text-gray-900">
                                    Women
                                </Link>
                            </li>
                            <li>
                                <Link href="#" className="hover:text-gray-900">
                                    Kids
                                </Link>
                            </li>
                            <li>
                                <Link href="#" className="hover:text-gray-900">
                                    Accessories
                                </Link>
                            </li>
                        </ul>
                    </div>
                    <div>
                        <div className="font-semibold mb-2">Support</div>
                        <ul className="space-y-2 text-sm text-gray-600">
                            <li>
                                <Link href="#" className="hover:text-gray-900">
                                    Contact
                                </Link>
                            </li>
                            <li>
                                <Link href="#" className="hover:text-gray-900">
                                    Shipping
                                </Link>
                            </li>
                            <li>
                                <Link href="#" className="hover:text-gray-900">
                                    Returns
                                </Link>
                            </li>
                            <li>
                                <Link href="#" className="hover:text-gray-900">
                                    FAQ
                                </Link>
                            </li>
                        </ul>
                    </div>
                    <div>
                        <div className="font-semibold mb-2">Company</div>
                        <ul className="space-y-2 text-sm text-gray-600">
                            <li>
                                <Link href="#" className="hover:text-gray-900">
                                    About
                                </Link>
                            </li>
                            <li>
                                <Link href="#" className="hover:text-gray-900">
                                    Careers
                                </Link>
                            </li>
                            <li>
                                <Link href="#" className="hover:text-gray-900">
                                    Privacy
                                </Link>
                            </li>
                            <li>
                                <Link href="#" className="hover:text-gray-900">
                                    Terms
                                </Link>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className="mt-8 flex flex-col sm:flex-row items-center justify-between gap-4 border-t pt-6">
                    <p className="text-sm text-gray-600">
                        © {new Date().getFullYear()} ShopMate. All rights reserved.
                    </p>
                    <div className="flex items-center gap-4 text-gray-600">
                        <Link
                            href="#"
                            aria-label="Instagram"
                            className="hover:text-gray-900"
                        >
                            <svg
                                width="20"
                                height="20"
                                fill="none"
                                stroke="currentColor"
                                strokeWidth="2"
                            >
                                <rect x="3" y="3" width="14" height="14" rx="4" />
                                <circle cx="10" cy="10" r="3.5" />
                                <circle cx="15" cy="5" r="1" />
                            </svg>
                        </Link>
                        <Link
                            href="#"
                            aria-label="Twitter"
                            className="hover:text-gray-900"
                        >
                            <svg
                                width="20"
                                height="20"
                                fill="none"
                                stroke="currentColor"
                                strokeWidth="2"
                            >
                                <path d="M20 5.9a7.4 7.4 0 0 1-2.1.6 3.6 3.6 0 0 0 1.6-2 7.2 7.2 0 0 1-2.3.9A3.6 3.6 0 0 0 10 8.6a10.2 10.2 0 0 1-7.4-3.8 3.6 3.6 0 0 0 1.1 4.8A3.6 3.6 0 0 1 2 9.2v.1a3.6 3.6 0 0 0 2.9 3.5 3.6 3.6 0 0 1-1.6.1 3.6 3.6 0 0 0 3.4 2.6A7.2 7.2 0 0 1 2 17.6a10.1 10.1 0 0 0 5.5 1.6c6.6 0 10.2-5.5 10.2-10.2v-.5A7.2 7.2 0 0 0 20 5.9z" />
                            </svg>
                        </Link>
                        <Link
                            href="#"
                            aria-label="Facebook"
                            className="hover:text-gray-900"
                        >
                            <svg
                                width="20"
                                height="20"
                                fill="none"
                                stroke="currentColor"
                                strokeWidth="2"
                            >
                                <path d="M14 8h-2V6c0-.6.4-1 1-1h1V3h-2a3 3 0 0 0-3 3v2H7v2h2v7h3v-7h2l1-2z" />
                            </svg>
                        </Link>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer