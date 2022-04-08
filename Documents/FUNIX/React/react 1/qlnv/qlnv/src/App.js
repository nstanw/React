import "./App.css";
import NavComponent from "./component/NavComponent";
import React, { useState } from "react";
import { STAFFS } from "./shared/staff";
import StaffList from "./component/StaffListComponent";
import StaffInfor from "./component/StaffInforComponent";
function App() {
  //hoook
  const [staffs, setStaff] = useState(STAFFS);
  const [infor, setInfor] = useState();
  const [showInfor, setShowInfor] = useState(false);

  const clickInfo = (id) => {
    console.log(id);
    if (id != null) {
      const info = staffs.filter((staff) => staff.id === id);
      setInfor(info[0]);
      console.log(info);
      setShowInfor(true);
    } else {
      setShowInfor(false);
    }
  };
  console.log(infor);
  return (
    <div className="container">
      {showInfor && <StaffInfor staff={infor} />}
      <NavComponent />
      <StaffList staffs={staffs} onClick={clickInfo} />
    </div>
  );
}

export default App;
