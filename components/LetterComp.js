import { useMenuContext } from "@/context/menu";
import Image from "next/image";
import React, { useEffect, useState } from "react";

function LetterComp({ character, alphabet, getPoint }) {
  const [answer, setAnswer] = useState("");
  const [isCorrect, setIsCorrect] = useState(undefined);
  const [charStyle, setCharStyle] = useState("");
  const [points, setPoints] = useState(0);
  const [navigate] = useMenuContext();

  const handleAnswer = (e) => {
    e.preventDefault();
    setAnswer(e.target.value);
  };

  const checkAnswer = (e) => {
    e.preventDefault();
    if (answer.toLowerCase() === character) {
      setIsCorrect(true);
      setPoints(1);
    } else {
      setIsCorrect(false);
      setPoints(0);
    }
  };

  useEffect(() => {
    handleStyle();
  }, [isCorrect]);

  useEffect(() => {
    getPoint(points);
  }, [points]);

  const handleStyle = () => {
    if (isCorrect) {
      setCharStyle(style.char.correct);
    } else if (isCorrect === false) {
      setCharStyle(style.char.wrong);
    } else setCharStyle(style.char.default);
  };

  const style = {
    char: {
      correct:
        "flex flex-col items-center gap-3 w-28 h-28 md:w-32 md:h-32 xl:w-36 xl:h-36 bg-green-600 p-4 rounded-xl shadow-md shadow-black",
      wrong:
        "flex flex-col items-center gap-3 w-28 h-28 md:w-32 md:h-32 xl:w-36 xl:h-36 bg-red-600 p-4 rounded-t-xl shadow-md shadow-black",
      default:
        "flex flex-col items-center gap-3 w-28 h-28 md:w-32 md:h-32 xl:w-36 xl:h-36 bg-slate-600 p-4 rounded-t-xl shadow-md shadow-black",
    },
  };

  return (
    <div className="flex flex-col items-center ">
      <div className={charStyle}>
        <div className="w-16 h-16 relative">
          <Image
            className={navigate ? "hidden" : "block"}
            fill
            src={`/characters/${alphabet}/${character}.svg`}
            alt="Character image"
          ></Image>
        </div>
        <form>
          <input
            className="text-sm md:text-2xl xl:text-4xl text-center text-black w-full rounded"
            type="text"
            value={answer}
            onChange={handleAnswer}
            onKeyDown={(e) => {
              if (e.key === "Enter") checkAnswer(e);
            }}
            maxLength="3"
            autoFocus
            disabled={isCorrect !== undefined && true}
          ></input>
        </form>
      </div>
      {isCorrect === false && (
        <p className="bg-green-500 w-full md:text-2xl xl:text-4xl text-center border-4 rounded-b-xl shadow-md shadow-black">
          {character}
        </p>
      )}
    </div>
  );
}

export default LetterComp;
