import React, { useState } from "react";
import "./Login.css";
import { useNavigate, useLocation } from "react-router-dom";

const Login = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const navigate = useNavigate();
  const location = useLocation();

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!name || !email) {
      alert("Please fill all fields");
      return;
    }

    const userData = {
      name,
      email,
    };

    localStorage.setItem("user", JSON.stringify(userData));

    setName("");
    setEmail("");

    const from = location.state?.from?.pathname || "/about";
    navigate(from, { state: location.state?.state, replace: true });
  };

  return (
    <main className="loginWrapper">
      <div className="formWrapper">
        <p className="sectionLabel">Welcome back</p>
        <h1>Let’s start cooking.</h1>
        <p className="loginIntro">Sign in to explore recipes and unlock the full experience.</p>
        <form onSubmit={handleSubmit}>
          <div className="inputWrapper">
            <label htmlFor="name">Name</label>
            <input
              type="text"
              id="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Your name"
              autoComplete="name"
              required
            />
          </div>

          <div className="inputWrapper">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="you@example.com"
              autoComplete="email"
              required
            />
          </div>

          <button type="submit">Continue</button>
        </form>
      </div>
    </main>
  );
};

export default Login;
