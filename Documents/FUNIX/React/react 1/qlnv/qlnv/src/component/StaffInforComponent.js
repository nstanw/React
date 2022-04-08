import dateFormat from "dateformat";
const StaffInfor = (staff) => {
  return (
    <div className="col-6 infor">
      <li>Họ và tên: {staff.name}</li>
      <li>Ngày sinh: {dateFormat(staff.doB, "dd/mm/yyyy")}</li>
      <li>Ngày vào công ty: {dateFormat(staff.startDate, "dd/mm/yyyy")}</li>
      <li>
        Chức vụ:
        {parseFloat(staff.salaryScale) > 1 ? "Quản lý" : "Nhân viên"}
      </li>
      <li>Phòng ban: {staff.department.name}</li>
      <li>Ngày nghỉ còn lại: {staff.annualLeave}</li>
      <li>Ngày đi làm thêm: {staff.overTime}</li>
    </div>
  );
};
export default StaffInfor;
