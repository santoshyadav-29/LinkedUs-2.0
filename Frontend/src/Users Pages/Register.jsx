import React from "react";
import "../CSS files/Register.css";
import Navigation_Bar from "../Components/Navigation_Bar";
import axios from "axios";
import Footer from "../Components/Footer";

export default function Register() {
  const [password, setPassword] = React.useState("");
  const [Roles, setRoles] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [name, setName] = React.useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    const data = {
      name: name,
      email: email,
      password: password,
      Roles: Roles,
    };
    axios
      .post("http://localhost:5000/api/user/register", data)
      .then((res) => {
        alert("User Registered");
      })
      .catch((err) => {
        alert("User Not Registered");
      });
  };

  return (
    <div>
      <div className="layout">
        <Navigation_Bar name="Login" />
        <div className="Register_page">
          <h1>Sign Up</h1>
          <form action="none">
            <input
              type="text"
              placeholder="Full Name"
              value={name}
              onChange={(e) => {
                setName(e.target.value);
              }}
            ></input>
            <input
              type="email"
              placeholder=" Email"
              value={email}
              onChange={(e) => {
                setEmail(e.target.value);
              }}
            ></input>
            <input
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => {
                setPassword(e.target.value);
              }}
            ></input>
            <input type="password" placeholder="Re-enter Password"></input>
            <input
              type="text"
              placeholder="Your Role"
              value={Roles}
              onChange={(e) => {
                setRoles(e.target.value);
              }}
            />
            <button style={{
              marginBottom: "20px",
            }} type="submit" onClick={handleSubmit}>
              Sign Up
            </button>
          </form>
        </div>
      </div>
      <Footer
        
      />
    </div>
  );
}
