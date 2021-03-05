import highchartsconfig from "./HighchartsConfig";
import React from "react";
import { Tile } from "../Shared/Tile";
import { AppContext } from "../App/AppProvider";
import ReactHighcharts from "react-highcharts";

// eslint-disable-next-line import/no-anonymous-default-export
export default function () {
  return (
    <AppContext.Consumer>
      {() => (
        <Tile>
          <ReactHighcharts config={highchartsconfig()} />
        </Tile>
      )}
    </AppContext.Consumer>
  );
}
