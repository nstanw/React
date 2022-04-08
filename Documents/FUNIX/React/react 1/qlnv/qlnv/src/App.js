import "./App.css";
import NavComponent from "./component/NavComponent";
import React, { useState } from "react";
import { STAFFS } from "./shared/staff";
import StaffList from "./component/StaffListComponent";
import StaffInfor from "./component/StaffInforComponent";
function App() {
  //hoook
  const [staffs, setStaff] = useState(STAFFS);
  const listStaff = () => {};

  const clickInfo = () => {
    return console.log("AAAAAAAAAAAA");
  };
  return (
    <div className="container">
      <NavComponent />

      <StaffList staffs={staffs} onClick={clickInfo} />
    </div>
  );
}

export default App;
