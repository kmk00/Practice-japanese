import { useAlphabetContext } from "@/context/alphabet";
import Head from "next/head";
import Image from "next/image";

export default function Home() {
  const [alphabet, setAlphabet] = useAlphabetContext();
  const style = {
    active: "border-b-4 border-black duration-75 w-fit ease-in text-green-700",
    notActive:
      "hover:border-b-4 border-black duration-75 w-fit ease-in text-black",
  };

  return (
    <>
      <Head>
        <title>Japanese Practice</title>
        <meta
          name="description"
          content="This site is designed for anyone who wants to practice the basics of
            Japanese."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/bonsai.ico" />
      </Head>
      <main className="flex flex-col gap-8 justify-center items-center mt-[10%]">
        <div className="xl:shadow-black xl:shadow-md rounded h-auto xl:w-[700px] flex items-center justify-center p-4">
          <div className="hidden xl:block z-1">
            <Image
              width={250}
              height={1}
              src="/homeImage.svg"
              alt="Decorative home image"
            />
          </div>
          <p className="text-2xl md:text-5xl text-center w-1/2 tracking-wider">
            This site is designed for anyone who wants to practice the basics of
            Japanese.
          </p>
        </div>
        <div className="text-2xl md:text-5xl">
          <p className="text-center">Choose alphabet</p>
          <div className="grid grid-cols-2 gap-8 mt-4 w-full">
            <button
              className={
                alphabet === "hiragana" ? style.active : style.notActive
              }
              onClick={() => setAlphabet("hiragana")}
            >
              Hiragana
            </button>
            <button
              className={
                alphabet === "katakana" ? style.active : style.notActive
              }
              onClick={() => setAlphabet("katakana")}
            >
              Katakana
            </button>
          </div>
        </div>
      </main>
    </>
  );
}
