import React, { Component } from "react";

const NavComponent = () => {
  return (
    <div className="">
      <h1>STAFF MANAGER</h1>
      <div className="row">
        <div className="dropdown">
          <button
            className="btn btn-secondary dropdown-toggle"
            type="button"
            id="dropdownMenuButton"
            data-toggle="dropdown"
            aria-haspopup="true"
            aria-expanded="false"
          >
            Dropdown button
          </button>
          <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
            <a className="dropdown-item" href="#">
              Action
            </a>
            <a className="dropdown-item" href="#">
              Another action
            </a>
            <a className="dropdown-item" href="#">
              Something else here
            </a>
          </div>
        </div>
        <div>
          <span>Reset</span>
        </div>
        <div>
          <input id="ip-col"></input>
          <button id="btn-go">Go</button>
        </div>
        <div>
          <label htmlFor="search">Search:</label>
          <input id="search"></input>
        </div>
      </div>
    </div>
  );
};

export default NavComponent;
