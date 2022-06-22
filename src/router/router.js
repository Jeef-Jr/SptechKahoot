import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "../pages/Home";
import Jogo from "../pages/Jogo";

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/jogar" element={<Jogo />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
