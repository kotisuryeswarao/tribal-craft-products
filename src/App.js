import React, { useState } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
  Navigate,
  useLocation,
} from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";

import Home from "./components/Home";
import Register from "./components/Register";
import Login from "./components/Login";
import ArtisanDashboard from "./components/ArtisanDashboard";
import ConsultantDashboard from "./components/ConsultantDashboard";
import AdminDashboard from "./components/AdminDashboard";
import ProductDetails from "./components/ProductDetails";

function AnimatedRoutes({ users, setUsers, products, setProducts, currentUser, setCurrentUser }) {
  const location = useLocation();

  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route
          path="/"
          element={<Home products={products.filter((p) => p.approved)} />}
        />
        <Route
          path="/product/:id"
          element={<ProductDetails products={products} />}
        />
        <Route
          path="/register"
          element={<Register users={users} setUsers={setUsers} />}
        />
        <Route
          path="/login"
          element={<Login users={users} setCurrentUser={setCurrentUser} />}
        />
        <Route
          path="/artisan"
          element={
            currentUser?.role === "artisan" ? (
              <ArtisanDashboard
                products={products}
                setProducts={setProducts}
                currentUser={currentUser}
              />
            ) : (
              <Navigate to="/" />
            )
          }
        />
        <Route
          path="/consultant"
          element={
            currentUser?.role === "consultant" ? (
              <ConsultantDashboard
                products={products}
                setProducts={setProducts}
              />
            ) : (
              <Navigate to="/" />
            )
          }
        />
        <Route
          path="/admin"
          element={
            currentUser?.role === "admin" ? (
              <AdminDashboard users={users} />
            ) : (
              <Navigate to="/" />
            )
          }
        />
      </Routes>
    </AnimatePresence>
  );
}

export default function App() {
  const [users, setUsers] = useState([]);
  const [products, setProducts] = useState([
    {
      id: "p1",
      name: "Handcrafted Rosewood Jewelry Box",
      description:
        "Elegant rosewood jewelry box with intricate Indian carving, perfect to store your precious items securely.",
      price: 850,
      image: "/images/OIP.webp",
      approved: true,
    },
    {
      id: "p2",
      name: "Teak Wood Wall Hanging",
      description:
        "Decorative teak wood wall hanging with intricate floral patterns, adds warmth and elegance to any room.",
      price: 1200.75,
      image: "/images/OIP1.webp",
      approved: true,
    },
    {
      id: "p3",
      name: "Handwoven Bamboo Basket",
      description:
        "Eco-friendly handwoven bamboo basket crafted by tribal artisans, perfect for daily use or decoration.",
      price: 650.5,
      image: "/images/OIP2.webp",
      approved: true,
    },
  ]);

  const [currentUser, setCurrentUser] = useState(null);
  const logout = () => setCurrentUser(null);

  return (
    <Router>
      {/* 🌟 Modern Header */}
      <header className="bg-gradient-to-r from-amber-900 via-orange-700 to-amber-600 shadow-lg sticky top-0 z-50 backdrop-blur-lg bg-opacity-90">
        <div className="max-w-7xl mx-auto px-6 py-4 flex flex-wrap items-center justify-between text-white">
          {/* 🌿 Logo */}
          <Link
            to="/"
            className="text-3xl font-extrabold tracking-tight hover:text-amber-200 transition-colors"
          >
            Tribal<span className="text-orange-300">Craft</span>
          </Link>

          {/* 🧭 Navigation */}
          <nav className="flex flex-wrap items-center gap-4 mt-3 md:mt-0">
            <NavButton to="/" label="Home" />
            {!currentUser && (
              <>
                <NavButton to="/register" label="Register" />
                <NavButton to="/login" label="Login" />
              </>
            )}

            {currentUser && (
              <>
                <span className="bg-white text-amber-800 px-3 py-1 rounded-full font-semibold shadow-sm">
                  👋 Hi, {currentUser.username}
                </span>
                <button
                  onClick={logout}
                  className="bg-gradient-to-r from-red-600 to-orange-600 px-4 py-2 rounded-full font-semibold hover:from-red-700 hover:to-orange-700 shadow-md hover:shadow-xl transition-all duration-300"
                >
                  Logout
                </button>
              </>
            )}
          </nav>
        </div>
      </header>

      {/* ✨ Page Transition Wrapper */}
      <motion.main
        className="min-h-screen bg-gradient-to-br from-orange-50 via-amber-50 to-yellow-100"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        <AnimatedRoutes
          users={users}
          setUsers={setUsers}
          products={products}
          setProducts={setProducts}
          currentUser={currentUser}
          setCurrentUser={setCurrentUser}
        />
      </motion.main>

    </Router>
  );
}

/* 🔹 Reusable NavButton Component */
function NavButton({ to, label }) {
  return (
    <Link
      to={to}
      className="bg-gradient-to-r from-amber-600 to-orange-500 px-4 py-2 rounded-full border-2 border-transparent font-semibold hover:border-white hover:from-amber-700 hover:to-orange-600 shadow-md hover:shadow-lg transition-all duration-300"
    >
      {label}
    </Link>
  );
}