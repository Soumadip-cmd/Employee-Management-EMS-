import React, { useState, useEffect } from "react";
import Card from "./Card";
import './Dashboard.css'


const Dashboard = () => {
  

  return (
    <div className=" special mt-5 ms-2">
      <div className="container p-3 ">
        <span style={{ fontSize: "2em", fontWeight: "600" }}>Dashboard </span>
        <span style={{ fontSize: "1em" }}>Control panel</span>
      </div>
      <hr
        style={{
          position: "relative",
          bottom: "29px",
        }}
      />
      <div className="container my-2">
        <div className="row" style={{ transform: "translateY(-19px)" }}>
          <div className="col-sm-6 col-md-6 col-lg-3">
            <Card
              number="18"
              category="Department"
              cardbgcolor="blue"
              pageLink="/"
            />
          </div>
          <div className="col-sm-12 col-md-6 col-lg-3">
            <Card
              number="18"
              category="Staff"
              cardbgcolor="rgb(88 13 51)"
              pageLink="/"
            />
          </div>
          <div className="col-sm-12 col-md-6 col-lg-3">
            <Card
              number="18"
              category="Leave Requests"
              cardbgcolor="#c70d0d"
              pageLink="/"
            />
          </div>
          <div className="col-sm-12 col-md-6 col-lg-3">
            <Card
              number="$39640" 
              category="Salary Paid"
              cardbgcolor="green"
              pageLink="/"
            />
          </div>
        </div>
      </div>
      
    </div>
  );
};

export default Dashboard;