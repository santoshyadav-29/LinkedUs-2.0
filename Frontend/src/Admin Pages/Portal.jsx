import React from "react";

export default function Portal() {
  const [secret, setSecret] = React.useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (secret === "1234") {
      window.location.href = "/JobPosting";
    }
  };

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
      <div className="Portal-Page" style={style}>
        <h1>Your Secret Code</h1>
        <form action="none">
          <input
            type="text"
            placeholder="Enter Your Secret Code"
            value={secret}
            onChange={(e) => setSecret(e.target.value)}
          />
          <button type="submit" onClick={handleSubmit}>
            Lets Go
          </button>
        </form>
      </div>
    </div>
  );
}
