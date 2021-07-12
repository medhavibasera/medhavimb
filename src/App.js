import "./App.css";
import Navbar from "./components/Navbar";
import LandingPage from "./components/LandingPage";
import About from "./components/About";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
function App() {
  return (
    <div className="App" id="mypage">
      <Navbar />
      <LandingPage />
      <About />
      <Projects />
      <Contact />
    </div>
  );
}

export default App;
