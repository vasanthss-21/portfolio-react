import Header from "./components/Header";
import Home from "./components/Home";
import About from "./components/About";
import Education from "./components/Education";
import Experiences from "./components/Experiences";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Certificates from "./components/Certificates";
import Achievements from "./components/Achievements";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="bg-bg text-white font-poppins min-h-screen">
      <Header />
      <Home />
      <About />
      <Education />
      <Experiences />
      <Skills />
      <Projects />
      <Certificates />
      <Achievements />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
