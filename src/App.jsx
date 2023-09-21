import Navbar from "./components/navbar/Navbar";
import Home from "./components/home/Home";
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
      <div className="container mx-auto flex flex-col justify-center ">
        <About />
        <Skills />
        <div className="relative z-0">
          <Works />
          {/* <StarsCanvas /> */}
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default App;
