import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { LogIn, User, Lock } from "lucide-react";

export default function Login({ users, setCurrentUser }) {
  const [form, setForm] = useState({ username: "", password: "" });
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    const user = users.find(
      (u) => u.username === form.username && u.password === form.password
    );

    if (!user) {
      setError("❌ Invalid username or password. Please try again.");
      return;
    }

    setCurrentUser(user);
    if (user.role === "artisan") navigate("/artisan");
    else if (user.role === "consultant") navigate("/consultant");
    else if (user.role === "admin") navigate("/admin");
    else navigate("/");
  };

  return (
    <section className="min-h-screen flex items-center justify-center bg-gradient-to-br from-amber-50 via-orange-100 to-amber-200 p-6">
      <motion.div
        initial={{ opacity: 0, y: 60 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="bg-white/80 backdrop-blur-xl rounded-3xl shadow-2xl p-10 w-full max-w-md border border-amber-100"
      >
        {/* Header Section */}
        <div className="text-center mb-8">
          <motion.div
            whileHover={{ scale: 1.1, rotate: 5 }}
            className="flex justify-center mb-3"
          >
            <LogIn className="w-14 h-14 text-amber-700 drop-shadow-md" />
          </motion.div>
          <h2 className="text-3xl font-extrabold text-amber-900 tracking-tight">
            Welcome Back
          </h2>
          <p className="text-gray-600 text-sm mt-1">
            Sign in to your{" "}
            <span className="font-semibold text-amber-700">
              Tribal Craft Marketplace
            </span>{" "}
            account.
          </p>
        </div>

        {/* Login Form */}
        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Username */}
          <div>
            <label className="block text-sm font-semibold text-amber-900 mb-1">
              Username
            </label>
            <div className="flex items-center gap-2 border border-amber-200 rounded-full px-4 py-2 bg-white hover:border-amber-400 transition">
              <User className="text-amber-600 w-5 h-5" />
              <input
                type="text"
                placeholder="Enter your username"
                value={form.username}
                onChange={(e) =>
                  setForm({ ...form, username: e.target.value })
                }
                className="w-full outline-none bg-transparent placeholder-gray-400"
              />
            </div>
          </div>

          {/* Password */}
          <div>
            <label className="block text-sm font-semibold text-amber-900 mb-1">
              Password
            </label>
            <div className="flex items-center gap-2 border border-amber-200 rounded-full px-4 py-2 bg-white hover:border-amber-400 transition">
              <Lock className="text-amber-600 w-5 h-5" />
              <input
                type="password"
                placeholder="Enter your password"
                value={form.password}
                onChange={(e) =>
                  setForm({ ...form, password: e.target.value })
                }
                className="w-full outline-none bg-transparent placeholder-gray-400"
              />
            </div>
          </div>

          {/* Submit Button */}
          <motion.button
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
            type="submit"
            className="w-full bg-gradient-to-r from-amber-700 to-orange-600 text-white font-semibold py-3 rounded-full shadow-lg hover:shadow-xl transition duration-300"
          >
            Login
          </motion.button>

          {/* Error Message */}
          {error && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-center text-sm mt-3 font-medium text-red-700"
            >
              {error}
            </motion.div>
          )}
        </form>

        {/* Footer / Register Redirect */}
        <div className="text-center mt-6 text-sm text-gray-700">
          Don’t have an account?{" "}
          <button
            onClick={() => navigate("/register")}
            className="text-amber-700 font-semibold hover:underline"
          >
            Register here
          </button>
        </div>
      </motion.div>
    </section>
  );
}
