import { motion } from "framer-motion";
import React from "react";
import { SocialIcon } from "react-social-icons";

interface HeaderProps extends React.PropsWithChildren {}

const Header: React.FunctionComponent<HeaderProps> = (): JSX.Element => {
  return (
    <header className="z-20 p-5 flex justify-between mx-auto sticky top-0  items-start xl:items-center container">
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
        />
        <SocialIcon
          url="https://linkedin.com/in/mehrdad-azizkhani-2a8313a5"
          fgColor="grey"
          bgColor="transparent"
        />
      </motion.div>
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
        className="flex items-center text-gray-300 cursor-pointer"
      >
        <SocialIcon
          url="mehrdad.azizkhani@gmail.com"
          network="email"
          fgColor="grey"
          bgColor="transparent"
        />
        <p className="uppercase hidden md:inline-flex text-sm text-gray-400">
          Get In Touch
        </p>
      </motion.div>
    </header>
  );
};

export default Header;
