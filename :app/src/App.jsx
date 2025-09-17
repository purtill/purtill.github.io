import { useState } from "react";

export default function App() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    flavor: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

      // Push dataLayer event
  if (window.dataLayer) {
    window.dataLayer.push({
      event: "cakeFormSubmitted",
      formName: "Bespoke Cake Form",
      formData: {
        name: formData.name,
        email: formData.email,
        flavor: formData.flavor,
      },
    });
  }

    alert(`Thank you ${formData.name}! We received your cake request.`);
    setFormData({ name: "", email: "", flavor: "", message: "" });
  };

  return (
    <div
      style={{
        fontFamily: "Arial, sans-serif",
        backgroundColor: "#fff3f5",
        minHeight: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        padding: "2rem",
      }}
    >
      <div
        style={{
          backgroundColor: "#ffffff",
          padding: "2rem",
          borderRadius: "12px",
          boxShadow: "0 4px 12px rgba(0,0,0,0.1)",
          width: "100%",
          maxWidth: "500px",
        }}
      >
        <h1 style={{ textAlign: "center", color: "#ff7eb3" }}>
          Bespoke Cake Order
        </h1>
        <form
          onSubmit={handleSubmit}
          style={{ display: "flex", flexDirection: "column", gap: "1rem" }}
        >
          <label style={{color: '#ff7eb3'}}>
            Name:
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder = "Percy Ingle"
              required
              style={{
                width: "100%",
                background: '#fbd3ffff',
                color: '#232323ff',
                padding: "0.5rem",
                borderRadius: "6px",
                border: "1px solid #ddd",
                marginTop: "0.25rem",
              }}
            />
          </label>

          <label style={{color: '#ff7eb3'}}>
            Email:
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              style={{
                width: "100%",
                background: '#fbd3ffff',
                color: '#232323ff',
                padding: "0.5rem",
                borderRadius: "6px",
                border: "1px solid #ddd",
                marginTop: "0.25rem",
              }}
            />
          </label>

          <label style={{color: '#ff7eb3'}}>
            Favorite Cake Flavor:
            <select
              name="flavor"
              value={formData.flavor}
              onChange={handleChange}
              required
              style={{
                width: "100%",
                background: '#fbd3ffff',
                color: '#232323ff',
                padding: "0.6rem",
                borderRadius: "6px",
                border: "1px solid #ddd",
                marginTop: "0.25rem",
              }}
            >
              <option value="">--Select a flavor--</option>
              <option value="chocolate">Chocolate</option>
              <option value="vanilla">Vanilla</option>
              <option value="red velvet">Red Velvet</option>
              <option value="lemon">Lemon</option>
              <option value="carrot">Carrot</option>
            </select>
          </label>

          <label style={{color: '#ff7eb3'}}>
            Special Requests:
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              rows="4"
              style={{
                width: "100%",
                                background: '#fbd3ffff',
                color: '#232323ff',
                padding: "0.5rem",
                borderRadius: "6px",
                border: "1px solid #ddd",
                marginTop: "0.25rem",
              }}
            />
          </label>

          <button
            type="submit"
            style={{
              padding: "0.75rem",
              backgroundColor: "#ff7eb3",
              border: "none",
              borderRadius: "8px",
              color: "white",
              fontWeight: "bold",
              cursor: "pointer",
              marginTop: "1rem",
            }}
          >
            Submit Order
          </button>
        </form>
    </div>
    </div>
  );
}
