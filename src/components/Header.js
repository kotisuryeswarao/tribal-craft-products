import React from "react";
import { motion } from "framer-motion";
import { ShoppingBag, LogOut, LogIn, UserPlus, Home } from "lucide-react";

export default function Header({ currentUser, onNavigate, onLogout }) {
  return (
    <motion.header
      initial={{ y: -60, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.7 }}
      className="sticky top-0 z-50 bg-gradient-to-r from-amber-700 via-orange-600 to-amber-800 shadow-lg"
    >
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between text-white">
        {/* Logo / Title */}
        <div
          className="flex items-center gap-3 cursor-pointer"
          onClick={() => onNavigate("home")}
        >
          <ShoppingBag className="w-8 h-8 text-white" />
          <h1 className="text-2xl font-bold tracking-wide hover:text-amber-100 transition">
            Tribal Craft Marketplace
          </h1>
        </div>

        {/* Navigation */}
        <nav className="flex items-center gap-4 md:gap-6">
          <button
            onClick={() => onNavigate("home")}
            className="flex items-center gap-1 hover:text-amber-200 transition"
          >
            <Home size={18} />
            <span>Home</span>
          </button>

          {!currentUser && (
            <>
              <button
                onClick={() => onNavigate("register")}
                className="flex items-center gap-1 hover:text-amber-200 transition"
              >
                <UserPlus size={18} />
                <span>Register</span>
              </button>

              <button
                onClick={() => onNavigate("login")}
                className="flex items-center gap-1 hover:text-amber-200 transition"
              >
                <LogIn size={18} />
                <span>Login</span>
              </button>
            </>
          )}

          {currentUser && (
            <>
              <span className="hidden md:inline-block bg-white/20 text-white px-4 py-1 rounded-full text-sm">
                👋 Hi, <strong>{currentUser.username}</strong>
              </span>
              <button
                onClick={onLogout}
                className="flex items-center gap-1 bg-white text-amber-800 px-4 py-1.5 rounded-full font-semibold hover:bg-amber-100 transition"
              >
                <LogOut size={18} />
                <span>Logout</span>
              </button>
            </>
          )}
        </nav>
      </div>
    </motion.header>
  );
}
