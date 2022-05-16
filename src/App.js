import "./App.css";
import Header from "./Components/Header";
import Footer from "./Components/Footer";
import Home from "./Components/Home";
import { BrowserRouter } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Header />
        <Home />
        <Footer/>
      </div>
    </BrowserRouter>
  );
}
export default App;
