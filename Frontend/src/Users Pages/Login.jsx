import React from "react";
import { useState } from "react";
import Navigation_Bar from "../Components/Navigation_Bar";
import AnimatedPage from "../Animation";
import { Link } from "react-router-dom";
import "../CSS files/Login.css";


// Stores the user data
export default function Login() {
  const [email, setemail] = useState("");
  const [password, setpassword] = useState("");
  


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
              <form>
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
                <button type="submit" >
                  Login
                </button>
              </form>

              <p
                style={{
                  textAlign: "center",
                }}
              >
                New?
                <Link
                  style={{
                    textDecoration: "underline",
                    color: "rgba(89, 86, 233, 1)",
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
    </AnimatedPage>
  );
}
