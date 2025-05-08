import "./App.css";
import { Header } from "./header";
import { Hero } from "./hero";
import { Sidebar } from "./sideBar";

function App() {
  return (
    <div>
      <Header />
      <div className="container">
        <Sidebar />
        <Hero />
      </div>
    </div>
  );
}

export default App;
