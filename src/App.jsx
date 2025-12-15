import { BrowserRouter, Routes, Route } from "react-router-dom";
import Investor from "./routes/Investor";
import Advisor from "./routes/Advisor";
import Compare from "./routes/Compare";
import Factsheet from "./routes/Factsheet";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Investor />} />
        <Route path="/advisor" element={<Advisor />} />
        <Route path="/compare" element={<Compare />} />
        <Route path="/factsheet/:code" element={<Factsheet />} />
      </Routes>
    </BrowserRouter>
  );
}

