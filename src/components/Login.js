import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { LogIn, User, Lock, AlertCircle, RefreshCcw } from "lucide-react";

export default function Login({ users, setCurrentUser }) {
  const [form, setForm] = useState({ username: "", password: "" });
  const [error, setError] = useState("");

  const [captcha, setCaptcha] = useState("");
  const [captchaInput, setCaptchaInput] = useState("");

  const navigate = useNavigate();

  const generateCaptcha = () => {
    const random = Math.random().toString(36).substring(2, 7).toUpperCase();
    setCaptcha(random);
  };

  useEffect(() => {
    generateCaptcha();
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    setError("");

    if (captchaInput.toUpperCase() !== captcha) {
      setError("❌ Incorrect CAPTCHA. Please try again.");
      generateCaptcha();
      setCaptchaInput("");
      return;
    }

    const user = users.find(
      (u) => u.username === form.username && u.password === form.password
    );

    if (!user) {
      setError("Invalid username or password. Please try again.");
      generateCaptcha();
      setCaptchaInput("");
      return;
    }

    setCurrentUser(user);

    if (user.role === "artisan") navigate("/artisan");
    else if (user.role === "consultant") navigate("/consultant");
    else if (user.role === "admin") navigate("/admin");
    else navigate("/");
  };

  return (
    <>
      {/* 🔼 New Heading Added Here */}
      <div className="absolute top-4 w-full flex justify-center">
        <h1 className="text-2xl font-bold text-amber-800 bg-white/70 px-6 py-2 rounded-full shadow-md backdrop-blur">
          Page 1 / Page 2
        </h1>
      </div>

      <section className="min-h-screen flex items-center justify-center bg-gradient-to-br from-amber-50 via-orange-100 to-amber-200 p-6">
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="bg-white/80 backdrop-blur-xl rounded-3xl shadow-2xl p-10 w-full max-w-md border border-amber-100"
        >
          <div className="text-center mb-8">
            <motion.div whileHover={{ scale: 1.1, rotate: 5 }} className="flex justify-center mb-3">
              <LogIn className="w-14 h-14 text-amber-700 drop-shadow-md" />
            </motion.div>
            <h2 className="text-3xl font-extrabold text-amber-900 tracking-tight">
              Welcome Back
            </h2>
            <p className="text-gray-600 text-sm mt-1">
              Sign in to your <span className="font-semibold text-amber-700">Tribal Craft Marketplace</span>.
            </p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label className="block text-sm font-semibold text-amber-900 mb-1">Username</label>
              <div className="flex items-center gap-2 border border-amber-200 rounded-full px-4 py-2 bg-white hover:border-amber-400 transition">
                <User className="text-amber-600 w-5 h-5" />
                <input
                  type="text"
                  required
                  placeholder="Enter your username"
                  value={form.username}
                  onChange={(e) => setForm({ ...form, username: e.target.value })}
                  className="w-full outline-none bg-transparent placeholder-gray-400"
                />
              </div>
            </div>

            <div>
              <label className="block text-sm font-semibold text-amber-900 mb-1">Password</label>
              <div className="flex items-center gap-2 border border-amber-200 rounded-full px-4 py-2 bg-white hover:border-amber-400 transition">
                <Lock className="text-amber-600 w-5 h-5" />
                <input
                  type="password"
                  required
                  placeholder="Enter your password"
                  value={form.password}
                  onChange={(e) => setForm({ ...form, password: e.target.value })}
                  className="w-full outline-none bg-transparent placeholder-gray-400"
                />
              </div>
            </div>

            <div>
              <label className="block text-sm font-semibold text-amber-900 mb-1">Enter CAPTCHA</label>

              <div className="flex items-center justify-between border border-amber-300 bg-amber-50 px-4 py-3 rounded-xl font-bold tracking-widest text-amber-800 shadow-sm">
                {captcha}
                <RefreshCcw
                  className="w-5 h-5 cursor-pointer text-amber-700 hover:rotate-180 transition-transform"
                  onClick={generateCaptcha}
                />
              </div>

              <input
                type="text"
                placeholder="Type the CAPTCHA"
                value={captchaInput}
                onChange={(e) => setCaptchaInput(e.target.value)}
                className="w-full outline-none border border-amber-200 bg-white rounded-full px-4 py-2 mt-2 placeholder-gray-400"
              />
            </div>

            <motion.button
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              type="submit"
              className="w-full bg-gradient-to-r from-amber-700 to-orange-600 text-white font-semibold py-3 rounded-full shadow-lg hover:shadow-xl transition duration-300"
            >
              Login
            </motion.button>

            {error && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="flex items-center justify-center gap-2 text-sm font-medium text-red-700 bg-red-50 py-2 px-4 rounded-lg"
              >
                <AlertCircle className="w-4 h-4" />
                {error}
              </motion.div>
            )}
          </form>

          <div className="mt-6 flex justify-between text-sm">
            <button className="text-amber-700 font-medium hover:underline">
              Forgot password?
            </button>
            <div>
              No account?{" "}
              <button onClick={() => navigate("/register")} className="text-amber-700 font-semibold hover:underline">
                Register
              </button>
            </div>
          </div>
        </motion.div>
      </section>
    </>
  );
}
