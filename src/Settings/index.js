import React from "react";
import WelcomeMessage from "./WelcomeMessage";
import ConfirmButton from "../Settings/ConfirmButton";
// eslint-disable-next-line import/no-anonymous-default-export
export default function () {
  return (
    <div>
      <WelcomeMessage />
      <ConfirmButton />
    </div>
  );
}
