import Navbar from "./components/navbar/Navbar";
import Home from "./pages/home/Home";
import AboutMe from "./pages/about/AboutMe";

function App() {
  return (
    <div className="App">
        <Home />
        <Navbar />
        <AboutMe />
    </div>
  );
}

export default App;
