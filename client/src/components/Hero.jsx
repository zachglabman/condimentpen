import React, { useState } from "react";
import "../css/hero.css";
import pen from "../images/pen.png";

const Hero = () => {
  const [email, setEmail] = useState("");
  const [error, setError] = useState(null);
  const [message, setMessage] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await fetch("/api/subscribe", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email }),
      });

      if (res.status === 200) {
        setMessage("Success");
      } else {
        console.log(`error: ${res.status}`);
        console.log(`response: ${res}`);

        throw new Error("Failed to submit email");
      }
    } catch (error) {
      setError(error.message);
    }
  };

  return (
    <div className="hero">
      <div className="hero-left">
        <h1>Condiment Pen</h1>
        <h3>Say Goodbye to Soggy Sandwiches</h3>
        <p>
          A convenient and mess-free way to dispense your favorite condiments.
        </p>
        <p>Perfect for use at home or on-the-go.</p>
        <form onSubmit={handleSubmit}>
          <input
            type="email"
            placeholder="Enter your email..."
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <button type="submit">Join the waitlist</button>
        </form>
        {error && <p className="error">{error}</p>}
        {message && <p className="message">{message}</p>}
      </div>
      <div className="hero-right">
        <img src={pen} alt="Condiment Pen" />
      </div>
    </div>
  );
};

export default Hero;
