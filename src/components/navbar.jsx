import { useState } from "react";
import { Link } from "react-router";

export const Navbar = () => {
  const [showMenu, setShowMenu] = useState(false);
  const navLinks = [
    { path: "#skills", name: "Skills" },
    { path: "#about", name: "About" },
    { path: "/projects", name: "Projects" },
    { path: "/contact", name: "Contact" },
  ];
  return (
    <>
      <div className="fixed z-120 top-0 left-0 right-0 mx-1.5 bg-transparent py-4">
        <nav className="max-w-6xl mx-auto flex justify-between items-center">
          <span className="text-primary font-bold hover:text-text-muted">
            LOGO
          </span>
          <div className=" glass hidden py-1 px-2 rounded-full sm:flex items-center gap-1">
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
            ICON
          </span>
        </nav>

        {/*  mobile navbar */}
       {showMenu && <div className="m-2 strong-glass animate-fade-in">
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
        </div>}
      </div>
    </>
  );
};
