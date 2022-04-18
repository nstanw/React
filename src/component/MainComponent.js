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

  const searchName = () =>{
    
    const inputName = document.getElementById('search-name').value;
    setStaff(staffs.filter(staff => staff.name.includes(inputName)));
  
  }

  return (
    <div className="container ">
      <NavComponent onChangeCol={handleCol} />
      {/* {showInfor && <StaffInfor staff={infor} />} */}
      <Routes>
        <Route
          path="/"
          element={<StaffList staffs={staffs} onClick={clickInfo} col={col} searchName={searchName} />}
        />
        <Route
          path="/staffs"
          element={<StaffList staffs={staffs} onClick={clickInfo} col={col} searchName={searchName} />}
        />
        <Route exact path="/staffs/:staffId" element={<StaffWithId />} />
        <Route
          path="/departments"
          element={<Department departments={departments} />}
        />
        <Route
          path="/salaryscale"
          element={<SalaryScale/>}
        />
       
      </Routes>

      <Footer />
    </div>
  );
}

export default Main;
