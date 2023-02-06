import React from "react";
import Image from "next/image";

export const Logo = () => {
  return (
    <div
      id="topPage"
      className=" flex justify-center gap-2 md:gap-4 items-center p-4"
    >
      <div className="relative xl:w-40 xl:h-40 md:w-28 md:h-28 w-16 h-16">
        <Image
          fill
          className=""
          src="/bonsai.svg"
          alt="logo image"
          priority
        ></Image>
      </div>
      <p className="text-2xl md:text-6xl font-black"> Learn Japanese</p>
    </div>
  );
};
