import styled from "@emotion/styled";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "../page/Home";
import MyInfo from "../page/MyInfo";
import Navigation from "./Navigation";

const Container = styled.div`
  width: 90vw;
  height: 90vh;
  background-color: #333c46;
  border-radius: 15px;
  position: relative;
  overflow: hidden;
`;

const Router = () => {
  return (
    <BrowserRouter>
      <Container>
        <Navigation />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/myInfo" element={<MyInfo />} />
        </Routes>
      </Container>
    </BrowserRouter>
  );
};

export default Router;
