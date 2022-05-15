import Navbar from "./components/navbar/Navbar";
import Home from "./pages/home/Home";
import AboutMe from "./pages/about/AboutMe";
import MySkills from "./pages/skills/MySkills";

function App() {
  return (
    <main className="App">
        <Home />
        <Navbar />
        <AboutMe />
        <MySkills />
    </main>
  );
}
//
export default App;
