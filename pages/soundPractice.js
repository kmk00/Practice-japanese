import React from "react";
import { useAlphabetContext } from "@/context/alphabet";
import { characters } from "@/assets/characters-data";
import LetterSound from "@/components/LetterSound";

function soundPractice() {
  const [alphabet] = useAlphabetContext();

  return (
    <div className="flex flex-col items-center ">
      <div className="flex flex-col items-center md:mb-40 mb-32 max-w-7xl">
        <div className="grid grid-cols-3 md:grid-cols-6 xl:grid-cols-8 gap-4 ">
          {characters.map((item) => (
            <LetterSound key={item} character={item} alphabet={alphabet} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default soundPractice;
