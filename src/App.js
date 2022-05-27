import "./App.css";
import Header from "./Components/Header";
import Footer from "./Components/Footer";
import Home from "./Components/Home";
import Menu from "./Components/Menu";
import Contact from "./Components/Contact";
import About from "./Components/About";
import DishDetail from "./Components/DishDetail";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { getDishesThunk } from "./features/mainSlice";
import { TransitionGroup } from "react-transition-group";
import { CSSTransition } from "react-transition-group";
import animation from "./Components/animation";
import Animation from "./Components/animation";

function App() {
  return (
    <TransitionGroup>
      <CSSTransition in={true} timeout={300} classNames="page">
        <BrowserRouter>
          <div className="App">
            <Header />
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
            <Footer />
          </div>
        </BrowserRouter>
      </CSSTransition>
    </TransitionGroup>
  );
}
export default App;
