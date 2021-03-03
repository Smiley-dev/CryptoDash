import React, { Component } from "react";

import AppLayout from "./AppLayout";
import AppBar from "./AppBar";
import Settings from "../Settings";
import { AppProvider } from "./AppProvider";
import "./App.css";

class App extends Component {
  render() {
    return (
      <AppLayout>
        <AppProvider>
          <AppBar />
          <Settings />
        </AppProvider>
      </AppLayout>
    );
  }
}

export default App;
