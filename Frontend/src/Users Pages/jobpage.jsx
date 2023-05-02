import React from "react";
import RadioButtons from "./radioButtons";
import Jobs from "./jobs";

export default function Jobpage() {
  return (
    <div className="contain">
      <div class="left">
        <h1>Filter</h1>
        <RadioButtons
          title="Location"
          value1="Butwal"
          value2="Kathmandu"
          value3="Dhulikhel"
        />
        <RadioButtons
          title="Salary"
          value1="Rs:x"
          value2="Rs:x"
          value3="Rs:x"
        />
      </div>
      <div className="right">
        <form className="SearchTab">
          <input className="Jobname" type="text" />
          <input className="locn" type="text" />
        </form>
        <Jobs
          organization="Organization Name"
          job_Title="Job Name"
          Address="Address"
          Salary="Salary"
          Time="Time"
          Description="Description Here"
        />
        <Jobs
          organization="Organization Name"
          job_Title="Job Name"
          Address="Address"
          Salary="Salary"
          Time="Time"
          Description="Description Here"
        />
        <Jobs
          organization="Organization Name"
          job_Title="Job Name"
          Address="Address"
          Salary="Salary"
          Time="Time"
          Description="Description Here"
        />
      </div>
    </div>
  );
}
