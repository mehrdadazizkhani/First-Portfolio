import { motion } from "framer-motion";
import React from "react";
import { PhoneIcon, MapPinIcon, EnvelopeIcon } from "@heroicons/react/24/solid";
import { useForm, SubmitHandler } from "react-hook-form";

interface ContactProps extends React.PropsWithChildren {
  name: string;
  email: string;
  subject: string;
  message: string;
}

const Contact: React.FunctionComponent<ContactProps> = (): JSX.Element => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<ContactProps>();
  const onSubmit: SubmitHandler<ContactProps> = (formData) => {
    window.location.href = `mailto:mehrdad.azizkhani@gmail?subject=${formData.subject}&body=Hi, my name is ${formData.name}, ${formData.message}`;
  };
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1.5 }}
      className="relative mx-auto flex min-h-screen max-w-[2000px] flex-col items-center justify-center overflow-hidden text-center md:text-left xl:flex-row xl:space-y-0 xl:px-10"
    >
      <h3 className="absolute top-24 text-2xl uppercase tracking-[20px] text-gray-500">
        Contact Me
      </h3>
      <div className="flex flex-col space-y-10">
        <h4 className="text-center text-4xl font-semibold">
          I have got just what you need.{" "}
          <span className="underline decoration-[#f7ab0a]/50">Lets Talk.</span>
        </h4>
        <div className="space-y-10">
          <div className="flex items-center justify-center space-x-5">
            <PhoneIcon className="h-7 w-7 animate-pulse text-[#f7ab0a]" />
            <p className="text-2xl">+98195163559</p>
          </div>
          <div className="flex items-center justify-center space-x-5">
            <EnvelopeIcon className="h-7 w-7 animate-pulse text-[#f7ab0a]" />
            <p className="text-2xl">mehrdad.azizkhani@gmail.com</p>
          </div>
          <div className="flex items-center justify-center space-x-5">
            <MapPinIcon className="h-7 w-7 animate-pulse text-[#f7ab0a]" />
            <p className="text-2xl">Tehran, Iran</p>
          </div>
          <form
            onSubmit={handleSubmit(onSubmit)}
            className="mx-auto flex w-fit flex-col space-y-2"
          >
            <div className="flex space-x-2">
              <input
                {...register("name")}
                placeholder="Name"
                className="contactInput"
                type="text"
              />
              <input
                {...register("email")}
                placeholder="Email"
                className="contactInput"
                type="email"
              />
            </div>
            <input
              {...register("subject")}
              placeholder="Subject"
              className="contactInput"
              type="text"
            />
            <textarea
              {...register("message")}
              placeholder="Message"
              className="contactInput"
            />
            <button
              type="submit"
              className="rounded-md bg-[#f7ab0a] py-5 px-10 text-lg font-bold text-black
            "
            >
              Submit
            </button>
          </form>
        </div>
      </div>
    </motion.div>
  );
};

export default Contact;
