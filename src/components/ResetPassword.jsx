import React, { useState } from "react";
import { motion } from "framer-motion";
import { Lock, CheckCircle } from "lucide-react";
import { useNavigate, useParams } from "react-router-dom";

export default function ResetPassword({ users, setUsers }) {
  const { username } = useParams();
  const [password, setPassword] = useState("");
  const [msg, setMsg] = useState("");
  const navigate = useNavigate();

  const handleReset = (e) => {
    e.preventDefault();

    setUsers((prev) =>
      prev.map((u) =>
        u.username === username ? { ...u, password } : u
      )
    );

    setMsg("✔ Password reset successful!");
    setTimeout(() => navigate("/login"), 2000);
  };

  return (
    <section className="min-h-screen flex items-center justify-center bg-orange-50 p-6">
      <motion.div
        initial={{ opacity: 0, y: 60 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="bg-white rounded-3xl shadow-xl p-10 w-full max-w-md"
      >
        <div className="text-center mb-6">
          <Lock className="w-12 h-12 text-amber-700 mx-auto" />
          <h2 className="text-2xl font-bold text-amber-900 mt-3">
            Reset Password
          </h2>
        </div>

        <form onSubmit={handleReset} className="space-y-5">
          <input
            type="password"
            required
            placeholder="Enter new password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full border border-amber-300 px-4 py-3 rounded-full outline-none"
          />

          <button
            type="submit"
            className="w-full bg-amber-700 text-white py-3 rounded-full font-semibold"
          >
            Reset Password
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
