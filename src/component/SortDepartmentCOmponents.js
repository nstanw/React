import { Link } from "react-router-dom";
const SortDepartment = ({ staffs }) => {
  return (
    <Link to="/SortDepartment" >
      {staffs.map((staff) => (
          <div key={staff.id} >
            <img id="img-profile-tag" src={staff.image} alt={staff.name}></img>
            <h5 id="name-staff">{staff.name}</h5>
          </div>
    
      ))}
    </Link>
  );
};
export default SortDepartment;
