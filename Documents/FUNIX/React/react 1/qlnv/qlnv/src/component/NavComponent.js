import React, { Component } from "react";

const NavComponent = () => {
  return (
    <div className="row">
      <div className="col-4">
        <h1>STAFF MANAGER</h1>
      </div>
      <div className="col-8">
        <div>
          <select id="col">
            <option value="2">Mobile - 2 cột</option>
            <option value="4">Tablet - 4 cột</option>
            <option value="6" selected>
              PC - 6 cột
            </option>
          </select>
        </div>
        <div>
          <input id="input-col"></input>
          <button id="btn-go">Sort</button>
        </div>
      </div>
    </div>
  );
};

export default NavComponent;
