import { useState } from "react";
import "./App.css";
import SidePanel from "./components/SidePanel";
import Slide from "./components/Slide";
import View from "./components/View";

function App() {
  const [selectedView] = useState("Me");
  const [showSlide, setShowSlide] = useState(false);
  return (
    <div className="flex">
      <SidePanel />
      <View selectedView={selectedView} setShowSlide={setShowSlide} />
      <Slide showSlide={showSlide} setShowSlide={setShowSlide} />
    </div>
  );
}

export default App;
