import "./App.css";
import React from "react";
import Main from "./component/MainComponent";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import { ConfigureStore } from "./redux/configureStore";
const store = ConfigureStore();
function App() {
  //hoook
  return (
    <Provider store={store}>
      <BrowserRouter>
        <div className="container total">
          <Main />
        </div>
      </BrowserRouter>
    </Provider>
  );
}

export default App;
