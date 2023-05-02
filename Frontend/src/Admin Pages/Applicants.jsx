import React from "react";

export default function Applicants(props) {
  return (
    <div className="Info_block">
      <div className="Applicant_Name">{props.name}</div>
      <div className="Applicant_Experience">{props.Experience}</div>
      <div className="Applicant_Skills">{props.Skills}</div>
      <div className="Applicant_Education">{props.Education}</div>
      <div className="Applicant_Email">{props.email}</div>

      
    </div>
  );
}
