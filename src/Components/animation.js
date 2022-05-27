import { CSSTransition } from "react-transition-group";

import React from "react";
import { Route, Routes, Navigate, useLocation } from "react-router-dom";
import Home from "./Home";
import About from "./About";
import DishDetail from "./DishDetail";
import Menu from "./Menu";
import Contact from "./Contact";
import { TransitionGroup } from "react-transition-group";

const Animation = () => {
  const location = useLocation();
  console.log(location);
  return (
    <TransitionGroup>
      <CSSTransition key={location.key} classNames="page" timeout={300}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/aboutus" element={<About />} />
          <Route path="/menu" element={<Menu />} />
          <Route path="/menu/:dishId" element={<DishDetail />} />
          <Route path="/contactus" element={<Contact />} />
          {/* 404 */}
          <Route path="*" element={<Navigate replace to="/Home" />} />
        </Routes>
      </CSSTransition>
    </TransitionGroup>
  );
};

export default Animation;
