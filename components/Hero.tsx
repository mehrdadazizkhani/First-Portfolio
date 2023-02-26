import Link from "next/link";
import React from "react";
import { useTypewriter, Cursor } from "react-simple-typewriter";
import BackgroundCircle from "./BackgroundCircle";

interface HeroProps extends React.PropsWithChildren {}

const Hero: React.FunctionComponent<HeroProps> = (): JSX.Element => {
  const [text] = useTypewriter({
    words: [
      "Hi, The Name's Mehrdad Azizkhani",
      "Guy who loves coding",
      "<ButLovesToPlayGameMore>",
    ],
    loop: true,
    delaySpeed: 2000,
  });
  return (
    <div className="relative flex h-screen flex-col items-center justify-center overflow-hidden">
      <BackgroundCircle />
      <img
        className="h-32 w-32 rounded-full object-cover"
        src="https://media.licdn.com/dms/image/D4E03AQGoXYROUKDQag/profile-displayphoto-shrink_800_800/0/1670921733443?e=1681948800&v=beta&t=KVTf4Av0PJJjFXVNWfApLGVXkvNBV43eUMB1hfZSewM"
        alt="Mehrdad Azizkhani"
      />
      <div className="absolute top-[calc(50%+100px)] z-10 flex flex-col items-center justify-center">
        <h2 className="pb-2 text-sm uppercase tracking-[15px] text-gray-500">
          FrontEnd Developer
        </h2>
        <h1 className="overflow-hidden px-10 text-center text-5xl font-semibold lg:text-6xl">
          <span className="overflow-hidden ">{text}</span>
          <Cursor cursorColor="#f7ab0a" />
        </h1>
        <div className="z-10 pt-5">
          <Link href="#about">
            <button className="heroButton">About</button>
          </Link>
          <Link href="#experience">
            <button className="heroButton">Experience</button>
          </Link>
          <Link href="#skills">
            <button className="heroButton">Skills</button>
          </Link>
          <Link href="#projects">
            <button className="heroButton">Projects</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Hero;
