import dateFormat from "dateformat";
const StaffInfor = ({ staff }) => {
  console.log("day la staff: ", staff);
  return (
    <div className="row">
      <div className="col-12" id="name-info">
        <h3>{staff.name}</h3>
      </div>
      <div className="col-6">
        <img id="img-profile-tag" src={staff.image} alt={staff.name}></img>
      </div>
      <div className="col-6 infor">
        <li>Họ và tên: {staff.name}</li>
        <li>Ngày sinh: {dateFormat(staff.doB, "dd/mm/yyyy")}</li>
        <li>Ngày vào công ty: {dateFormat(staff.startDate, "dd/mm/yyyy")}</li>
        <li>
          Chức vụ:
          {parseFloat(staff.salaryScale) > 1 ? "Quản lý" : "Nhân viên"}
        </li>
        {/* <li>Phòng ban: {staff.department.name}</li> */}
        <li>Ngày nghỉ còn lại: {staff.annualLeave}</li>
        <li>Ngày đi làm thêm: {staff.overTime}</li>
      </div>
    </div>
  );
};
export default StaffInfor;
