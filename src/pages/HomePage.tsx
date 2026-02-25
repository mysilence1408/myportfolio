import { Navbar } from "../components/Navbar";
import { Hero } from "../components/Hero";
import { About } from "../components/About";
import { Projects } from "../components/Projects";
import { Image } from "../components/Image";
import { Contact } from "../components/Contact";
import { Footer } from "../components/Footer";

const HomePage = () => {
  return (
    <>
      <header>
        <Navbar />
      </header>
      <main>
        <Hero />
        <section id="about">
          <About />
        </section>
        <Image />
        <section id="projects">
          <Projects />
        </section>
        <section id="contact">
          <Contact />
        </section>
      </main>
      <footer>
        <Footer />
      </footer>
    </>
  );
};

export default HomePage;
