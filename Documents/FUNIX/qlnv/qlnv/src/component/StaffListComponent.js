import React from "react";

const StaffList = ({ staffs, onClick, col }) => {
  return (
    <div className="staff-list row">
      {staffs.map((staff) => (
        <>
          <div
            className={col !== "" ? col : `col-6 col-md-4 col-lg-2`}
            key={staff.id}
            onClick={() => onClick(staff.id)}
          >
            <img id="img-profile-tag" src={staff.image} alt={staff.name}></img>
            <h5 id="name-staff">{staff.name}</h5>
          </div>
        </>
      ))}
    </div>
  );
};
export default StaffList;
