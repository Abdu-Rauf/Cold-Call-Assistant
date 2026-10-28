import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Call } from "@/pages/Call";
import { Home } from "@/pages/Home";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/call" element={<Call />} />
      </Routes>
    </BrowserRouter>
  );
}
