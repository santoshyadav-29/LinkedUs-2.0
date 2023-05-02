import React from "react";
import Navigation_Bar from "../Components/Navigation_Bar";

export default function ApplyJobs() {
  const style = {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    height: "80vh",
    width: "100%",
    backgroundColor: "#f5f5f5",
    color: "#000",
    fontSize: "2rem",
    fontWeight: "bold",
    textAlign: "center",
    margin: "1rem",
    borderRadius: "1rem",
    boxShadow: "0 0 10px rgba(0,0,0,0.5)",
  };
  return (
    <div className="layout">
      <div className="Apply-Jobs" style={style}>
        <h1 style={{ textAlign: "center" }}>Apply For Jobs</h1>
        <form>
          <input type="text" placeholder="Full Name"></input>
          <input type="text" placeholder="Experience"></input>
          <iSnput type="text" placeholder="Skills"></iSnput>
          <input type="text" placeholder="Education"></input>
          <input type="email" placeholder="Email"></input>
          <button type="submit">Submit</button>
        </form>
      </div>
    </div>
  );
}
