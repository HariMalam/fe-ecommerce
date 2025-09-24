"use client";
import { useAppContext } from "@/context/AppContext"; // adjust import path
import { CheckCircle } from "lucide-react";
import { useEffect, useState } from "react";

export default function CheckoutPage() {
  const { cart, setCart, setToastData } = useAppContext();
  const [checkout, setCheckout] = useState(cart);
  useEffect(() => {
    setToastData({
      type: "success",
      message: `Your order has been placed successfully!`,
    });
    setCart([]);
  }, []);

  const total = Array.isArray(checkout)
    ? checkout.reduce((sum, item) => sum + item.price.sellPrice * item.qty, 0)
    : 0;

  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center p-6">
      <div className="max-w-2xl w-full bg-white rounded-2xl shadow-lg p-6">
        {/* Header */}
        <h1 className="text-2xl font-bold text-gray-800 mb-4">Invoice</h1>

        {/* Invoice Table */}
        <div className="overflow-x-auto">
          <table className="w-full border border-gray-200 rounded-lg">
            <thead>
              <tr className="bg-gray-100 text-gray-700 text-sm">
                <th className="text-left p-3 border-b">Product</th>
                <th className="text-center p-3 border-b">Qty</th>
                <th className="text-center p-3 border-b">Price</th>
                <th className="text-right p-3 border-b">Total</th>
              </tr>
            </thead>
            <tbody>
              {checkout.map((item, idx) => (
                <tr key={`${item.id}-${idx}`} className="text-gray-700">
                  <td className="p-3 border-b">{item.name}</td>
                  <td className="text-center p-3 border-b">{item.qty}</td>
                  <td className="text-center p-3 border-b">
                    ₹{item.price.sellPrice.toLocaleString()}
                  </td>
                  <td className="text-right p-3 border-b">
                    ₹{(item.price.sellPrice * item.qty).toLocaleString()}
                  </td>
                </tr>
              ))}
              <tr className="font-semibold text-gray-800 bg-gray-50">
                <td colSpan={3} className="p-3 text-right border-t">
                  Grand Total
                </td>
                <td className="p-3 text-right border-t">
                  ₹{total.toLocaleString()}
                </td>
              </tr>
            </tbody>
          </table>
        </div>

        {/* Payment Done */}
        <div className="flex flex-col items-center justify-center mt-8">
          <CheckCircle className="w-16 h-16 text-green-500 mb-3" />
          <h2 className="text-xl font-bold text-gray-800">
            Payment Successful
          </h2>
          <p className="text-gray-600 mt-1">Thank you for your purchase 🎉</p>
        </div>
      </div>
    </div>
  );
}
