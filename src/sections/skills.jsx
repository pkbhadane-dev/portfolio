export const Skills = () => {
  const skills = [
    "HTML",
    "CSS",
    "Javascript",
    "React",
    "MongoDb",
    "Express",
    "Node.js",
    "Redux",
    "Zustand",
    "React-router",
    "Tenstack",
    "Tailwind",
  ];

  return (
    <>
      <div className=" flex  overflow-hidden justify-center gap-10 p-10 z-100">
        {skills.map((skill)=><span className=" px-2">{skill}</span>)}
      </div>
    </>
  );
};
