import React from "react";
import styled, { css } from "styled-components";
import { AppContext } from "../App/AppProvider";
import { SelectableTile } from "../Shared/Tile";
import CoinTile from "./CoinTile";

export const CoinGridStyled = styled.div`
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  grid-gap: 15px;
  margin-top: 40px;
`;

function getCoinsToDisplay(coinList) {
  return Object.keys(coinList).slice(0, 100);
}
// eslint-disable-next-line import/no-anonymous-default-export
export default function () {
  return (
    <AppContext.Consumer>
      {({ coinList }) => {
        return (
          <CoinGridStyled>
            {getCoinsToDisplay(coinList).map((coinKey) => (
              <CoinTile coinKey={coinKey} />
            ))}
          </CoinGridStyled>
        );
      }}
    </AppContext.Consumer>
  );
}
