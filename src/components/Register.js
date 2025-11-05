import React, { useState } from "react";
import { motion } from "framer-motion";
import { UserPlus, Shield, Lock, User } from "lucide-react";

export default function Register({ users, setUsers }) {
  const [form, setForm] = useState({ role: "", username: "", password: "" });
  const [message, setMessage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    const { role, username, password } = form;

    if (!role || !username || !password) {
      setMessage("⚠️ Please fill in all fields.");
      return;
    }

    if (users.some((u) => u.username === username)) {
      setMessage("❌ Username already exists. Try a different one.");
      return;
    }

    setUsers([...users, { username, password, role }]);
    setMessage("✅ Registration successful! You can now log in.");
    setForm({ role: "", username: "", password: "" });
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
            <UserPlus className="w-14 h-14 text-amber-700 drop-shadow-md" />
          </motion.div>
          <h2 className="text-3xl font-extrabold text-amber-900 tracking-tight">
            Create Your Account
          </h2>
          <p className="text-gray-600 text-sm mt-1">
            Join the{" "}
            <span className="font-semibold text-amber-700">
              Tribal Craft Marketplace
            </span>{" "}
            and start your journey.
          </p>
        </div>

        {/* Registration Form */}
        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Role */}
          <div>
            <label className="block text-sm font-semibold text-amber-900 mb-1">
              Select Role
            </label>
            <div className="flex items-center gap-2 border border-amber-200 rounded-full px-4 py-2 bg-white hover:border-amber-400 transition">
              <Shield className="text-amber-600 w-5 h-5" />
              <select
                value={form.role}
                onChange={(e) => setForm({ ...form, role: e.target.value })}
                className="w-full outline-none text-gray-700 bg-transparent appearance-none cursor-pointer"
              >
                <option value="">Choose a role</option>
                <option value="artisan">Artisan</option>
                <option value="customer">Customer</option>
                <option value="consultant">Consultant</option>
                <option value="admin">Admin</option>
              </select>
            </div>
          </div>

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
                placeholder="Enter a secure password"
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
            Register
          </motion.button>

          {/* Feedback Message */}
          {message && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-center text-sm mt-3 font-medium text-amber-800"
            >
              {message}
            </motion.div>
          )}
        </form>
      </motion.div>
    </section>
  );
}
