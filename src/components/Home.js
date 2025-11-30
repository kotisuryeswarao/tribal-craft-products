import React, { useState } from "react";
import { motion } from "framer-motion";

export default function Home({ products, onNavigate }) {
  const [search, setSearch] = useState("");

  const filteredProducts = products.filter((p) =>
    p.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <section className="min-h-screen bg-gradient-to-br from-amber-100 via-orange-50 to-amber-200">
      
      {/* 🌄 Hero Banner */}
      <div className="relative w-full h-[65vh] overflow-hidden flex items-center justify-center mb-10">
        <motion.img
          src="https://images.unsplash.com/photo-1602016753462-3e3e5dfd01b3?auto=format&fit=crop&w=1600&q=80"
          alt="Tribal Art Banner"
          className="absolute inset-0 w-full h-full object-cover"
          initial={{ scale: 1.1 }}
          animate={{ scale: 1 }}
          transition={{ duration: 2 }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/80 to-black/40" />

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="relative z-10 text-center text-white px-6"
        >
          <h1 className="text-5xl md:text-6xl font-bold tracking-wide mb-4 drop-shadow-lg">
            Discover Handcrafted Tribal Treasures
          </h1>
          <p className="text-lg md:text-xl max-w-3xl mx-auto text-amber-100">
            Explore authentic crafts made with love by tribal artisans across India.
          </p>
        </motion.div>
      </div>

      {/* ⭐ Page Buttons */}
      <div className="flex justify-center gap-6 mb-12">
        <motion.button
          whileHover={{ scale: 1.08 }}
          whileTap={{ scale: 0.95 }}
          onClick={() => onNavigate("page1")}
          className="px-8 py-3 bg-gradient-to-r from-amber-700 to-orange-600 text-white font-semibold rounded-full shadow-lg"
        >
          📄 Page 1
        </motion.button>

        <motion.button
          whileHover={{ scale: 1.08 }}
          whileTap={{ scale: 0.95 }}
          onClick={() => onNavigate("page2")}
          className="px-8 py-3 bg-gradient-to-r from-orange-600 to-amber-700 text-white font-semibold rounded-full shadow-lg"
        >
          📄 Page 2
        </motion.button>
      </div>

      {/* 🔍 Search */}
      <div className="flex justify-center mb-12 px-4">
        <input
          type="text"
          placeholder="🔍 Search for tribal crafts..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="w-full md:w-1/3 px-5 py-3 rounded-full border-2 border-amber-600 shadow-lg text-lg bg-white"
        />
      </div>

      {/* 🛍️ Product Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-10 px-6 lg:px-20 pb-20">
        {filteredProducts.length === 0 ? (
          <p className="text-center text-amber-800 text-lg col-span-full font-semibold">
            No crafts found.
          </p>
        ) : (
          filteredProducts.map((p, index) => (
            <motion.div
              key={p.id}
              className="bg-white/95 rounded-2xl shadow-xl overflow-hidden flex flex-col border border-amber-200"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <div className="relative w-full h-[280px] overflow-hidden">
                <motion.img
                  src={p.image}
                  alt={p.name}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent"></div>

                <div className="absolute top-0 left-0 w-full p-4 flex justify-between items-start text-white">
                  <span className="bg-amber-700 text-xs font-semibold px-3 py-1 rounded-full">
                    {p.artisan}
                  </span>
                  <span className="bg-green-600 text-sm font-bold px-3 py-1 rounded-full">
                    ₹{p.price.toFixed(2)}
                  </span>
                </div>

                <div className="absolute bottom-4 left-0 w-full text-center">
                  <h3 className="text-xl font-semibold text-white drop-shadow-lg">
                    {p.name}
                  </h3>
                </div>
              </div>

              <div className="p-6 flex flex-col items-center gap-4 mt-auto">
                <p className="text-gray-700 text-sm text-center line-clamp-2 mb-2">
                  {p.description}
                </p>

                <div className="flex gap-4">
                  <motion.button
                    whileHover={{ scale: 1.07 }}
                    whileTap={{ scale: 0.95 }}
                    className="px-6 py-2 bg-gradient-to-r from-amber-700 via-orange-600 to-amber-500 text-white rounded-full shadow-md"
                  >
                    🛒 Add to Cart
                  </motion.button>

                  <motion.a
                    whileHover={{ scale: 1.07 }}
                    whileTap={{ scale: 0.95 }}
                    href={`/product/${p.id}`}
                    className="px-6 py-2 border-2 border-amber-700 text-amber-800 rounded-full hover:bg-gradient-to-r hover:from-amber-700 hover:to-orange-600 hover:text-white shadow-md"
                  >
                    👁️ View Details
                  </motion.a>
                </div>
              </div>
            </motion.div>
          ))
        )}
      </div>

      {/* 🌾 Call to Action */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1 }}
        className="bg-gradient-to-r from-amber-900 via-orange-700 to-amber-800 text-white text-center py-20 mt-10 shadow-inner"
      >
        <h2 className="text-4xl md:text-5xl font-extrabold mb-6">Empower Tribal Communities</h2>
        <p className="max-w-2xl mx-auto text-lg mb-8 text-amber-100">
          Every purchase supports artisans, celebrates culture, and preserves heritage.
        </p>
        <motion.button
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
          className="px-10 py-3 bg-white text-amber-800 border-2 border-white font-bold rounded-full shadow-xl"
        >
          🌸 Start Shopping
        </motion.button>
      </motion.div>
    </section>
  );
}
