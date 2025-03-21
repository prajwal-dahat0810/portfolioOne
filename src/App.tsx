import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Landing from "./pages/Landing";
import { Analytics } from "@vercel/analytics/react";
function App() {
  return (
    <div>
      <Analytics />
      <BrowserRouter>
        <Routes>
          <Route element={<Landing />} path="/" />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
