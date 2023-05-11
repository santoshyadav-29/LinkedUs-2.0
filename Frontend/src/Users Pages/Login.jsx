import React from "react";
import { useState } from "react";
import Navigation_Bar from "../Components/Navigation_Bar";
import AnimatedPage from "../Animation";
import { Link, useNavigate } from "react-router-dom";
import "../CSS files/Login.css";
import axios from "axios";


// Stores the user data
var User = {
  email: "",
  password: "",
};

// Function to submit the form
const submit = (e) => {
  e.preventDefault();
  User.email = e.target.email.value;
  User.password = e.target.password.value;
  console.log(User);
};

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  //  Redirects to the homepage if the user is admin
  const LoginUser = async (e) => {
    e.preventDefault();

    try {
      //axios-makes the http requests on the localhost
      const response = await axios.post("http://localhost:3000/Login", {
        email,
        password,
      });
      console.log("login");
      // localStorage.setItem("userkey", response.data.token);
      localStorage.setItem("token", response.data.token);
      localStorage.setItem("user", JSON.stringify(response.data.user));
      localStorage.setItem("roles", response.data.roles);
      localStorage.setItem("id", response.data._id);
      localStorage.setItem("name", response.data.name);
      localStorage.setItem("email", response.data.email);
      navigate("/Homepage");
    } catch (e) {
      alert("failed" + e);
    }
  };
  return (
    <AnimatedPage>
      <div className="layout">
        <Navigation_Bar />
        <main>
          <div className="main-content">
            <div className="right-section">
              {/* random image from unsplash */}
              <img src="public\Images\Scene - 1.png" alt="random" />
            </div>
            <div className="left-section">
              <h1>Sign In</h1>
              <form method="POST" action="/login" onSubmit={submit}>
                <input type="text"
                 
                  name="email"
                  placeholder="Email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)} />
                
                
               

                <input
                  type="password"
                  id="pass"
                  name="password"
                  minLength="8"
                  placeholder="Password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
                {/* <div className="forget-password">
                  <a href="/Forget">Forget Password</a>{" "}
                </div> */}
                <button type="submit" onClick={LoginUser}>
                  Login
                </button>
              </form>

              <p
                style={{
                  textAlign: "center",
                }}
              >
                New?{" "}
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
