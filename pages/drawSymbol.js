import { useAlphabetContext } from "@/context/alphabet";
import { useMenuContext } from "@/context/menu";
import React, { useEffect, useRef, useState } from "react";
import CanvasDraw from "react-canvas-draw";
import useWindowSize from "../hooks/useWindowSize";
import { characters } from "@/assets/characters-data";
import { random_item } from "@/modules/randomItem";
import Image from "next/image";

function drawSymbol() {
  const [navigate] = useMenuContext();
  const [alphabet] = useAlphabetContext();
  const windowSize = useWindowSize();
  const canva = useRef();
  const [canvaSize, setCanvaSize] = useState(300);
  const [resultSize, setResultSize] = useState(300);
  const [showResult, setShowResult] = useState(false);
  const [character, setCharacter] = useState(undefined);

  useEffect(() => {
    if (windowSize.width > 1280) {
      setCanvaSize(600);
      setResultSize(250);
    } else if (windowSize.width < 1300 && windowSize.width > 768) {
      setCanvaSize(400);
      setResultSize(200);
    } else {
      setCanvaSize(300);
      setResultSize(50);
    }
  }, [windowSize]);

  //clear canva when resized / when menu is opened
  useEffect(() => {
    canva.current.clear();
  }, [canvaSize, navigate]);

  useEffect(() => {
    setCharacter(random_item(characters));
  }, []);

  const handleShowResult = () => setShowResult((prevState) => !prevState);

  const getNewCharacter = () => {
    if (showResult) setShowResult(false);
    canva.current.clear();
    setCharacter(random_item(characters));
  };

  return (
    <div className="w-full flex flex-col md:grid md:grid-cols-2 items-center gap-4 md:mt-20  md:text-3xl ">
      <div className="flex flex-col items-center  h-full">
        <div className="bg-black xl:w-[600px] xl:h-[600px] md:w-[400px] md:h-[400px] p-4 flex justify-center text-3xl items-center gap-8 border-gray-400 shadow-md shadow-black border-2">
          {!showResult ? (
            <p className="xl:text-[200px] md:text-8xl sm:text-5xl  text-md text-white text-center">
              {character}
            </p>
          ) : (
            <div className="xl:text-7xl md:text-8xl sm:text-5xl text-md text-white text-center">
              <Image
                width={resultSize}
                height={resultSize}
                src={`/characters/${alphabet}/${character}.svg`}
                alt="Character Image"
              ></Image>
            </div>
          )}
        </div>
        <button
          onClick={handleShowResult}
          className="pt-4 p-2 text-xl xl:text-5xl hover:border-b-4 border-black duration-75 w-fit ease-in active:text-red-500"
        >
          {showResult ? "Hide Solution" : "Show Solution"}
        </button>
      </div>
      <div className="flex flex-col items-center ">
        <CanvasDraw
          className="border-gray-400 shadow-md shadow-black border-2"
          canvasWidth={canvaSize}
          canvasHeight={canvaSize}
          hideInterface={true}
          hideGrid={true}
          brushColor={"#fffff"}
          disabled={navigate}
          ref={canva}
        />
        <div className="flex justify-center w-full gap-12 xl:col-span-2 p-4">
          <button
            className="p-2 text-xl xl:text-5xl md:text-2xl hover:border-b-4 border-black duration-75 w-fit ease-in active:text-red-500"
            onClick={() => canva.current.clear()}
          >
            Clear
          </button>
          <button
            onClick={getNewCharacter}
            className="p-2 text-xl xl:text-5xl md:text-2xl hover:border-b-4 border-black duration-75 w-fit ease-in active:text-red-500"
          >
            Get new
          </button>
        </div>
      </div>
    </div>
  );
}

export default drawSymbol;
