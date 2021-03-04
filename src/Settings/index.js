import React from "react";
import WelcomeMessage from "./WelcomeMessage";
import ConfirmButton from "../Settings/ConfirmButton";
import Search from "./Search";
import Page from "../Shared/Page";
import CoinGrid from "./CoinGrid";

// eslint-disable-next-line import/no-anonymous-default-export
export default function () {
  return (
    <Page name="settings">
      <WelcomeMessage />
      <CoinGrid topSection />
      <ConfirmButton />
      <Search></Search>
      <CoinGrid />
    </Page>
  );
}
