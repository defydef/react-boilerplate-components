import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import "./index.css";
import "./App.css";
import ImageCarousell from "./pages/ImageCarousell";
import HomePage from "./pages/HomePage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<HomePage />} />
        <Route path="image-carousell" element={<ImageCarousell />} />
      </Routes>
    </BrowserRouter>
    // <div className="app">
    //   <ImageCarousell />
    // </div>
  );
}

export default App;
