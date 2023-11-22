import "./App.css";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Recommendation from "./components/Recommendation";
import Items from "./components/Items";
function App() {
  return (
    <div className="app">
      <Header />
      <Hero />
      <Recommendation />
      <Items />
    </div>
  );
}

export default App;
