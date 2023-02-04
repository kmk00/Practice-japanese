import { useAlphabetContext } from "@/context/alphabet";
import { useMenuContext } from "@/context/menu";
import React, { useEffect, useRef, useState } from "react";
import CanvasDraw from "react-canvas-draw";
import useWindowSize from "../hooks/useWindowSize";

function drawSymbol() {
  const [navigate] = useMenuContext();
  const windowSize = useWindowSize();
  const canva = useRef();
  const [canvaSize, setCanvaSize] = useState(300);
  const [alphabet] = useAlphabetContext();

  console.log(alphabet);

  useEffect(() => {
    if (windowSize.width > 1280) {
      setCanvaSize(600);
    } else if (windowSize.width < 1300 && windowSize.width > 768) {
      setCanvaSize(400);
    } else setCanvaSize(300);
  }, [windowSize]);

  //clear canva when resized / when menu is opened
  useEffect(() => {
    canva.current.clear();
  }, [canvaSize, navigate]);

  return (
    <div className="w-full flex flex-col md:grid md:grid-cols-2 items-center gap-4 md:mt-20  md:text-3xl ">
      <div className="flex flex-col items-center h-full">
        <div className="bg-black  xl:w-[600px] xl:h-[600px] md:w-[400px] md:h-[400px] p-4  flex justify-center text-3xl items-center">
          <p className="xl:text-9xl md:text-8xl sm:text-5xl  text-md text-white text-center">
            KU
          </p>
        </div>
        <button className="pt-4 text-xl xl:text-5xl hover:border-b-4 border-black duration-75 w-fit ease-in active:text-red-500">
          Show
        </button>
      </div>
      <div className="flex flex-col items-center">
        <CanvasDraw
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
            className="p-2 text-xl xl:text-5xl hover:border-b-4 border-black duration-75 w-fit ease-in active:text-red-500"
            onClick={() => canva.current.clear()}
          >
            Clear
          </button>
          <button className="p-2 text-xl xl:text-5xl hover:border-b-4 border-black duration-75 w-fit ease-in active:text-red-500">
            Getnew
          </button>
        </div>
      </div>
    </div>
  );
}

export default drawSymbol;
