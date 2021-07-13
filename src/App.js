import Navbar from "./components/Navbar";
import LandingPage from "./components/LandingPage";
import About from "./components/About";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
function App() {
  return (
    <div className="App" style={{ width: "100vw" }}>
      <Navbar />
      <LandingPage />
      <About />
      <Projects />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
