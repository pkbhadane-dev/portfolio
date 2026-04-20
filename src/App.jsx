import { Navbar } from "./components/navbar";
import { About } from "./sections/about";
import { Contact } from "./sections/contact";
import { Hero } from "./sections/hero";
import { Projects } from "./sections/projects";
import { motion } from "framer-motion";
import { Skills } from "./sections/skills";

function App() {
  return (
    <div className="min-h-screen overflow-x-hidden">
      <header>
        <Navbar />
      </header>
      <main>
        <section>
          <Hero />
        </section>
        <section>
          <motion.div
            initial={{ opacity: 0, y: -40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9 }}
          >
            <About />
          </motion.div>
        </section>
        <section>
          <Skills />
        </section>
        <section>
          <motion.div
            initial={{ opacity: 0, y: -80 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9 }}
          >
            <Projects />
          </motion.div>
        </section>
        <section>
          <motion.div
          initial={{opacity:0, y: -80}}
          whileInView={{opacity:1, y:0}}
          transition={{duration:0.9}}
          >
            <Contact />
          </motion.div>
        </section>
      </main>
    </div>
  );
}

export default App;
