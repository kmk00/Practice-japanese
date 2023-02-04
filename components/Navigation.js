import { useMenuContext } from "@/context/menu";
import Image from "next/image";
import Link from "next/link";
import React from "react";

export const Navigation = () => {
  const [navigate, setNavigate] = useMenuContext();

  const showNavigation = () => setNavigate(!navigate);

  return (
    <nav className="fixed bottom-5">
      <div
        onClick={showNavigation}
        className=" hover:scale-105 md:p-4 ease-in duration-300 z-50 animate-pulse flex flex-col sm:gap-4 items-center"
      >
        <Image
          className=" scale-50 md:scale-100"
          width={50}
          height={30}
          src="/japanese-char.svg"
          alt="Menu image"
        ></Image>
        <p className="text-xl hidden sm:block md:text-3xl">Select Mode</p>
      </div>

      {navigate && (
        <>
          <div className="fixed bg-black/80 top-0 left-0 w-screen h-screen z-0"></div>
          <div className="fixed left-1/2 top-1/2 translate-x-[-50%] translate-y-[-50%] bg-[#fff0de] z-[99] p-4 md:p-8 text-center text-md md:text-4xl font-black tracking-widest flex flex-col items-center gap-8 rounded-xl shadow-black shadow-lg">
            <p className="text-xl md:text-6xl underline ">Select mode</p>
            <div
              className="hover:border-b-4 border-black duration-75 w-fit ease-in"
              onClick={showNavigation}
            >
              <Link href="/drawSymbol">
                <p>Draw symbol</p>
              </Link>
            </div>
            <div
              className="hover:border-b-4 border-black duration-75 w-fit ease-in"
              onClick={showNavigation}
            >
              <Link href="/">
                <p>Guess the symbol</p>
              </Link>
            </div>
            <div
              className="hover:border-b-4 border-black duration-100 ease-in"
              onClick={showNavigation}
            >
              <Link href="/">
                <p>Write Alphabet</p>
              </Link>
            </div>
            <div
              className="hover:border-b-4 border-black duration-75 w-fit ease-in"
              onClick={showNavigation}
            >
              <Link href="/">
                <p>Practice Sound</p>
              </Link>
            </div>
            <div
              className="hover:border-b-4 border-black duration-75 w-fit ease-in"
              onClick={showNavigation}
            >
              <Link href="/">
                <p>Words Translation</p>
              </Link>
            </div>
            <div
              className="hover:border-b-4 border-black duration-75 w-fit ease-in"
              onClick={showNavigation}
            >
              <Link href="/">
                <p>External sources</p>
              </Link>
            </div>
            <div
              className="hover:border-b-4 border-black duration-75 w-fit ease-in mt-4"
              onClick={showNavigation}
            >
              <Link href="/">
                <p>Return</p>
              </Link>
            </div>
          </div>
        </>
      )}
    </nav>
  );
};
