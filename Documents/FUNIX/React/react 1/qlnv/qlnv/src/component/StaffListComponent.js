import React, { Component } from "react";
import { STAFFS } from "../shared/staff";
import dateFormat from "dateformat";
import $ from "jquery";
import Navi from "./NavComponent";

class StaffList extends Component {
  renderStaff(staff) {
    if (staff != null) {
      return (
        <div className="row">
          <div className="col-3">
            <li>
              <h3>
                <li>{staff.name}</li>
              </h3>
              <img
                id="img-profile-tag"
                src={staff.image}
                alt={staff.name}
              ></img>
            </li>
          </div>
          <div className="col-6 infor">
            <li>Họ và tên: {staff.name}</li>
            <li>Ngày sinh: {dateFormat(staff.doB, "dd/mm/yyyy")}</li>
            <li>
              Ngày vào công ty: {dateFormat(staff.startDate, "dd/mm/yyyy")}
            </li>
            <li>
              Chức vụ:
              {parseFloat(staff.salaryScale) > 1 ? "Quản lý" : "Nhân viên"}
            </li>
            <li>Phòng ban: {staff.department.name}</li>
            <li>Ngày nghỉ còn lại: {staff.annualLeave}</li>
            <li>Ngày đi làm thêm: {staff.overTime}</li>
          </div>
        </div>
      );
    } else {
      return <div></div>;
    }
  }

  col() {
    let nurclass = document.getElementById("ip-col").value;
    return "col-" + nurclass;
  }

  render() {
    const list = this.props.staff.map((staff) => {
      return (
        <div
          key={staff.id}
          onClick={() => this.onSelectStaff(staff)}
          className={Navi.prototype.handleCol()}
        >
          <tbody>
            <tr>
              <td>
                <img src={staff.image} alt={staff.name}></img>
              </td>
              <td>{staff.name}</td>
            </tr>
          </tbody>
        </div>
      );
    });
    return (
      <div>
        <h1>{/* <NumCol></NumCol> */}</h1>
        {this.renderStaff(this.state.selectStaff)}
        <hr />
        <div className="row">{list}</div>
      </div>
    );
  }
}
export default StaffList;
