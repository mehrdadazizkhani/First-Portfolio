import { motion } from "framer-motion";
import React from "react";

interface ExperienceCardProps extends React.PropsWithChildren {
  role: string;
  company?: string;
}

const ExperienceCard: React.FunctionComponent<ExperienceCardProps> = ({
  role,
  company,
}): JSX.Element => {
  return (
    <article className="flex w-[500px] flex-shrink-0 cursor-pointer snap-center flex-col items-center space-y-7 overflow-hidden rounded-lg bg-[#292929] p-10 opacity-40 transition-opacity duration-200 hover:opacity-100 md:w-[600px] xl:w-[900px]">
      <motion.img
        initial={{ y: -100, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 1.2 }}
        viewport={{ once: true }}
        className="h-32 w-32 rounded-full object-cover object-top xl:h-[200px] xl:w-[200px]"
        src="https://media.licdn.com/dms/image/D4E03AQGoXYROUKDQag/profile-displayphoto-shrink_800_800/0/1670921733443?e=1681948800&v=beta&t=KVTf4Av0PJJjFXVNWfApLGVXkvNBV43eUMB1hfZSewM"
        alt=""
      />
      <div className="px-0 md:px-10">
        <h4 className="text-4xl font-light">{role}</h4>
        <p className="mt-1 text-2xl font-bold">
          {company ? company : "Self Employed"}
        </p>
        <div className="my-2 flex space-x-2">
          <img src="" alt="" />
        </div>
        <p className="py-5 uppercase text-gray-300">started 2019, ended 2024</p>
        <ul className="ml-5 list-disc space-y-4 text-lg">
          <li>Lorem ipsum dolor sit amet</li>
          <li>Lorem ipsum dolor sit amet</li>
          <li>Lorem ipsum dolor sit amet</li>
          <li>Lorem ipsum dolor sit amet</li>
          <li>Lorem ipsum dolor sit amet</li>
        </ul>
      </div>
    </article>
  );
};

export default ExperienceCard;
