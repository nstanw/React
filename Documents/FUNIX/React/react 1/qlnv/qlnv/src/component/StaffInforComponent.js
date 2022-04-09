import dateFormat from "dateformat";
const StaffInfor = ({ staff }) => {
  console.log("day la staff: ", staff);
  return (
    <div className="row" id="div-infor">
      <div className="col-sm-12 col-12" id="name-info">
        <h3 id="title-staff">{staff.name}</h3>
      </div>
      <div className="col-sm-12 col-md-6 col-12">
        <img id="img-profile-tag" src={staff.image} alt={staff.name}></img>
      </div>
      <div className="col-sm-12 col-md-6 col-12 infor">
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
    </div>
  );
};
export default StaffInfor;
