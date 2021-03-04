import React from "react";

// eslint-disable-next-line import/no-anonymous-default-export
export default function ({ coin, style }) {
  return (
    <img
      src={`http://cryptocompare.com/${coin.ImageUrl}`}
      alt={coin.Symbol}
      style={style || { height: "50px" }}
    />
  );
}
