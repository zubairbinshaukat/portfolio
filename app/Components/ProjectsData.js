"use client";

import Image from "next/image";
import { Tabs } from "@/components/ui/tabs";

export function ProjectData() {
  const tabs = [
    {
      title: "OpenCinema",
      value: "product",
      content: (
        <div
          className="w-full lg:h-[40rem] overflow-hidden relative h-full rounded-2xl p-10 text-xl md:text-4xl font-bold text-white gradient3">
          <p>OpenCinema</p>
          <OpenCinema />
        </div>
      ),
    },
    {
      title: "Project 2",
      value: "services",
      content: (
        <div
          className="w-full gradient3 lg:h-[40rem] overflow-hidden relative h-full rounded-2xl p-10 text-xl md:text-4xl font-bold text-white">
          <p>Project 2</p>
          <Project2 />
        </div>
      ),
    },
    {
      title: "Project 3",
      value: "playground",
      content: (
        <div
          className="w-full overflow-hidden lg:h-[40rem] relative h-full rounded-2xl p-10 text-xl md:text-4xl font-bold text-white gradient3">
          <p>Project 3</p>
          <Project3 />
        </div>
      ),
    },
  ];

  return (
    (<div
      className="h-[20rem] md:h-[40rem] [perspective:1000px] relative b flex flex-col md:maxw-7xl max-w-5xl mx-auto w-full  items-start justify-start pt-20">
      <Tabs tabs={tabs} />
    </div>)
  );
}

const OpenCinema = () => {
  return (
    (<img
      src="https://ik.imagekit.io/xosswhicz/project1.png"
      alt="opencinema.netlify.app "
      width="1000"
      height="1000"
      className="object-cover object-left-top h-[80%]  md:h-[90%] absolute md:-bottom-10 bottom-5 inset-x-0 w-[90%] rounded-xl mx-auto" />)
  );
};
const Project2 = () => {
  return (
    (<img
      src="https://images.unsplash.com/photo-1725610588150-c4cd8b88affd?q=80&w=3500&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
      alt="dummy image"
      width="1000"
      height="1000"
      className="object-cover object-left-top h-[80%]  md:h-[90%] absolute md:-bottom-10 bottom-5 inset-x-0 w-[90%] rounded-xl mx-auto" />)
  );
};
const Project3 = () => {
  return (
    (<img
      src="https://images.unsplash.com/photo-1725615357444-6123528686cf?q=80&w=3569&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
      alt="dummy image"
      width="1000"
      height="1000"
      className="object-cover object-left-top h-[80%]  md:h-[90%] absolute md:-bottom-10 bottom-5 inset-x-0 w-[90%] rounded-xl mx-auto" />)
  );
};
