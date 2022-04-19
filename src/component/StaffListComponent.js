import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Breadcrumb, BreadcrumbItem } from "reactstrap";

const StaffList = ({ staffs, onClick, col }) => {
  const [staffSearch, setSearch] = useState(staffs);
  const handleSearchName = (searchText) =>
    setSearch(
      staffs.filter((staff) => staff.name.toLowerCase().includes(searchText))
    );
  return (
    <>
      <div className="staff-list row">
        <Breadcrumb className="col-12">
          <BreadcrumbItem>
            <Link to={"/"}>Home</Link>
          </BreadcrumbItem>
          <BreadcrumbItem>
            <Link to={"/staffs"}>Staffs</Link>
          </BreadcrumbItem>
        </Breadcrumb>
        <div className="col-12 row">
          <div className="col-6 col-xs-12" id="button-sort">
            <label className="col- col-xs-12">Sắp xếp theo:</label>
            <Link to="/SortDepartment">
              <button className="col- col-xs-12">Phòng ban</button>
            </Link>
            <Link to="/SortOverTime">
              <button className="col- col-xs-12">OverTime</button>
            </Link>
          </div>
          <input
            className="col-6"
            onChange={(e) => handleSearchName(e.target.value).toLowerCase()}
            id="search-name"
            
            placeholder="enter name...."
          ></input>
        </div>
        {staffSearch.map((staff) => (
          <>
            <div
              className={col !== "" ? col : `col-6 col-md-4 col-lg-2`}
              key={staff.id}
              onClick={() => onClick(staff.id)}
            >
              <Link to={`/staffs/${staff.id}`}>
                <img
                  id="img-profile-tag"
                  src={staff.image}
                  alt={staff.name}
                ></img>
                <h5 id="name-staff">{staff.name}</h5>
              </Link>
            </div>
          </>
        ))}
      </div>
    </>
  );
};
export default StaffList;
