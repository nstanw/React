import "./App.css";
import Header from "./Components/Header";
import Footer from "./Components/Footer";
import Home from "./Components/Home";
import Menu from "./Components/Menu";
import Contact from "./Components/Contact";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Header />
        <Routes>
        <Route path='/' element={ <Home /> } />
        <Route path='/home' element={ <Home /> } />
        <Route path='/menu' element={ <Menu /> } />
        {/* <Route path='/menu/:dishId' element={ <DishDetail /> } /> */}
        <Route path='/contactus' element={ <Contact /> } />
      
        </Routes>
        <Footer/>
      </div>
    </BrowserRouter>
  );
}
export default App;
