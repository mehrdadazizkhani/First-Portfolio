import { motion } from "framer-motion";
import React from "react";

interface AboutProps extends React.PropsWithChildren {}

const About: React.FunctionComponent<AboutProps> = (): JSX.Element => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1.5 }}
      className="container relative mx-auto flex h-screen flex-col items-center justify-evenly px-10 text-center md:flex-row md:text-left"
    >
      <h3 className="absolute top-24 text-2xl uppercase tracking-[20px] text-gray-500">
        about
      </h3>
      <motion.img
        initial={{
          x: -200,
          opacity: 0,
        }}
        whileInView={{
          x: 0,
          opacity: 1,
        }}
        transition={{
          duration: 1.2,
        }}
        viewport={{
          once: true,
        }}
        src="https://media.licdn.com/dms/image/D4E03AQGoXYROUKDQag/profile-displayphoto-shrink_800_800/0/1670921733443?e=1681948800&v=beta&t=KVTf4Av0PJJjFXVNWfApLGVXkvNBV43eUMB1hfZSewM"
        className="md:h-95 -mb-20 h-56 w-56 flex-shrink-0 rounded-full object-cover md:mb-0 md:w-64 md:rounded-lg xl:h-[600px] xl:w-[500px]"
      />
      <div className="space-y-10 px-0 md:px-10">
        <h4 className="text-4xl font-semibold capitalize">
          here is a{" "}
          <span className="underline decoration-[#f7ab0a]">little</span>{" "}
          background
        </h4>
        <p className="text-base">
          I'm an architect, maker, and computational designer with a master's
          degree in architecture. I founded MSA (Mathematical Solutions for
          Architecture) in 2014 to meld my passion for creative design with my
          architecture and fabrication know-how. Now I plan to move my work path
          toward web development to present new products in the future with an
          interdisciplinary approach to architecture and programming.
        </p>
      </div>
    </motion.div>
  );
};

export default About;
