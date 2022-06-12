import "./App.css";
import Header from "./Components/Header";
import Footer from "./Components/Footer";
import { BrowserRouter } from "react-router-dom";
import { TransitionGroup } from "react-transition-group";
import { CSSTransition } from "react-transition-group";

import Animation from "./Components/animation";

function App() {
  return (
    <TransitionGroup>
      <CSSTransition timeout={300} classNames="page">
        <BrowserRouter>
          <div className="App">
            <Header />
            <Animation />
            <Footer />
          </div>
        </BrowserRouter>
      </CSSTransition>
    </TransitionGroup>
  );
}
export default App;
