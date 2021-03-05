import highchartsconfig from "./HighchartsConfig";
import React from "react";
import { Tile } from "../Shared/Tile";
import { AppContext } from "../App/AppProvider";
import ReactHighcharts from "react-highcharts";
import HighchartsTheme from "./HighchartsTheme";
import CharSelect from "./ChartSelect";
ReactHighcharts.Highcharts.setOptions(HighchartsTheme);

// eslint-disable-next-line import/no-anonymous-default-export
export default function () {
  return (
    <AppContext.Consumer>
      {({ historical, changeChartSelect }) => (
        <Tile>
          <CharSelect
            defaultValue={"months"}
            onChange={(e) => changeChartSelect(e.target.value)}
          >
            <option value="days">Days</option>
            <option value="weeks">Weeks</option>
            <option value="months">Months</option>
          </CharSelect>
          {historical ? (
            <ReactHighcharts config={highchartsconfig(historical)} />
          ) : (
            <div>Loading Data</div>
          )}
        </Tile>
      )}
    </AppContext.Consumer>
  );
}
