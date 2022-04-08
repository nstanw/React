import "./App.css";
import { STAFFS, ROLE, DEPARTMENTS } from "./shared/staff";
import { Component } from "react";
import NavComponent from "./component/NavComponent";
import StaffList from "./component/StaffListComponent";
import React from "react";

function App() {
  return (
    <div className="container">
      <NavComponent />
      {/* <StaffList /> */}
    </div>
  );
}

export default App;
