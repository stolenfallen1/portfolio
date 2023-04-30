import Hero from "./Views/Hero";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <div className="m-0 p-0 box-border">
        <Routes>
          <Route path="/" element={<Hero />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
