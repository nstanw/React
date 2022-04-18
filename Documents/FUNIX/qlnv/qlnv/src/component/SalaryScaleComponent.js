import {
  Card,
  CardTitle,
  CardText,
  Breadcrumb,
  BreadcrumbItem,
} from "reactstrap";
import { Link } from "react-router-dom";
import { STAFFS } from "../shared/staff";
import { useState } from "react";

// tính lương nhân viên
const vnd = (salaryScale, overTime) => {
  let luong = salaryScale * 3000000 + overTime * (200000 / 8);
  return luong;
};

const SalaryScale = () => {
  //hook
  const [salarys , setSalary] = useState(STAFFS)
 //onchange
 const handleChage = () => {
    let selectValue = document.getElementById('selectSalary').value;
    console.log(selectValue)
    if( selectValue === 'id-down'){
      console.log('enter id-down')
      const arr = salarys.sort((a,b) => (b.id -a.id))
      setSalary(arr);
      console.log('state sau khi change select',salarys)
    }
    if( selectValue === 'id'){
      console.log('enter id')
      setSalary(salarys.sort((a,b) => (a.id -b.id)));
      console.log('state:',salarys)
    }


 }
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

        <select onChange={handleChage} id="selectSalary">
          <option value="id">sắp xếp: mã nhân viên</option>
          <option value="id-down">Mã nhân viên cao đến thấp</option>

          <option value="">Lương từ cao đến thấp</option>
          <option value="">Lương từ thấp đến cao</option>
        </select>
      </div>
      {console.log('salary khi render:',salarys)}
      {true && 
        salarys.map((staff) => (
          <div className="col-12 col-md-6 col-lg-4" key={staff.id}>
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
