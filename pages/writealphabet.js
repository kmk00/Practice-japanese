import React, { useEffect, useState } from "react";
import { characters } from "@/assets/characters-data";
import LetterComp from "@/components/LetterComp";
import { useAlphabetContext } from "@/context/alphabet";
import Link from "next/link";

function writealphabet() {
  const [alphabet] = useAlphabetContext();
  const [shuffledAlphabet, setShuffledAlphabet] = useState(characters);
  const [score, setScore] = useState(0);
  const [refresh, setRefresh] = useState(false);

  useEffect(() => {
    let newArray = shuffle();
    setShuffledAlphabet(newArray);
  }, [refresh]);

  const getPoint = (point) => {
    setScore(score + point);
  };

  function shuffle() {
    let temp = [...characters].slice();
    return temp.sort(() => Math.random() - 0.5);
  }

  const tryAgain = () => {
    setShuffledAlphabet([]);
    setRefresh(!refresh);
    setScore(0);
  };

  return (
    <div className="w-full flex justify-center">
      <div className="flex flex-col items-center mb-32 max-w-7xl">
        <div className="grid grid-cols-3 md:grid-cols-6 xl:grid-cols-8 gap-4 ">
          {shuffledAlphabet.map((item) => (
            <LetterComp
              key={item}
              character={item}
              alphabet={alphabet}
              getPoint={getPoint}
            />
          ))}
        </div>
        <div className="w-full text-end px-6">
          <p className="font-bold mb-4 mt-8 md:text-7xl sm:text-6xl text-4xl ">{`${score} / 46`}</p>
          <Link href="/writealphabet/#topPage">
            <button
              className="text-xl md:text-6xl sm:text-5xl hover:border-b-4 font-black border-black duration-75 w-fit ease-in active:text-red-500"
              onClick={tryAgain}
            >
              Try Again
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default writealphabet;
