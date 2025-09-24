import React from 'react';

const ProductNotFound = () => (
    <div className="text-center py-16 px-4">
        <h1 className="text-3xl font-bold mb-4">Product Not Found</h1>
        <p className="text-lg mb-6 text-gray-600">
            Sorry, the product you are looking for does not exist or is unavailable.
        </p>
        <img
            src="https://cdn-icons-png.flaticon.com/512/2748/2748558.png"
            alt="Product Not Found"
            className="w-36 mx-auto my-8"
        />
    </div>
);

export default ProductNotFound;
