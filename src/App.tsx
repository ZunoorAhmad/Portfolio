import { Navbar } from "./components/Navbar";
import { Footer } from "./components/Footer";
import { CursorGlow } from "./components/CursorGlow";
import { ScrollProgress } from "./components/ScrollProgress";
import { BackgroundBlobs } from "./components/BackgroundBlobs";

import { Hero } from "./sections/Hero";
import { About } from "./sections/About";
import { Skills } from "./sections/Skills";
import { Projects } from "./sections/Projects";
import { Experience } from "./sections/Experience";
import { Services } from "./sections/Services";
import { Blog } from "./sections/Blog";
import { Contact } from "./sections/Contact";

function App() {
  return (
    <div className="relative min-h-screen">
      <CursorGlow />
      <ScrollProgress />
      <BackgroundBlobs />
      <Navbar />
      
      <main className="relative z-10 pt-20">
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Experience />
        <Services />
        <Blog />
        <Contact />
      </main>

      <Footer />
    </div>
  );
}

export default App;
