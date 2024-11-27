import { useState } from "react";
import "./App.css";
import SidePanel from "./components/SidePanel";
import Slide from "./components/Slide";
import Tickets from "./components/Tickets";
import View from "./components/View";

function App() {
  const [selectedView, setSelectedView] = useState("Me");
  return (
    <div className="flex">
      <SidePanel />
      <View selectedView={selectedView} />
      <Slide />
    </div>
  );
}

export default App;
