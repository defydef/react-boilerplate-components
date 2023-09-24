import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./index.css";
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
  );
}

export default App;
