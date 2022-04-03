import logo from "./logo.svg";
import { Narbar, NavbarBrand } from "reactstrap";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Narbar dark color="primary">
        <div className="container">
          <NavbarBrand href="/">Ristorante con Fusion</NavbarBrand>
        </div>
      </Narbar>
    </div>
  );
}

export default App;
