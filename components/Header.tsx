import { motion } from "framer-motion";
import Link from "next/link";
import React from "react";
import { SocialIcon } from "react-social-icons";

interface HeaderProps extends React.PropsWithChildren {}

const Header: React.FunctionComponent<HeaderProps> = (): JSX.Element => {
  return (
    <header className="container sticky top-0 z-20 mx-auto flex items-start  justify-between p-5 xl:items-center">
      <motion.div
        initial={{
          x: -500,
          opacity: 0,
          scale: 0.5,
        }}
        animate={{
          x: 0,
          opacity: 1,
          scale: 1,
        }}
        transition={{
          duration: 1,
        }}
        className="flex items-center"
      >
        {/* Social Icons */}
        <SocialIcon
          url="https://github.com/mehrdadazizkhani"
          fgColor="grey"
          bgColor="transparent"
          target="_blank"
        />
        <SocialIcon
          url="https://linkedin.com/in/mehrdad-azizkhani-2a8313a5"
          fgColor="grey"
          bgColor="transparent"
          target="_blank"
        />
      </motion.div>
      {/* <Link href="#contact"> */}
      <motion.div
        initial={{
          x: 500,
          opacity: 0,
          scale: 0.5,
        }}
        animate={{
          x: 0,
          opacity: 1,
          scale: 1,
        }}
        transition={{
          duration: 1,
        }}
        className="flex cursor-pointer items-center text-gray-300"
      >
        <SocialIcon
          className="cursor-pointer"
          network="email"
          fgColor="grey"
          bgColor="transparent"
        />
        <p className="hidden text-sm uppercase text-gray-400 md:inline-flex">
          Get In Touch
        </p>
      </motion.div>
      {/* </Link> */}
    </header>
  );
};

export default Header;
