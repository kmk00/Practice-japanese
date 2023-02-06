import Link from "next/link";
import React from "react";

function externalSources() {
  return (
    <div className="flex items-center flex-col  mb-16 cursor-default">
      <div className="max-w-[1240px] text-center md:grid grid-cols-2">
        <h1 className="text-2xl md:text-5xl font-black p-4 col-span-2">
          Here are a few steps to help you learn Japanese
        </h1>

        <div className="p-2 md:p-8 border-4 rounded-md border-black m-4 hover:scale-105 ease-in-out duration-200">
          <h2 className="text-lg xl:text-4xl md:text-3xl sm:text-xl mb-4 h-20 font-black border-b-2 border-black ">
            Familiarize yourself with the basics
          </h2>
          <p className="text-xl md:text-3xl font-bold  ">
            Start with the Japanese alphabet
            <Link
              className="hover:text-green-600 text-gray-700 underline"
              href="https://www.tofugu.com/learn-japanese/"
            >
              (hiragana and katakana),
            </Link>{" "}
            basic grammar, and common phrases.
          </p>
        </div>

        <div className="p-2 border-4 md:p-8 rounded-md border-black m-4 hover:scale-105 ease-in-out duration-200">
          <h2 className="text-2xl xl:text-4xl md:text-3xl mb-4 h-20 font-black border-b-2 border-black">
            Immerse yourself in the language
          </h2>
          <p className="text-xl md:text-3xl font-bold">
            Listen to Japanese music, watch Japanese TV shows and movies, and
            try to interact with native speakers.
          </p>
        </div>

        <div className="p-2 border-4 md:p-8 rounded-md border-black m-4 hover:scale-105 ease-in-out duration-200">
          <h2 className="text-2xl xl:text-4xl md:text-3xl mb-4 h-20 font-black border-b-2 border-black">
            Practice regularly
          </h2>

          <p className="text-xl md:text-3xl font-bold">
            Regular practice is key to becoming fluent in any language. Try to
            speak and write in Japanese as much as you can.
          </p>
        </div>

        <div className="p-2 border-4 md:p-8 rounded-md border-black m-4 hover:scale-105 ease-in-out duration-200">
          <h2 className="text-2xl xl:text-4xl md:text-3xl mb-4 h-20 font-black border-b-2 border-black ">
            Use language learning resources
          </h2>
          <p className="text-xl md:text-3xl font-bold">
            There are many resources available, such as textbooks, language
            exchange programs, and language schools. You can also use apps and
            websites like{" "}
            <Link
              className="hover:text-green-600 text-gray-700 underline "
              href="https://www.duolingo.com/"
            >
              Duolingo
            </Link>
            ,{" "}
            <Link
              className="hover:text-green-600 text-gray-700 underline "
              href={"https://www.memrise.com/"}
            >
              Memrise
            </Link>
            , and{" "}
            <Link
              className="hover:text-green-600 text-gray-700 underline "
              href={"https://ankiweb.net/shared/decks/japanese"}
            >
              Anki
            </Link>{" "}
            to help you study
          </p>
        </div>

        <div className="p-2 border-4 md:p-8 rounded-md border-black col-span-2 m-4 hover:scale-105 ease-in-out duration-200">
          <h2 className="text-2xl xl:text-4xl md:text-3xl mb-4 h-20 font-black border-b-2 border-black ">
            Stay motivated
          </h2>
          <p className="text-xl md:text-3xl font-bold">
            Learning a new language can be challenging, but set achievable
            goals, and reward yourself for your progress to stay motivated.
          </p>
        </div>

        <div className="p-2 border-4 md:p-8 rounded-md border-b-2 col-span-2 border-black m-4 hover:scale-105 ease-in-out duration-200">
          <h2 className="text-2xl xl:text-4xl md:text-3xl font-black">
            Remember, learning a new language takes time and patience, but with
            consistent effort and practice, you can become proficient in
            Japanese.
          </h2>
        </div>
      </div>
    </div>
  );
}

export default externalSources;
