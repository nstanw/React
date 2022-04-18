import {
  Card,
  CardTitle,
  CardText,
  Breadcrumb,
  BreadcrumbItem,
} from "reactstrap";
import { Link } from "react-router-dom";
// tính lương nhân viên
const vnd = (salaryScale, overTime) => {
  let luong = salaryScale * 3000000 + overTime * (200000 / 8);
  return luong;
};

const SalaryScale = ({ staffs, selectChage }) => {
  return (
    <div className="row salary">
      <div className="col-12">
        <Breadcrumb className="col-6">
          <BreadcrumbItem>
            <Link to={"/"}>Home</Link>
          </BreadcrumbItem>
          <BreadcrumbItem>
            <Link to={"/salaryscale"}>Salary</Link>
          </BreadcrumbItem>
        </Breadcrumb>

        <select onChange={selectChage} id="selectSalary">
          <option value="id">sắp xếp: mã nhân viên</option>
          <option value="id-down">Mã nhân viên cao đến thấp</option>
          <option value="">Lương từ cao đến thấp</option>
          <option value="">Lương từ thấp đến cao</option>
        </select>
      </div>
      {true &&
        staffs.map((staff) => (
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
