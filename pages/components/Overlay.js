import React from "react";
import { Logo } from "./Logo";

export const Overlay = ({ children }) => {
  return (
    <div className="min-w-screen flex flex-col xl:flex-row">
      <Logo />
      <Navigation />

      {/* <main>{children}</main> */}
    </div>
  );
};
