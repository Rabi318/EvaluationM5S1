import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { SnackProvider } from "./contexts/SnackContext";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import AddSnack from "./components/AddSnack";
import SnackGrid from "./components/SnackGrid";
import Analytics from "./pages/Analytics";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <SnackProvider>
        <BrowserRouter>
          <div className="app">
            <h1>SnackShelf</h1>
            <AddSnack />
            <SnackGrid />
            <Routes>
              <Route path="/analytics" element={<Analytics />} />
            </Routes>
          </div>
        </BrowserRouter>
      </SnackProvider>
    </>
  );
}

export default App;
