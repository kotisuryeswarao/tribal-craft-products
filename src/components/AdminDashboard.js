import React from "react";

export default function AdminDashboard({ users }) {
  return (
    <section>
      <h2>Admin Dashboard</h2>
      <h3>Registered Users</h3>
      <h4>captcha users</h4>
      <ul>
        {users.map((u, i) => (
          <li key={i}>
            {u.username} ({u.role})
          </li>
        ))}
      </ul>
    </section>
  );
}
