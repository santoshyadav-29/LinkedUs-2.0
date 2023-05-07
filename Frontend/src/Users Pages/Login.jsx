import React from "react";
import { useState } from "react";
import Navigation_Bar from "../Components/Navigation_Bar";
import AnimatedPage from "../Animation";
import { Link, useNavigate } from "react-router-dom";
import "../CSS files/Login.css";
import axios from "axios";
import Footer from "../Components/Footer";

// Stores the user data
export default function Login() {
  const [email, setemail] = useState("");
  const [password, setpassword] = useState("");
  const navigate = useNavigate();

  // Handles the submit event
  const handleSumbit = (e) => {
    e.preventDefault();
    // Make a POST request to the server
    axios
      .post("http://localhost:5000/api/user/login", {
        email: email,
        password: password,

      })
      .then((res) => {
        // If the request is successful, store the token in the local storage
        localStorage.setItem("token", res.data.token);
        localStorage.setItem("user", JSON.stringify(res.data.user));
        localStorage.setItem("role", res.data.user.Roles);
        localStorage.setItem("id", res.data.user._id);
        localStorage.setItem("name", res.data.user.name);
        localStorage.setItem("email", res.data.user.email);

        // Redirect to the home page
        navigate("/HomePage");
      })
      .catch((err) => {
        // If the request is unsuccessful, show an error message
        alert("Invalid Credentials");
      });
  };

       





  return (
    <AnimatedPage>
      <div className="layout">
        <Navigation_Bar name="register" />
        <main>
          <div className="main-content">
            <div className="right-section">
              {/* random image from unsplash */}
              <img src="\Images\Scene - 1.png" alt="random" />
            </div>
            <div className="left-section">
              <h1>Sign In</h1>
              <form onSubmit={handleSumbit}>
                <input
                  type="email"
                  name="email"
                  id="email"
                  placeholder="Username"
                  value={email}
                  onChange={(e) => setemail(e.target.value)}
                />

                <input
                  type="password"
                  id="password"
                  name="password"
                  placeholder="Password"
                  value={password}
                  onChange={(e) => setpassword(e.target.value)}
                />

                <div className="forget-password">
                  <a href="/Forget">Forget Password</a>
                </div>
                <button type="submit">Login</button>
              </form>

              <p
                style={{
                  textAlign: "center",
                }}
              >
                New?  &nbsp;  
                <Link
                  style={{
                    textDecoration: "underline",
                   
                  }}
                  to="/Register"
                >
                  Sign Up
                </Link>
              </p>
            </div>
          </div>
        </main>
      </div>
      <Footer />
    </AnimatedPage>
  );
}
