import React from "react";
import { Tile } from "../Shared/Tile";
import { AppContext } from "../App/AppProvider";
import CoinImage from "../Shared/CoinImage";
import styled from "styled-components";

const SpotlightName = styled.h2`
  text-align: center;
`;

// eslint-disable-next-line import/no-anonymous-default-export
export default function () {
  return (
    <AppContext.Consumer>
      {({ currentFavorite, coinList }) => (
        <Tile>
          <SpotlightName>{coinList[currentFavorite].CoinName}</SpotlightName>
          <CoinImage spotlight coin={coinList[currentFavorite]}></CoinImage>
        </Tile>
      )}
    </AppContext.Consumer>
  );
}
