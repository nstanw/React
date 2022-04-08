import React from "react";

const StaffList = ({ staffs, onClick }) => {
  return (
    <div className="staff-list row">
      {staffs.map((staff) => (
        <>
          <div
            className="col-2"
            key={staff.id}
            onClick={() => onClick(staff.id)}
          >
            <img id="img-profile-tag" src={staff.image} alt={staff.name}></img>
            <h5>{staff.name}</h5>
          </div>
        </>
      ))}

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
