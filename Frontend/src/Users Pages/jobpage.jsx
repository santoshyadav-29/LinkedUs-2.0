import React from "react";
import Navigation_Bar from "../Components/Navigation_Bar";
import axios from "axios";
import { useEffect, useState } from "react";
import Jobs from "../Components/jobs";

export default function Jobpage() {
  const [data, setData] = useState([]);

  useEffect(() => {
    // Make a GET request to the server
    axios
      .get("http://localhost:5000/api/jobs")
      .then((response) => {
        // Set the data state to the response data
        setData(response.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <div>
      <Navigation_Bar />
      <h1 style={{ textAlign: "center" }}>Jobs</h1>
      <div
        style={{
          
          width: "50%",
          
        }}
      >
        {data.map((item) => (
          <Jobs
            key={item._id}
            title={item.title}
            salary={item.salary}
            description={item.description}
            date={item.date}
          />
        ))}
      </div>
    </div>
  );
}
