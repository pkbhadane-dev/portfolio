import { Download } from "lucide-react";

export const Hero = () => {
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
      {/* set background gradient color */}
      <div className=" absolute inset-0 bg-linear-to-b from-slate-900 via-primary/20 to-slate-900" />
      <div className=" relative">
        {/* creating dots */}
        <div className="absolute inset-0 overflow-hidden">
          {[...Array(50)].map((_, i) => (
            <div
              key={i}
              className="absolute bg-primary w-1.5 h-1.5 rounded-full opacity-50"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animation: `moving-dots ${15 + Math.random() * 20}s ease-in-out infinite`,
                animationDelay: `${Math.random() * 5}s`,
              }}
            />
          ))}
        </div>

        {/* hero section */}
        <div className="max-width m-auto pt-10 lg:pt-25 pb-18 relative z-20 overflow-hidden">
          <div className=" my-17 grid md:grid-cols-2 md:ml-10 items-center text-center space-y-10">
            <div className="space-y-10 z-20">
              <h1 className="text-3xl leading-10 sm:text-3xl md:text-4xl md:leading-12 text-text animate-fade-in animation-delay-100">
                The best way to predict
                <br /> the{" "}
                <span className=" italic font-bold text-glow text-primary-hover">
                  future
                </span>{" "}
                is to create it.
              </h1>

              <p className="text-lg text-text-muted animate-fade-in animation-delay-300">
                A self-taught Mern-Stack Developer dedicated to building robust
                and visually stunning web applications. Experienced in MERN
                Stack, UI/UX design, and Cloud integrations. I don't just write
                code, I build experiences.
              </p>

              <div className="flex justify-center gap-10 animate-fade-in animation-delay-400">
                <button className=" relative cursor-pointer bg-primary hover:text-black py-2 px-5 rounded-full transition-all duration-300">
                  <div className=" absolute inset-0 rounded-full glow animate-pulse w-full h-full" />
                  Contact Me
                </button>
                <button className="group cursor-pointer flex items-center gap-2 border-2 hover:border-primary hover:text-primary transition-all duration-300 py-2 px-5 rounded-full">
                  <Download className=" animate-bounce group-hover:text-primary transition-all duration-300" />{" "}
                  Resume
                </button>
              </div>
            </div>

            <div className="flex justify-center z-0 rounded-sm animate-fade-in animation-delay-500">
              {/* <div className=" absolute rounded-sm top-0 w-full h-full blur-3xl z-0" /> */}
              <div className=" relative w-2xs z-10">
                <img
                  className="rounded-sm object-cover glow"
                  src="matt murdock.jpg"
                  alt=""
                />
                <div className=" absolute glass py-1 px-3 -right-5 -bottom-4 rounded-full animate-float">
                  Availabel for Work
                </div>
              </div>
            </div>
          </div>

          <div className=" overflow-hidden  animate-fade-in animation-delay-700">
            <div className="flex justify-center">
              <span className="glass py-2 px-5 rounded-full">
                Technologies I work with
              </span>
            </div>
            <div className="group flex whitespace-nowrap py-8 animate-slider">
              {[...skills, ...skills].map((skill, i) => (
                <div key={i} className="shrink-0">
                  <span className=" px-5 text-text-muted hover:text-text">
                    {skill}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
