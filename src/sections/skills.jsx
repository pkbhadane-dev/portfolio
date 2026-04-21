import { BsJavascript } from "react-icons/bs";
import { DiHtml5, DiMongodb } from "react-icons/di";
import { FaGit, FaGithub, FaNodeJs, FaReact } from "react-icons/fa6";
import { RiCss3Fill, RiTailwindCssFill } from "react-icons/ri";
import {
  SiCloudinary,
  SiExpress,
  SiPostman,
  SiReactrouter,
  SiRedux,
  SiSocket,
} from "react-icons/si";
import logo from "../assets/logo.svg";

const Tanstack = () => {
  return (
    <>
      <img className="w-9.5" src={logo} alt="" />
    </>
  );
};
const Zustand = () => {
  return (
    <>
      <img className="w-9.5" src="zustand_.png" alt="" />
    </>
  );
};

export const Skills = () => {
  const skills = [
    <FaReact />,
    <SiReactrouter />,
    <DiMongodb />,
    <SiExpress />,
    <BsJavascript />,
    <RiCss3Fill />,
    <DiHtml5 />,
    <RiTailwindCssFill />,
    <SiCloudinary />,
    <FaGit />,
    <FaGithub />,
    <SiPostman />,
    <FaNodeJs />,
    <SiRedux />,
    <SiSocket />,
    <Tanstack />,
    <Zustand />,
  ];

  return (
    <>
      <div className=" max-width m-auto pt-16 px-4 overflow-hidden">
        <div className=" py-2 text-center pb-10">
          <h4 className="text-lg">
            <span className="text-primary text-glow">Skills</span>, I have
          </h4>
        </div>
        <div className=" flex flex-wrap gap-3 justify-center overflow-hidden">
          {skills.map((skill, index) => (
            <div key={index}>
              <div className="bg-primary p-4 text-4xl rounded-full text-slate-900">
                {skill}
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};
