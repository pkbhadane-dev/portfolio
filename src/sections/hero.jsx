export const Hero = () => {
  return (
    <>
      {/* set background gradient color */}
      <div className=" absolute inset-0 bg-linear-to-b from-slate-900 via-primary/20 to-slate-800" />

      {/* creating dots */}
      <div className=" absolute inset-0 pointer-events-none overflow-hidden">
        {[...Array(50)].map((_, i) => (
          <div
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
      <div className="m-1.5 my-17 flex justify-evenly items-center py-2.5">
        <div className="flex flex-col justify-between">
          <div className="text-primary">
            <span>Web-Developer</span>
          </div>
          <div>
            <p>
              <span>Hi,</span> i am prashant
            </p>
            <p>And i am Web-Developer</p>
          </div>
        </div>
        <div className=" mt-16 glow z-0 rounded-sm">
          {/* <div className=" absolute rounded-sm bg-primary/50 top-0 w-full h-full blur-3xl z-0"/>  */}
          <div className="w-2xs z-10">
            <img
              className="rounded-sm object-cover"
              src="matt murdock.jpg"
              alt=""
            />
          </div>
        </div>
      </div>
    </>
  );
};
