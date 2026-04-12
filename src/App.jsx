import { Navbar } from "./components/navbar";
import { About } from "./sections/about";
import { Contact } from "./sections/contact";
import { Hero } from "./sections/hero";
import { Projects } from "./sections/projects";
import { Skills } from "./sections/skills";

function App() {
  return (
    <div className="min-h-screen overflow-x-hidden">
      <header>
        <Navbar/>
      </header>
      <main>
         <section>
          <Hero />
        </section>
       {/* <section>
          <About />
        </section>
        <section>
          <Skills />
        </section>
        <section>
          <Projects />
        </section>
        <section>
          <Contact />
        </section> */}
      </main>
    </div>
  );
}

export default App;
