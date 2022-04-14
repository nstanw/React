import { Card, CardTitle, CardText, CardImg } from "reactstrap";

const Department = ({ departments }) => {
  return (
    <div className="row department">
      {departments.map((department) => (
        <div className="col-12 col-md-6 col-lg-4">
          <Card>
            <CardImg src={department.image} />
            <CardTitle>{department.name}</CardTitle>
            <CardText>Số lượng nhân viên: {department.numberOfStaff}</CardText>
          </Card>
        </div>
      ))}
    </div>
  );
};
export default Department;
