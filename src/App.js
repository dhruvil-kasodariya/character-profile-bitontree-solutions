import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Home from "./Pages/Home.tsx";
import Character from "./Pages/Character.tsx"

function App() {
  return (
    <div>
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/characters" element={<Home />}/>
        {/* <Route path={["/","/characters"]} element={<Home />}/> */}
        <Route path="/characters/view-character/:id" element={<Character />}/>
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
