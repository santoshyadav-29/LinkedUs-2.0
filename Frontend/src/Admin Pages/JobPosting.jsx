import React from "react";
import Navigation_Bar from "../Components/Navigation_Bar";
import "../CSS files/JobPosting.css";
import AdminNavbar from "../Components/AdminNavbar";

export default function JobPosting() {
  const [title, setTitle] = React.useState("");
  const [description, setDescription] = React.useState("");
  const [salary, setSalary] = React.useState("");
  const [date, setDate] = React.useState(
    new Date().toISOString().substr(0, 10)
  );

  return (
    <div>
      <AdminNavbar />
      <div
        className="Job-post"
        style={{
          paddingTop: "10%",
          height: "75vh",
        }}
      >
        <h1
          style={{
            textAlign: "center",
          }}
        >
          Post A Job
        </h1>
        <form action="none">
          <input
            type="text"
            placeholder="Enter Job Title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
          <input
            type="number"
            placeholder="Enter Job Salary"
            value={salary}
            onChange={(e) => setSalary(e.target.value)}
          />
          <input
            type="text"
            placeholder="Enter Job Description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            style={{
              height: "10rem",
            }}
          />
          <input
            type="date"
            placeholder="Enter Job Date"
            value={date}
            onChange={(e) => setDate(e.target.value)}
          />

          <button type="submit">Post</button>
        </form>
      </div>
    </div>
  );
}
