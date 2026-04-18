export const Projects = () => {
  return (
    <>
      <div className="max-width m-auto px-4 pt-30 pb-30 overflow-hidden">
        <h3 className="text-primary">PROJECTS</h3>
       <div className=" space-y-20">
         <div className="flex relative justify-end px-15">
          <div className=" w-96 h-auto glow rounded-md cursor-pointer hover:scale-105 transition-all duration-300">
            <img className="w-96 rounded-md" src="portfolio.jpeg" alt="" />
          </div>
          <div>
            <div className=" absolute glass inset-10 w-96 rounded-md left-80 text-text-muted space-y-4 p-2 hover:scale-110 transition-all duration-400">
              <h4 className="text-font font-semibold">VidTube</h4>
              <p className="text-font font-medium text-sm">
                A video hosting platform where you can like video, subscribe
                channel, and see your channel stats
              </p>
            </div>
          </div>
        </div>
        <div className="flex relative px-15">
          <div className=" w-96 h-auto glow rounded-md hover:scale-105 cursor-pointer transition-all duration-300">
            <img className="w-96 rounded-md" src="portfolio.jpeg" alt="" />
          </div>
          <div>
            <div className=" absolute glass inset-10 w-96 rounded-md left-104 text-text-muted space-y-4 p-2 hover:scale-110 transition-all duration-400">
              <h4 className="text-font font-semibold">VidTube</h4>
              <p className="text-font font-medium text-sm">
                A video hosting platform where you can like video, subscribe
                channel, and see your channel stats
              </p>
            </div>
          </div>
        </div>
       </div>
      </div>
    </>
  );
};
