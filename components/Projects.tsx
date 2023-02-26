import { motion } from "framer-motion";
import React from "react";

interface ProjectsProps extends React.PropsWithChildren {}

const Projects: React.FunctionComponent<ProjectsProps> = (): JSX.Element => {
  const projects = [1, 2, 3, 4, 5];
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1.5 }}
      className="relative mx-auto flex h-screen max-w-full flex-col items-center justify-evenly px-10 text-center md:flex-row md:text-left"
    >
      <h3 className="absolute top-24 text-2xl uppercase tracking-[20px] text-gray-500">
        Projects
      </h3>
      <div className="relative z-20 flex w-full snap-x snap-mandatory overflow-x-scroll overflow-y-hidden scrollbar-thin scrollbar-track-gray-400/20 scrollbar-thumb-[#f7ab0a]/80">
        {projects.map((project, i) => (
          <div className="flex h-screen w-screen flex-shrink-0 snap-center flex-col items-center justify-center space-y-5 p-20 md:p-44">
            <motion.img
              className="w-48"
              initial={{ y: -300, opacity: 0 }}
              transition={{ duration: 1.2 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              src="https://media.licdn.com/dms/image/D4E03AQGoXYROUKDQag/profile-displayphoto-shrink_800_800/0/1670921733443?e=1681948800&v=beta&t=KVTf4Av0PJJjFXVNWfApLGVXkvNBV43eUMB1hfZSewM"
            />
            <div className="max-w-6xl space-y-10 px-0 md:px-10">
              <h4 className="text-center text-3xl font-semibold">
                <span className="underline decoration-[#f7ab0a]/50">
                  Case Study {i + 1} of {projects.length}: UPS Clone
                </span>
              </h4>
              <p className="text-center text-lg md:text-left">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias
                fugiat molestias dolore harum sint commodi, doloribus placeat
                nulla distinctio possimus quo, soluta voluptatum est itaque
                ullam iusto magni quas voluptate!
              </p>
            </div>
          </div>
        ))}
      </div>
      <div className="absolute top-[30%] left-0 h-[500px] w-full -skew-y-6 bg-[#f7ab0a]/10" />
    </motion.div>
  );
};

export default Projects;
