import React from "react";
import { AppContext } from "../App/AppProvider";
import { SelectableTile, DeletableTile, DisabledTile } from "../Shared/Tile";
import CoinHeaderGrid from "./CoinHeaderGrid";
import CoinImage from "../Shared/CoinImage";

// eslint-disable-next-line import/no-anonymous-default-export
export default function ({ coinKey, topSection }) {
  return (
    <AppContext.Consumer>
      {({ coinList }) => {
        let coin = coinList[coinKey];

        let TileClass = SelectableTile;
        if (topSection) {
          TileClass = DeletableTile;
        }
        return (
          <TileClass>
            <CoinHeaderGrid
              topSection={topSection}
              name={coin.CoinName}
              symbol={coin.Symbol}
            ></CoinHeaderGrid>
            <CoinImage coin={coin} />
          </TileClass>
        );
      }}
    </AppContext.Consumer>
  );
}
