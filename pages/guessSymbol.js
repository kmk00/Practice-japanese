import Image from "next/image";
import React, { useEffect, useRef, useState } from "react";
import { useAlphabetContext } from "@/context/alphabet";
import useWindowSize from "../hooks/useWindowSize";
import { random_item } from "../modules/randomItem";
import { characters } from "@/assets/characters-data";

function guessSymbol() {
  const [alphabet] = useAlphabetContext();
  const windowSize = useWindowSize();
  const [getChar, setGetChar] = useState(false);
  const [character, setCharacter] = useState("ro");
  const [resultSize, setResultSize] = useState(300);
  const [isCorrect, setIsCorrect] = useState(undefined);
  const [answer, setAnswer] = useState("");
  const [score, setScore] = useState(0);
  const [totalScore, setTotalScore] = useState(0);
  const [scoreStyle, setScoreStyle] = useState(
    "mt-8 md:text-7xl sm:text-6xl  text-2xl font-bold"
  );
  const inputBox = useRef();

  const style = {
    correct: "text-green-400 mt-8 md:text-7xl sm:text-5xl  text-2xl font-bold",
    wrong: "text-red-400 mt-8 md:text-7xl sm:text-5xl  text-2xl font-bold",
    default: "mt-8 md:text-7xl sm:text-5xl  text-2xl font-bold",
  };

  //set size of character window
  useEffect(() => {
    if (windowSize.width > 1280) {
      setResultSize(250);
    } else if (windowSize.width < 1300 && windowSize.width > 768) {
      setResultSize(200);
    } else {
      setResultSize(50);
    }
  }, [windowSize]);

  useEffect(() => {
    setCharacter(random_item(characters));
    setIsCorrect(undefined);
    setAnswer("");
  }, [getChar]);

  const handleAnswer = (e) => {
    e.preventDefault();
    setAnswer(e.target.value);
  };

  const handleGetChar = (e) => {
    e.preventDefault();
    inputBox.current.disabled = false;
    inputBox.current.focus();
    setGetChar((prev) => !prev);
  };

  useEffect(() => {
    handleScoreStyle();
    if (isCorrect) {
      setScore((prev) => prev + 1);
      setTotalScore((prev) => prev + 1);
    }
    if (isCorrect === false) setTotalScore((prev) => prev + 1);
  }, [isCorrect]);

  const checkAnswer = (e) => {
    e.preventDefault();
    if (answer.toLowerCase() === character) setIsCorrect(true);
    else setIsCorrect(false);
  };

  const handleScoreStyle = () => {
    if (isCorrect) {
      setScoreStyle(style.correct);
    } else if (isCorrect === false) {
      setScoreStyle(style.wrong);
    } else setScoreStyle(style.default);
  };

  return (
    <div className="w-full flex flex-col md:grid md:grid-cols-2 items-center gap-4 md:mt-20 md:mb-20  md:text-3xl ">
      <div className="flex flex-col items-center  h-full">
        <div className="bg-black xl:w-[600px] xl:h-[600px] md:w-[400px] md:h-[400px] p-4 flex justify-center text-3xl items-center gap-8 border-gray-400 shadow-md shadow-black border-2">
          <Image
            width={resultSize}
            height={resultSize}
            src={`/characters/${alphabet}/${character}.svg`}
            alt="Character Image"
            priority
          ></Image>
        </div>
        <p className={scoreStyle}>{`Score: ${score}/${totalScore}`}</p>
      </div>
      <div className="flex flex-col gap-4 items-center">
        <form className="text-center text-md flex-col flex items-center">
          <input
            className="text-xl sm:text-2xl xl:text-6xl text-center text-white max-w-lg h-12 md:h-16 bg-black border-gray-400 shadow-md shadow-black border-2 disabled:bg-gray-600 font-black"
            type="text"
            value={answer}
            onChange={handleAnswer}
            onKeyDown={(e) => {
              if (e.key === "Enter") checkAnswer(e);
            }}
            ref={inputBox}
            maxLength="3"
            disabled={isCorrect != undefined && true}
            autoFocus
          ></input>
          {isCorrect === undefined && (
            <button
              onClick={checkAnswer}
              className="mt-8 text-xl md:text-6xl sm:text-3xl hover:border-b-4 font-black border-black duration-75 w-fit ease-in active:text-red-500"
            >
              Check
            </button>
          )}
          {isCorrect === false && (
            <p className="bg-green-500 w-full md:text-2xl font-black xl:text-6xl text-center border-4 rounded-b-xl shadow-md shadow-black">
              {character}
            </p>
          )}
        </form>
        <button
          onClick={handleGetChar}
          className="text-xl md:text-6xl m-4 sm:text-3xl hover:border-b-4 font-black border-black duration-75 w-fit ease-in active:text-red-500"
        >
          Generate New
        </button>
      </div>
    </div>
  );
}

export default guessSymbol;
