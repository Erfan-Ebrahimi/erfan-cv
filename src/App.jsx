import Navbar from "./components/navbar/Navbar";
import Home from "./components/home/Home";
import About from "./components/about/About";
import Skills from "./components/skills/Skills";
import Footer from "./components/footer/Footer";
import Works from "./components/projects/Works";
const App = () => {
  return (
    <>
      <Navbar />
      <div className=" mx-auto flex flex-col">
        <Home />
        <div className="container mx-auto flex flex-col ">
          <About />
          <Skills />
          <Works />
        </div>
        <Footer />
      </div>

    </>
  );
}

export default App;
