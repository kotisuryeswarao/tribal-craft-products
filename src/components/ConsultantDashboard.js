import React from "react";

export default function ConsultantDashboard({ products, setProducts }) {
  const pending = products.filter(p => !p.approved);

  const approveProduct = id => {
    setProducts(products.map(p => (p.id === id ? { ...p, approved: true } : p)));
  };

  return (
    <section>
      <h2>Consultant Dashboard</h2>
      {pending.length === 0 ? (
        <p>No products awaiting approval.</p>
      ) : (
        <div className="grid">
          {pending.map(p => (
            <div className="card" key={p.id}>
              <img src={p.image || "https://via.placeholder.com/400x300"} alt={p.name} />
              <div className="card-content">
                <h3>{p.name}</h3>
                <p>{p.description.substring(0, 60)}...</p>
                <button className="btn" onClick={() => approveProduct(p.id)}>
                  Approve
                </button>
              </div>
            </div>
          ))}
        </div>
      )}
    </section>
  );
}
