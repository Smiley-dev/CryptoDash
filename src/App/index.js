import React, { Component } from "react";
import styled, { css } from "styled-components";
import AppLayout from "./AppLayout";
import "./App.css";
import WelcomeMessage from "./WelcomeMessage";

class App extends Component {
  render() {
    return (
      <AppLayout>
        <WelcomeMessage />
      </AppLayout>
    );
  }
}

export default App;
