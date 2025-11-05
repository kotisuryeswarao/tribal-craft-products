import React, { useState } from "react";

export default function ArtisanDashboard({ products, setProducts, currentUser }) {
  const [form, setForm] = useState({ name: "", description: "", price: "", image: "" });
  const myProducts = products.filter(p => p.artisan === currentUser.username);

  const handleSubmit = e => {
    e.preventDefault();
    const newProduct = {
      id: "p" + (products.length + 1),
      name: form.name,
      description: form.description,
      price: parseFloat(form.price),
      image: form.image,
      artisan: currentUser.username,
      approved: false,
    };
    setProducts([...products, newProduct]);
    setForm({ name: "", description: "", price: "", image: "" });
    alert("Product added! Awaiting consultant approval.");
  };

  return (
    <section>
      <h2>Artisan Dashboard</h2>
      <form onSubmit={handleSubmit}>
        <input placeholder="Product Name" value={form.name} onChange={e => setForm({ ...form, name: e.target.value })}/>
        <textarea placeholder="Description" value={form.description} onChange={e => setForm({ ...form, description: e.target.value })}/>
        <input placeholder="Price (₹)" value={form.price} onChange={e => setForm({ ...form, price: e.target.value })}/>
        <input placeholder="Image URL" value={form.image} onChange={e => setForm({ ...form, image: e.target.value })}/>
        <button type="submit">Add Product</button>
      </form>

      <h3>Your Products</h3>
      <div className="grid">
        {myProducts.map(p => (
          <div className="card" key={p.id}>
            <img src={p.image || "https://via.placeholder.com/400x300"} alt={p.name} />
            <div className="card-content">
              <h3>{p.name}</h3>
              <p>Status: {p.approved ? "✅ Approved" : "⏳ Pending"}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
