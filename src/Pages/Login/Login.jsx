import React, { useState } from "react";
import "./Login.css";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const navigate = useNavigate();

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

    navigate("/about", { replace: true });
  };

  return (
    <div className="loginWrapper">
      <div className="formWrapper">
        <form onSubmit={handleSubmit}>
          <div className="inputWrapper">
            <label htmlFor="name">Name</label>
            <input
              type="text"
              id="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Enter your name"
            />
          </div>

          <div className="inputWrapper">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email"
            />
          </div>

          <button type="submit">Login</button>
        </form>
      </div>
    </div>
  );
};

export default Login;
