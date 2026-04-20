import {PhoneIcon, MailIcon} from "lucide-react"
import { FaGithub } from "react-icons/fa6";
import { LiaLinkedin } from "react-icons/lia";

export const Contact = () => {
  return (
    <>
      <div className="max-width m-auto overflow-hidden px-4 pb-20 pt-12 ">
        <div className="flex flex-col gap-3 items-center max-w-2xl m-auto ">
          <h4 className="text-primary text-lg">Let's Work Togather</h4>
          <p className="text-center">
            I'm currently looking for new opportunities. My inbox is always
            open, whether for a potential job, project collaboration, or just to
            say hi!
          </p>
        </div>
        <div className=" pt-14 px-10 flex flex-col md:flex-row md:justify-evenly gap-12">
          <div className="glass p-3 rounded-md py-5 glow border md:w-lg border-primary/60">
            <form className="flex flex-col gap-5">
              <div>
                <label htmlFor="name">Name</label>
                <input
                  type="text"
                  placeholder="Your name"
                  id="name"
                  className="bg-surface p-2 w-full mt-2 rounded-md outline-none focus:border focus:border-primary text-sm"
                />
              </div>

              <div>
                <label htmlFor="email">Email</label>
                <input
                  type="text"
                  placeholder="your@email.com"
                  required
                  id="email"
                  className="bg-surface p-2 w-full mt-2 rounded-md outline-none focus:border focus:border-primary text-sm "
                />
              </div>

              <div>
                <label htmlFor="message">Message</label>
                <textarea
                  rows={5}
                  required
                  placeholder="Message"
                  id="message"
                  className="bg-surface p-2 w-full mt-2 resize-none rounded-md outline-none focus:border focus:border-primary text-sm mr-3"
                />
              </div>

              <button type="submit" className="bg-primary text-slate-800 font-semibold py-2 rounded-md hover:bg-primary-hover hover:text-text transition-all duration-300 ">
                Submit
              </button>
            </form>
          </div>

          <div className=" p-2 flex flex-col gap-5 justify-center items-center md:w-xs ">
            <div className="flex items-center gap-2.5">
              <PhoneIcon/>
              <span>
                +91784103338
              </span>
            </div>
            <div className="flex items-center gap-2.5">
              <MailIcon/>
              <span>
                pkbhadane545@gmail.com
              </span>
            </div>
            <div className="flex items-center gap-2.5">
              <LiaLinkedin size={32}/>
              <span>
                pkbhadane@linkedin.com
              </span>
            </div>
            <div className="flex items-center gap-2.5">
              <FaGithub size={25}/>
              <span>
                pkbhadane-dev
              </span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
