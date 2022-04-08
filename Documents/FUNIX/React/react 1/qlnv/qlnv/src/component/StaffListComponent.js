import React from "react";
import dateFormat from "dateformat";

const StaffList = ({ staffs }) => {
  return (
    <div>
      <div className="staff-list">
        {staffs.map((staff) => (
          <h3 key={staff.id}>{staff.name}</h3>
        ))}
      </div>
      {/* <div>
      <div className="row">
        <div className="col-3">
          <li>
            <h3>
              <li>{listStaff.name}</li>
            </h3>
            <img
              id="img-profile-tag"
              src={listStaff.image}
              alt={listStaff.name}
              ></img>
          </li>
        </div>
        <div className="col-6 infor">
          <li>Họ và tên: {listStaff.name}</li>
          <li>Ngày sinh: {dateFormat(listStaff.doB, "dd/mm/yyyy")}</li>
          <li>
            Ngày vào công ty: {dateFormat(listStaff.startDate, "dd/mm/yyyy")}
          </li>
          <li>
            Chức vụ:
            {parseFloat(listStaff.salaryScale) > 1 ? "Quản lý" : "Nhân viên"}
          </li>
          <li>Phòng ban: {listStaff.department.name}</li>
          <li>Ngày nghỉ còn lại: {listStaff.annualLeave}</li>
          <li>Ngày đi làm thêm: {listStaff.overTime}</li>
        </div>
      </div>
    </div> */}
    </div>
  );
};
export default StaffList;
