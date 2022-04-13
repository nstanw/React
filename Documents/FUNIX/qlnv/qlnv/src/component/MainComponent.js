import React, { useState } from "react";
import { STAFFS } from "../shared/staff";
import NavComponent from "./NavComponent";
import StaffInfor from "./StaffInforComponent";
import Footer from "./FooterComponent";
import StaffList from "./StaffListComponent";

function Main() {
  //hoook
  const [staffs, setStaff] = useState(STAFFS);
  const [infor, setInfor] = useState();
  const [showInfor, setShowInfor] = useState(false);
  const [col, setCol] = useState("");

  const clickInfo = (id) => {
    console.log(id);
    if (id != null) {
      const info = staffs.filter((staff) => staff.id === id);
      setInfor(info[0]);

      setShowInfor(true);
    } else {
      setShowInfor(false);
    }
  };

  const handleCol = () => {
    let colum = document.getElementById("colum").value;
    console.log(colum);
    setCol(colum);
  };
  return (
    <div className="container total">
      <NavComponent onChangeCol={handleCol} />
      {showInfor && <StaffInfor staff={infor} />}
      <StaffList staffs={staffs} onClick={clickInfo} col={col} />
      <Footer />
    </div>
  );
}

export default Main;
