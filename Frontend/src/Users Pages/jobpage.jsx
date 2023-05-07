import React from "react";
import Navigation_Bar from "../Components/Navigation_Bar";
import axios from "axios";
import { useEffect, useState } from "react";
import Jobs from "../Components/jobs";

export default function Jobpage() {
  const [data, setData] = useState([]);
  const [search, setSearch] = useState("");

  useEffect(() => {
    // Make a GET request to the server
    axios
      .get("http://localhost:5000/api/jobs")
      .then((res) => {
        console.log(res.data);
        setData(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  // const jobList = data;

  // const handleSubmit = (e) => {
  //   // filter the data
  //   e.preventDefault();
  //   const filteredData = jobList.filter((item) => {
  //     return item.title.toLowerCase().includes(search.toLowerCase());
  //   });

  //   // set the data
  //   setData(filteredData);

  //   // reset the search
  //   setSearch("");
  //   setTimeout(() => {
  //     setData(jobList);
  //   }, 5000);
  // };

  return (
    <div>
      <Navigation_Bar />
      <hr />
      <div className="Search-section">
        <form
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            gap: "1rem",
            flexDirection: "row",
            margin: "1rem",
          }}
        >
          <input
            type="text"
            placeholder="Search for a job"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
          <button type="submit">Search</button>
        </form>
      </div>

      <h1 style={{ textAlign: "center" }}>Jobs</h1>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          flexDirection: "column-reverse",
        }}
      >
        {
          // fileter the data
          data
            .filter((item) => {
              return search.toLowerCase() === ""
                ? item
                : item.title.toLowerCase().includes(search);
            })

            .map((item) => (
              <Jobs
                key={item._id}
                title={item.title}
                salary={item.salary}
                description={item.description}
                date={item.date}
              />
            ))
        }
      </div>
    </div>
  );
}
