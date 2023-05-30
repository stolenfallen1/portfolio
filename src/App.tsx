import { useEffect, useState } from "react";
import Hero from "./Views/Hero";
import Projects from "./Views/Projects";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { PuffLoader } from "react-spinners";

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      setLoading(false);
    }, 3000);

    return () => {
      clearTimeout(timeoutId);
    };
  }, []);

  return (
    <div className="App">
      {loading ? (
        <div className="fixed top-0 left-0 z-50 flex items-center justify-center w-full h-full bg-black">
          <PuffLoader color="#fff" size={250} />
        </div>
      ) : (
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Hero />} />
            <Route path="/Projects" element={<Projects />} />
          </Routes>
        </BrowserRouter>
      )}
    </div>
  );
}

export default App;
