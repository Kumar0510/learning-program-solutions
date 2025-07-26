import { Component } from "react";

export default class CounterApp extends Component {
  constructor() {
    super(); 
    this.state = {
      login: 0,
      exit: 0,
    };

    this.handleLogin = this.handleLogin.bind(this);
    this.handleExit = this.handleExit.bind(this);
  }

  handleLogin() {
    this.setState((prevState) => ({
      login: prevState.login + 1,
    }));
  }

  handleExit() {
    this.setState((prevState) => ({
      exit: prevState.exit + 1,
    }));
  }

  render() {
    return (
      <>
        <button onClick={this.handleLogin}>Login</button>
        {this.state.login} logging counter
        <br />
        <button onClick={this.handleExit}>Exit</button>
        {this.state.exit} exit counter
      </>
    );
  }
}
