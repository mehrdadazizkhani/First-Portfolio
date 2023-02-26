import { motion } from "framer-motion";
import React from "react";

interface BackgroundCircleProps extends React.PropsWithChildren {}

const BackgroundCircle: React.FunctionComponent<
  BackgroundCircleProps
> = (): JSX.Element => {
  return (
    <motion.div
      initial={{
        opacity: 0,
      }}
      animate={{
        scale: [1, 2, 2, 3, 1],
        opacity: [0.1, 0.2, 0.4, 0.8, 0.1, 1],
      }}
      transition={{
        duration: 3,
      }}
      className="absolute top-0 flex h-full items-center justify-center"
    >
      <div className="absolute my-auto h-[200px] w-[200px] animate-ping rounded-full border border-[#353535]" />
      <div className="absolute my-auto h-[300px] w-[300px] animate-ping rounded-full border border-[#353535]" />
      <div className="absolute my-auto h-[500px] w-[500px] animate-ping rounded-full border border-[#353535]" />
      <div className="absolute my-auto h-[650px] w-[650px] animate-pulse rounded-full border border-[#f7ab0a] opacity-20" />
      <div className="absolute my-auto h-[800px] w-[800px] animate-ping rounded-full border border-[#353535]" />
    </motion.div>
  );
};

export default BackgroundCircle;
