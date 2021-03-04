import React from "react";
import { AppContext } from "../App/AppProvider";
import { SelectableTile } from "../Shared/Tile";
import CoinHeaderGrid from "./CoinHeaderGrid";
import CoinImage from "../Shared/CoinImage";

// eslint-disable-next-line import/no-anonymous-default-export
export default function ({ coinKey }) {
  return (
    <AppContext.Consumer>
      {({ coinList }) => {
        let coin = coinList[coinKey];

        const TileClass = SelectableTile;

        return (
          <TileClass>
            <CoinHeaderGrid
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
