import { useMenuContext } from "@/context/menu";
import Image from "next/image";
import React, { useState } from "react";

function LetterSound({ alphabet, character }) {
  const [navigate] = useMenuContext();

  const handleClick = (sound) => {
    const newAudio = new Audio(sound);
    newAudio.play();
  };

  return (
    <div className="flex flex-col items-center ">
      <button
        value={`/sounds/a.mp3`}
        onClick={() => handleClick(`/sounds/${character}.mp3`)}
        className="flex flex-col items-center gap-3 w-24 h-24 md:w-32 md:h-32 xl:w-36 xl:h-36 bg-cyan-800 hover:bg-cyan-700 p-4 rounded-t-xl shadow-md shadow-black"
      >
        <div className="w-16 h-16 relative">
          <Image
            className={navigate ? "hidden" : "block"}
            fill
            src={`/characters/${alphabet}/${character}.svg`}
            alt="Character image"
          ></Image>
        </div>

        <p className="bg-white w-full md:text-2xl xl:text-4xl text-center border-4 rounded-xl shadow-md shadow-black">
          {character}
        </p>
      </button>
    </div>
  );
}

export default LetterSound;
