import { useState } from "react";
import { IoReorderThree } from "react-icons/io5";
import { Link } from "react-router";

export const Navbar = () => {
  const [showMenu, setShowMenu] = useState(false);
  const navLinks = [
    { path: "#hero", name: "Hero" },
    { path: "#skills", name: "Skills" },
    { path: "#about", name: "About" },
    { path: "#projects", name: "Projects" },
    { path: "#contact", name: "Contact" },
  ];
  return (
    <>
      <div className="fixed z-120 top-0 left-0 right-0  bg-transparent">
        <nav className="max-w-6xl mx-auto glass rounded-b-md flex justify-between p-1 items-center">
          <span className="text-primary pl-2 text-lg md:text-2xl font-bold">
            {"<PB/>"}
          </span>
          <div className="hidden py-1 px-2 rounded-full sm:flex items-center gap-1">
            {navLinks.map((link, index) => (
              <span
                className="px-4 py-2 rounded-full text-sm hover:text-text-muted hover:bg-bg"
                key={index}
              >
                <a href={link.path}>{link.name}</a>
              </span>
            ))}
          </div>
          <span onClick={() => setShowMenu(!showMenu)} className="sm:hidden">
            <IoReorderThree
              size={32}
              className={`${showMenu && "scale-95 transition-all duration-300"}`}
            />
          </span>
        </nav>

        {/*  mobile navbar */}
        {showMenu && (
          <div className="m-2 strong-glass animate-fade-in">
            <div
              className={`rounded-sm flex flex-col py-1 px-2 sm:hidden items-center gap-1`}
            >
              {navLinks.map((link, index) => (
                <span
                  className="px-4 py-2 rounded-full text-sm hover:text-text-muted hover:bg-bg"
                  key={index}
                >
                  <a href={link.path}>{link.name}</a>
                </span>
              ))}
            </div>
          </div>
        )}
      </div>
    </>
  );
};
