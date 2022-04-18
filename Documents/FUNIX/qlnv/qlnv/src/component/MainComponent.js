import React, { useState } from "react";
import { STAFFS } from "../shared/staff";
import NavComponent from "./NavComponent";
import StaffInfor from "./StaffInforComponent";
import Footer from "./FooterComponent";
import StaffList from "./StaffListComponent";
import { Routes, Route, useParams } from "react-router-dom";
import { DEPARTMENTS } from "../shared/staff";
import Department from "./Department";
import SalaryScale from "./SalaryScaleComponent";

function Main() {
  //hoook
  const [staffs, setStaff] = useState(STAFFS);
  const [infor, setInfor] = useState();
  const [showInfor, setShowInfor] = useState(false);
  const [col, setCol] = useState("");
  const [departments, setDepartment] = useState(DEPARTMENTS);

  const clickInfo = (id) => {
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
  // salary sort
  const selectChage = () => {
    let inputValue = document.getElementById("selectSalary").value;
    console.log(inputValue);
    if (inputValue === "id-down") {
      const arrSort = staffs.sort((a, b) => b.id - a.id);
      console.log(arrSort);
      setStaff(arrSort);
      console.log("staff:", staffs);
    }
    if (inputValue === "id") {
      const arrSort = staffs.sort((a, b) => a.id - b.id);
      console.log(arrSort);
      setStaff(arrSort);
      console.log("staff id:", staffs);
    }
  };

  return (
    <div className="container ">
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
        <Route
          path="/departments"
          element={<Department departments={departments} />}
        />
        <Route
          path="/salaryscale"
          element={<SalaryScale staffs={staffs} selectChage={selectChage} />}
        />
        {/* <Route  path="/salaryscale" element={< />}> */}
      </Routes>

      <Footer />
    </div>
  );
}

export default Main;
