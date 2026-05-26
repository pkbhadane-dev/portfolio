import { PhoneIcon, MailIcon } from "lucide-react";
import { useRef, useState } from "react";
import { FaGithub } from "react-icons/fa6";
import { LiaLinkedin } from "react-icons/lia";
import emailjs from "@emailjs/browser";

export const Contact = () => {
  const [isSending, setIsSending] = useState(false);
  const [statusMessage, setStatusMessage] = useState("");

  const form = useRef();

  if (statusMessage) {
    setTimeout(() => {
      setStatusMessage("");
    }, 5000);
  }

  const handleSubmitEmail = (e) => {
    e.preventDefault();
    setIsSending(true);

    const SERVICE_ID = import.meta.env.VITE_SERVICE_ID.trim();
    const TEMPLATE_ID = import.meta.env.VITE_TEMPLATE_ID.trim();
    const PUBLIC_KEY = import.meta.env.VITE_PUBLIC_KEY.trim();
    console.log("TEMPLATE_ID", TEMPLATE_ID);

    console.log("SERVICE_ID", SERVICE_ID);

    console.log("PUBLIC_KEY", PUBLIC_KEY);

    emailjs
      .sendForm(SERVICE_ID, TEMPLATE_ID, form.current, PUBLIC_KEY)
      .then(
        (result) => {
          setStatusMessage(
            "Message send successfully! I will get back you soon.",
          );
          form.current.reset();
        },
        (error) => {
          setStatusMessage(
            "Failed to send message. Please try again or email me directly.",
          );
          console.error("EmailJS Error:", error);
        },
      )
      .finally(() => {
        setIsSending(false);
      });
  };

  return (
    <>
      <div
        className="max-width m-auto overflow-hidden md:px-4 pb-20 pt-12"
        id="contact"
      >
        <div className="flex flex-col gap-3 items-center max-w-2xl m-auto ">
          <h4 className="text-primary text-lg">Let's Work Togather</h4>
          <p className="text-center px-1">
            I'm currently looking for new opportunities. My inbox is always
            open, whether for a potential job, project collaboration, or just to
            say hi!
          </p>
        </div>
        <div className=" pt-14 px-10 flex flex-col md:flex-row md:justify-evenly gap-12">
          <div className=" relative glass p-3 rounded-md py-5 glow border md:w-lg border-primary/60">
            {statusMessage && (
              <div className=" absolute bg-bg animate-fade-in inset-0 rounded-md flex justify-center items-center h-[50%] px-4 text-center ">
                {statusMessage}
              </div>
            )}
            <form
              ref={form}
              onSubmit={handleSubmitEmail}
              className="flex flex-col gap-5"
            >
              <div>
                <label htmlFor="name">Name</label>
                <input
                  name="from_name"
                  required
                  type="text"
                  placeholder="Your name"
                  id="name"
                  className="bg-surface p-2 w-full mt-2 rounded-md outline-none focus:border focus:border-primary text-sm"
                />
              </div>

              <div>
                <label htmlFor="email">Email</label>
                <input
                  name="from_email"
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
                  name="message"
                  rows={5}
                  required
                  placeholder="Message"
                  id="message"
                  className="bg-surface p-2 w-full mt-2 resize-none rounded-md outline-none focus:border focus:border-primary text-sm mr-3"
                />
              </div>

              <button
                type="submit"
                className="bg-primary text-slate-800 font-semibold py-2 rounded-md hover:bg-primary-hover hover:text-text transition-all duration-300 "
              >
                {isSending ? "Sending..." : "Send Message"}
              </button>
            </form>
          </div>

          <div className=" p-2 flex flex-col gap-5 justify-center items-center md:w-xs ">
            <div className="flex  items-center gap-2.5">
              <PhoneIcon />
              <div className=" flex flex-col justify-between items-center">
                <h3>Prashant Bhadane</h3>
                <span>+91784103338</span>
              </div>
            </div>
            <div className="flex items-center gap-2.5">
              <MailIcon />
              <span>pkbhadane545@gmail.com</span>
            </div>
            <div className="flex items-center gap-2.5">
              <LiaLinkedin size={32} />
              <a
                href="https://www.linkedin.com/in/prashant-bhadane111298"
                target="_blank"
              >
                pkbhadane@linkedin.com
              </a>
            </div>
            <div className="flex items-center gap-2.5">
              <FaGithub size={25} />
              <a href="https://github.com/pkbhadane-dev" target="_blank">
                pkbhadane-dev
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
