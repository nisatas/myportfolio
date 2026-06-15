import Header from "./components/Header";
import Hero from "./components/Hero";
import Education from "./components/Education";
import Experience from "./components/Experience";
import Certificates from "./components/Certificates";
import Hackathons from "./components/Hackathons";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import SkillMap from "./components/SkillMap";
import Footer from "./components/Footer";
import allofImg from "./assets/allof.png";

export default function App() {
  return (
    <div className="relative min-h-screen">
      {/* Arka plan: allof.png tam görünür, sağa-sola hareket */}
      <div className="fixed inset-0 z-0 overflow-hidden bg-black">
        <img
          src={allofImg}
          alt=""
          className="h-full w-full object-cover object-center pointer-events-none"
        />
      </div>
      <div className="relative z-10">
        <Header />
        <Hero />
        <SkillMap />
        <Education />
        <Experience />
        <Certificates />
        <Hackathons />
        <Projects />
        <Contact />
        <Footer />
      </div>
    </div>
  );
}

