import React from "react";
import { useParams, Link } from "react-router-dom";
import { motion } from "framer-motion";

export default function ProductDetails({ products }) {
  const { id } = useParams();
  const product = products.find((p) => p.id === id);

  if (!product) {
    return (
      <div className="flex flex-col items-center justify-center min-h-[70vh] text-center text-green-800">
        <h2 className="text-4xl font-bold mb-4">⚠️ Product Not Found</h2>
        <Link
          to="/"
          className="bg-gradient-to-r from-green-700 to-emerald-600 text-white px-8 py-3 rounded-full font-semibold shadow-md hover:shadow-xl border-2 border-transparent hover:border-white transition-all duration-300"
        >
          ← Back to Home
        </Link>
      </div>
    );
  }

  // Payment handlers
  const handleUPIPayment = () => {
    alert(`UPI payment initiated for ${product.name} (₹${product.price.toFixed(2)})`);
  };

  const handleCardPayment = () => {
    alert(`Card payment initiated for ${product.name} (₹${product.price.toFixed(2)})`);
  };

  const handleCODPayment = () => {
    alert(`Cash on Delivery selected for ${product.name}`);
  };

  return (
    <motion.section
      className="max-w-6xl mx-auto bg-white shadow-2xl rounded-3xl overflow-hidden my-12 p-10 flex flex-col md:flex-row md:items-start gap-10 border border-green-200"
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
    >
      {/* Product Image */}
      <motion.div
        className="w-full md:w-1/2 flex-shrink-0 overflow-hidden rounded-2xl shadow-md"
        whileHover={{ scale: 1.02 }}
        transition={{ duration: 0.4 }}
      >
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-[400px] object-cover rounded-2xl"
        />
      </motion.div>

      {/* Product Details */}
      <div className="w-full md:w-1/2 space-y-5">
        <h1 className="text-4xl font-extrabold text-green-900">{product.name}</h1>
        <p className="text-gray-700 text-lg leading-relaxed">{product.description}</p>

        <div className="pt-2">
          <p className="text-emerald-700 text-2xl font-bold">₹{product.price.toFixed(2)}</p>
          <p className="text-green-700 font-semibold mt-1">
            Crafted by: <span className="italic">{product.artisan || "Unknown Artisan"}</span>
          </p>
        </div>

        {/* Buttons */}
        <div className="flex flex-wrap gap-4 pt-6">
          <motion.button
            whileHover={{
              scale: 1.05,
              backgroundColor: "#16a34a",
              color: "#ffffff",
              borderColor: "#065f46",
            }}
            whileTap={{ scale: 0.95 }}
            className="bg-gradient-to-r from-green-700 to-emerald-600 text-white border-2 border-transparent px-7 py-3 rounded-full font-semibold shadow-md hover:shadow-xl transition-all duration-300"
          >
            🛒 Add to Cart
          </motion.button>

          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            <Link
              to="/"
              className="relative overflow-hidden border-2 border-green-700 text-green-800 px-7 py-3 rounded-full font-semibold shadow-md transition-all duration-300 bg-transparent group"
            >
              <span className="relative z-10">← Back to Shop</span>
              <span className="absolute inset-0 bg-gradient-to-r from-green-700 to-emerald-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-full"></span>
            </Link>
          </motion.div>
        </div>

        {/* Payment Methods */}
        <div className="mt-10 bg-green-50 border-2 border-green-200 rounded-2xl p-6 shadow-md">
          <h2 className="text-2xl font-bold text-green-800 mb-4 text-center">💳 Choose Payment Method</h2>
          <div className="flex flex-col md:flex-row gap-4 justify-center">
            <button
              onClick={handleUPIPayment}
              className="flex-1 px-6 py-3 bg-green-700 text-white rounded-full shadow-md hover:bg-green-800 transition"
            >
              UPI Payment
            </button>
            <button
              onClick={handleCardPayment}
              className="flex-1 px-6 py-3 bg-green-600 text-white rounded-full shadow-md hover:bg-green-700 transition"
            >
              Credit/Debit Card
            </button>
            <button
              onClick={handleCODPayment}
              className="flex-1 px-6 py-3 bg-green-500 text-white rounded-full shadow-md hover:bg-green-600 transition"
            >
              Cash on Delivery
            </button>
          </div>
        </div>
      </div>
    </motion.section>
  );
}
