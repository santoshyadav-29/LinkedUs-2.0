import Navigation_Bar from "../Components/Navigation_Bar";
import React from "react";
import "../CSS files/HomePage.css";
import AnimatedPage from "../Animation";

export default function HomePage() {
  return (
    <AnimatedPage>
      <div>
        <Navigation_Bar name="Dashboard" />
        <div className="grid-container">
          <div className="grid-left">
            <p>
              Find A <b>Job</b> That <b>Matches</b> Your Passion
            </p>
            <form action="none">
              <input type="text" placeholder="Search for a job" />
              <button type="submit">Search</button>
            </form>
          </div>
          <div className="grid-right">
            <img
              src="public\Images\Man working with laptop and sitting in chair.png"
              alt=""
            />
          </div>
        </div>
      </div>
    </AnimatedPage>
  );
}
