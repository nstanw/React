import { CSSTransition } from "react-transition-group";
import React, { Component } from "react";

class Animation extends Component {
  render() {
    return (
      <CSSTransition className="page" timeout={3000} unmountOnExit>
      <h1>aaaaaaaaaaaaaaaaaa</h1>
      <h1>aaaaaaaaaaaaaaaaaa</h1>
      <h1>aaaaaaaaaaaaaaaaaa</h1>
      <h1>aaaaaaaaaaaaaaaaaa</h1>
      <h1>aaaaaaaaaaaaaaaaaa</h1>
      </CSSTransition>
    );
  }
}

export default Animation;
