import React, { useState } from "react";
import { STAFFS } from "../shared/staff";
import NavComponent from "./NavComponent";
import StaffInfor from "./StaffInforComponent";
import Footer from "./FooterComponent";
import StaffList from "./StaffListComponent";
import { Routes, Switch, Route, Redirect, useParams } from "react-router-dom";

function Main() {
  //hoook
  const [staffs, setStaff] = useState(STAFFS);
  const [infor, setInfor] = useState();
  const [showInfor, setShowInfor] = useState(false);
  const [col, setCol] = useState("");

  const clickInfo = (id) => {
    // console.log(id);
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

  const StaffWithId = () => {
    let params = useParams();
    return (
      <StaffInfor
        staff={
          staffs.filter((staff) => staff.id === parseInt(params.staffId, 10))[0]
        }
      />
    );
  };

  return (
    <div className="container total">
      <NavComponent onChangeCol={handleCol} />
      {/* {showInfor && <StaffInfor staff={infor} />} */}
      <Routes>
        <Route
          path="/"
          element={<StaffList staffs={staffs} onClick={clickInfo} col={col} />}
        />
        <Route
          path="/staffs"
          element={<StaffList staffs={staffs} onClick={clickInfo} col={col} />}
        />
        <Route exact path="/staffs/:staffId" element={<StaffWithId />} />
      </Routes>
      {/* <StaffList staffs={staffs} onClick={clickInfo} col={col} /> */}
      <Footer />
    </div>
  );
}

export default Main;
