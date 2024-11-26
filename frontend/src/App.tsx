import { useState } from "react";
import "./App.css";
import SidePanel from "./components/SidePanel";
import Slide from "./components/Slide";
import Tickets from "./components/Tickets";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <SidePanel />
      <Tickets />
      <Slide />
      <h1 className="text-xl font-bold  underline decoration-sky-500	 ">
        Hello world!
      </h1>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  );
}

export default App;
