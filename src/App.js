import Navbar from "./components/navbar/Navbar";
import Home from "./pages/home/Home";
import AboutMe from "./pages/about/AboutMe";
import MySkills from "./pages/skills/MySkills";
import Footer from "./components/footer/Footer";
import Contact from "./pages/contact/Contact";
import Projects from "./pages/projects/Projects";

function App() {
  return (
    <main>
        <Home />
        <Navbar />

        <AboutMe />
        <MySkills />
        <Contact />
        <Projects />
        <Footer />

    </main>
  );
}
//
export default App;
