import React from "react";
import Applicants from "./Applicants";
import AdminNavbar from "../Components/AdminNavbar";


export default function()
{
    return(
        <div className="Container_jobapplied">
            <AdminNavbar/>
            <div className="header">
            </div>
            <div className="mid">
                <div className="Title">Applicant Information</div>
                <Applicants name="Muhammad Ali" Experience="2 Years" Skills="React, Node, Express" Education="BE" email="naturedgrp@gmail.com"/>
                <Applicants name="Muhammad Ali" Experience="2 Years" Skills="React, Node, Express" Education="BE" email="naturedgrp@gmail.com"/>
                <Applicants name="Muhammad Ali" Experience="2 Years" Skills="React, Node, Express" Education="BE" email="naturedgrp@gmail.com"/>
                <Applicants name="Muhammad Ali" Experience="2 Years" Skills="React, Node, Express" Education="BE" email="naturedgrp@gmail.com"/>
                <Applicants name="Muhammad Ali" Experience="2 Years" Skills="React, Node, Express" Education="BE" email="naturedgrp@gmail.com"/>

                
            </div>
            <div className="footer"></div>
            
        </div>
    );
}