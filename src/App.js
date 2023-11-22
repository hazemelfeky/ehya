import "./App.css";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Recommendation from "./components/Recommendation";
import Items from "./components/Items";
import Download from "./components/Download";
function App() {
  return (
    <div className="app">
      <Header />
      <Hero />
      <Recommendation />
      <Items />
      <Download />
    </div>
  );
}

export default App;
