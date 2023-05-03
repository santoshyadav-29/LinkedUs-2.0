import React from "react";
import Applicants from "./Applicants";
import AdminNavbar from "../Components/AdminNavbar";
import axios from "axios";
import { useEffect, useState } from "react";

export default function JobApplication() {
  const [data, setData] = useState([]);

  useEffect(() => {
    // Make a GET request to the server
    axios
      .get("http://localhost:5000/api/applicants")
      .then((response) => {
        // Set the data state to the response data
        setData(response.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <div className="Container_jobapplied">
      <AdminNavbar />
      <div className="header"></div>
      <div className="mid">
        <div className="Title">Applicant Information</div>
        {data.map((item) => (
          <Applicants
            key={item._id}
            name={item.name}
            Experience={item.Experience}
            Skills={item.Skills}
            Education={item.Education}
            email={item.email}
          />
        ))}
      </div>
      <div className="footer"></div>
    </div>
  );
}
