import "./App.css";
import NavComponent from "./component/NavComponent";
import React, { useState } from "react";
import { STAFFS } from "./shared/staff";

function App() {
  //hoook
  const [staff, setStaff] = useState(STAFFS);
  const listStaff = () => {};
  return (
    <div className="container">
      <NavComponent />
      {/* <StaffList staff={listStaff} /> */}
    </div>
  );
}

export default App;
