import { ArrowUpRight } from "lucide-react";
// import {  FaGithubAlt } from "react-icons/fa";
import projects from "../data/projects.json";
import { FaGithub } from "react-icons/fa";

export const Projects = () => {
  return (
    <>
      <div className="max-width m-auto px-4 flex flex-col gap-5 pt-16 overflow-hidden">
        <div>
          <h3 className="text-primary">PROJECTS</h3>
        </div>
        <div>
          <div className="grid md:grid-cols-2 gap-16 text-font p-4">
            {projects.map((project) => (
              <div key={project.id} className="flex flex-col rounded-md overflow-hidden">
                <div className="group glow m-1 rounded-md relative overflow-hidden h-full">
                  <img className="w-full group-hover:scale-110 transition-transform duration-500" src={project.thumbnail} alt="" />
                  <div className="absolute inset-0 group-hover:bg-linear-to-t from-surface via-surface/80 to-transparent opacity-50"/>
                  <div className=" absolute inset-0 flex gap-5 justify-center items-center opacity-0 group-hover:opacity-100 transition-opacity duration-700">
                    <a className=" group-hover:bg-surface/90 rounded-md" href="">
                      <ArrowUpRight size={28}/>
                    </a>
                    <a className="group-hover:bg-surface/90 p-1 rounded-md" href="">
                      <FaGithub size={22}/>
                    </a>
                  </div>
                </div>
                <div className="glass p-2 px-3 space-y-2 border-none md:h-full ">
                  <h4 className="text-primary font-semibold">{project.title}</h4>
                  <p>{project.description}</p>
                  <div className="flex flex-wrap gap-3 pt-2">
                    {project.techStack.map((tech)=><span className="glass py-1 px-2 rounded-md text-sm">{tech}</span>)}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};
