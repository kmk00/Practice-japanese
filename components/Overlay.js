import React from "react";
import { Logo } from "./Logo";
import { Navigation } from "./Navigation";

export const Overlay = ({ children }) => {
  return (
    <>
      <div className="min-w-screen flex flex-col items-center justify-between xl:flex-row shadow-gray-400 shadow-md mb-4">
        <Logo />
        <Navigation />
      </div>
      <main>{children}</main>
    </>
  );
};
