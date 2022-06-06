import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "../page/Home";
import Projects from "../page/Projects";
import Navigation from "./Navigation";

const Router = () => {
  return (
    <BrowserRouter>
      <Navigation />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/projects" element={<Projects />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
