import React, { Component } from "react";

const NavComponent = ({ onChangeCol }) => {
  return (
    <div className="row navi">
      <div className="col-3">
        <h5>STAFF MANAGER</h5>
      </div>
      <div className="col-9 row" id="menu">
        <div className="col-3">
          <a href="#">Nhân viên</a>
        </div>
        <div className="col-3">
          <a href="#">Phòng ban</a>
        </div>
        <div className="col-3">
          <a href="#">Bảng lương</a>
        </div>
        <div className="col-3" id="selec">
          <select id="colum" onChange={onChangeCol}>
            <option value="col-6">Mobile - 2 cột</option>
            <option value="col-3">Tablet - 4 cột</option>
            <option value="col-2" selected>
              PC - 6 cột
            </option>
          </select>
        </div>
      </div>
    </div>
  );
};

export default NavComponent;
