import {Routes, Route, HashRouter } from "react-router-dom";
import Login from "./pages/Login";
import Home from "./pages/Home";
import Estufa from "./pages/Estufa";


function App() {
  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/home" element={<Home />} />
        <Route path="/estufa/:id" element={<Estufa />} />
      </Routes>
    </HashRouter>
  );
}

export default App;