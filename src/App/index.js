import React, { Component } from "react";

import AppLayout from "./AppLayout";
import AppBar from "./AppBar";
import Settings from "../Settings";
import Content from "../Shared/Content";
import { AppProvider } from "./AppProvider";
import "./App.css";
import Dashboard from "../Dashboard";

class App extends Component {
  render() {
    return (
      <AppLayout>
        <AppProvider>
          <AppBar />
          <Content>
            <Settings />
            <Dashboard />
          </Content>
        </AppProvider>
      </AppLayout>
    );
  }
}

export default App;
