import React, { Component } from "react";

import LoginComponent from "../components/login/login.component";

class LoginContainer extends Component {
  static navigationOptions = { headerMode: "screen" };

  render() {
    return <LoginComponent />;
  }
}

export default LoginContainer;
