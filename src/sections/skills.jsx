import { div, span } from "framer-motion/client";
import { BsJavascript } from "react-icons/bs";
import { DiGit, DiGithub, DiHtml5, DiHtml53dEffects, DiMongodb, DiNodejs } from "react-icons/di";
import { FaGit, FaGithub, FaNodeJs, FaReact } from "react-icons/fa6";
import { RiCss3Fill, RiTailwindCssFill } from "react-icons/ri";
import { SiCloudinary, SiContentstack, SiExpress, SiPostman, SiReactrouter, SiRedux, SiSocket } from "react-icons/si";

export const Skills = () => {
  const skills = [
    <FaReact/>,
    <SiReactrouter/>,
    <DiMongodb/>,
    <SiExpress/>,
    <BsJavascript/>,
    <RiCss3Fill/>,
    <DiHtml5/>,
    <RiTailwindCssFill/>,
    <SiCloudinary/>,
    <FaGit/>,
    <FaGithub/>,
    <SiPostman/>,
    <FaNodeJs/>,
    <SiRedux/>,
    <SiSocket/>
  ];

  return (
    <>
      <div className="max-width flex flex-wrap m-auto pt-20 px-4 gap-3 justify-center overflow-hidden">
        {skills.map((skill) => (
          <div className="">
            <div className="bg-primary p-4 text-4xl rounded-full text-slate-900">{skill}</div>
          </div>
        ))}
      </div>
    </>
  );
};
