import { useAppContext } from "@/context/AppContext";
import Link from "next/link";
import ProductNotFound from "./productNotFound";
import Image from "next/image";

const ProductsShow = ({ products }) => {
    const { search } = useAppContext();

    const filteredProducts = products.filter((p) =>
        p.name.toLowerCase().includes(search.toLowerCase())
    );

    if (filteredProducts.length === 0) {
        return (
            <div className="text-center text-gray-500">
                No products found matching "{search}"
                <ProductNotFound />
            </div>
        );
    }


    return (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {filteredProducts.map((p) => (
                <div
                    key={p.id ?? p.slug}
                    className="group overflow-hidden rounded-xl border bg-white hover:shadow-md transition"
                >
                    <div className="aspect-[4/3] bg-gray-100 relative">
                        <Image
                            src={p.images?.[0] || "https://via.placeholder.com/400x300?text=No+Image"}
                            alt={p.name}
                            fill
                            className="object-cover transition-transform duration-300 group-hover:scale-105"
                            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                            priority={false}
                        />
                    </div>
                    <div className="p-4">
                        <h3 className="font-semibold text-sm sm:text-base truncate" title={p.name}>
                            {p.name}
                        </h3>
                        <div className="mt-1 text-gray-600 text-sm">
                            ₹{Number(p.price?.sellPrice ?? p.price ?? 0).toLocaleString("en-IN")}
                        </div>
                        <div className="mt-1 text-yellow-500 text-sm">
                            ★ {p.rating?.rate ?? 0} ({p.rating?.count ?? 0})
                        </div>
                        <Link
                            href={`/products/${p.slug}`}
                            aria-label={`View details for ${p.name}`}
                            className="mt-3 inline-flex w-full items-center justify-center rounded-md border border-black bg-white px-4 py-2 text-sm font-medium text-black transition hover:bg-black hover:text-white focus:outline-none focus:ring-2 focus:ring-black focus:ring-offset-2"
                        >
                            Details
                        </Link>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default ProductsShow;
