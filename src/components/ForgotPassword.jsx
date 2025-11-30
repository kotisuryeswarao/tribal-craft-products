import React, { useState } from "react";
import { motion } from "framer-motion";
import { Mail, ArrowLeft, CheckCircle } from "lucide-react";
import { useNavigate } from "react-router-dom";

export default function ForgotPassword({ users }) {
  const [email, setEmail] = useState("");
  const [msg, setMsg] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    const user = users.find((u) => u.email === email);

    if (!user) {
      setMsg("❌ Email not found!");
      return;
    }

    // Normally you'd send OTP by email → here we simulate
    setMsg("✔ OTP sent to your email. Redirecting...");
    setTimeout(() => navigate(`/reset-password/${user.username}`), 2000);
  };

  return (
    <section className="min-h-screen flex items-center justify-center bg-amber-50 p-6">
      <motion.div
        initial={{ opacity: 0, y: 60 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="bg-white rounded-3xl shadow-xl p-10 w-full max-w-md"
      >
        <button
          onClick={() => navigate("/login")}
          className="flex items-center text-amber-700 font-semibold mb-4"
        >
          <ArrowLeft className="mr-2" /> Back
        </button>

        <div className="text-center mb-6">
          <Mail className="w-12 h-12 text-amber-700 mx-auto" />
          <h2 className="text-2xl font-bold text-amber-900 mt-3">
            Forgot Password?
          </h2>
          <p className="text-gray-600 text-sm mt-1">
            Enter your registered email to recover your password.
          </p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-5">
          <input
            type="email"
            required
            placeholder="Enter your registered email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full border border-amber-300 px-4 py-3 rounded-full outline-none"
          />

          <button
            type="submit"
            className="w-full bg-amber-700 text-white py-3 rounded-full font-semibold"
          >
            Send OTP
          </button>

          {msg && (
            <div className="text-center text-green-600 font-medium mt-3">
              <CheckCircle className="inline-block mr-1" /> {msg}
            </div>
          )}
        </form>
      </motion.div>
    </section>
  );
}
