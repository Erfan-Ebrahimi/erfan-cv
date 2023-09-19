import Navbar from "./components/navbar/Navbar";
import Home from "./components/home/Home";
// import Projects from "./components/projects/Projects";
import About from "./components/about/About";
import Skills from "./components/skills/Skills";
import Footer from "./components/footer/Footer";
import Works from "./components/projects/Works";
import StarsCanvas from "./components/canvas/Stars";
const App = () => {
  return (
    <div>
      <Navbar />
        <Home />
      <div className="container mx-auto">
        <About />
        <Skills />
        {/* <Projects /> */}
        <div className="relative z-0">
          <StarsCanvas />
          <Works />

        </div>

      </div>
      <Footer />
    </div>
  );
}

export default App;
