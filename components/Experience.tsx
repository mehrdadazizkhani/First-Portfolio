import { motion } from "framer-motion";
import React from "react";
import ExperienceCard from "./ExperienceCard";

interface ExperienceProps extends React.PropsWithChildren {}

const Experience: React.FunctionComponent<
  ExperienceProps
> = (): JSX.Element => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1.5 }}
      className="relative flex h-screen max-w-full flex-col items-center justify-evenly overflow-hidden px-10 text-left md:flex-row"
    >
      <h3 className="absolute top-24 text-2xl uppercase tracking-[20px] text-gray-500">
        experience
      </h3>
      <div className="flex w-full snap-x snap-mandatory space-x-5 overflow-x-scroll p-10 scrollbar-thin scrollbar-track-gray-400/20 scrollbar-thumb-[#f7ab0a]/80">
        <ExperienceCard role="Front-End Developer" company="Quera" />
        <ExperienceCard role="Front-End Developer" company="Quera" />
        <ExperienceCard role="Front-End Developer" company="Quera" />
        <ExperienceCard role="Front-End Developer" company="Quera" />
      </div>
    </motion.div>
  );
};

export default Experience;
