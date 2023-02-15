import { motion } from "framer-motion";
import React from "react";

interface ProjectsProps extends React.PropsWithChildren {}

const Projects: React.FunctionComponent<ProjectsProps> = (): JSX.Element => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1.5 }}
      className="container relative mx-auto flex h-screen flex-col items-center justify-evenly px-10 text-center md:flex-row md:text-left"
    >
      <h3 className="absolute top-24 text-2xl uppercase tracking-[20px] text-gray-500">
        Projects
      </h3>
    </motion.div>
  );
};

export default Projects;
