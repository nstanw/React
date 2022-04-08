import "./App.css";
import NavComponent from "./component/NavComponent";
import React, { useState } from "react";
import { STAFFS } from "./shared/staff";
import StaffList from "./component/StaffListComponent";

function App() {
  //hoook
  const [staffs, setStaff] = useState(STAFFS);
  const listStaff = () => {};
  return (
    <div className="container">
      <NavComponent />
      <StaffList staffs={staffs} />
    </div>
  );
}

export default App;
