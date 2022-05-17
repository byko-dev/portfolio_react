import Navbar from "../components/navbar/Navbar";
import Home from "../sections/home/Home";
import AboutMe from "../sections/about/AboutMe";
import MySkills from "../sections/skills/MySkills";
import Footer from "../components/footer/Footer";
import Contact from "../sections/contact/Contact";
import Projects from "../sections/projects/Projects";

function MainPage() {
    const styleMain = {
        background: "#1f1f38"
    }
    return (
        <main style={styleMain}>
            <Home />
            <Navbar />
            <AboutMe />
            <MySkills />
            <Projects />
            <Contact />
            <Footer />
        </main>
    );
}

export default MainPage;
