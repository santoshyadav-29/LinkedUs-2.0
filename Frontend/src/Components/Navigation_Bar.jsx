import React from "react";
import { Link } from "react-router-dom";

export default function Navigation_Bar(props) {
  const style = {
    color: "black",
  };
  return (
    <div>
      <header>
        <div className="navbar">
          <div className="logo">
            <Link style={style} to="/">
              <h1>linkedUs</h1>
            </Link>
          </div>
          <div className="nav-links">
            <ul>
              <li>
                <Link to="/Login">{ props.name}</Link>{" "}
              </li>
              <li>
                <Link to="/Contact">Contact</Link>
              </li>
              <li>
                <Link to="/About">About Us</Link>{" "}
              </li>
            </ul>
            <svg
              width="42"
              height="35"
              viewBox="0 0 42 35"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M42 34.6023H21V28.8352H42V34.6023ZM42 20.1847H0V14.4176H42V20.1847ZM42 5.76705H0V0H42V5.76705Z"
                fill="#414141"
              />
            </svg>
          </div>
        </div>
      </header>
    </div>
  );
}
