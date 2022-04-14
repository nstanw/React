import { Card, CardTitle, CardText } from "reactstrap";

// tính lương nhân viên
const vnd = (salaryScale, overTime) => {
  let luong = salaryScale * 3000000 + overTime * (200000 / 8);
  return luong;
};

const SalaryScale = ({ staffs }) => {
  return (
    <div className="row">
      {staffs.map((staff) => (
        <div className="col-12 col-md-6 col-lg-4">
          <Card>
            <CardTitle>{staff.name}</CardTitle>
            <CardText>Mã nhân viên: {staff.id}</CardText>
            <CardText>Hệ số lương: {staff.salaryScale}</CardText>
            <CardText>Số giờ làm thêm: {staff.overTime}</CardText>
            <CardText>
              Lương: {vnd(staff.salaryScale, staff.overTime).toFixed(0)}
            </CardText>
          </Card>
        </div>
      ))}
    </div>
  );
};
export default SalaryScale;
