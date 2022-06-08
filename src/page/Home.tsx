import styled from "@emotion/styled";
import { useEffect, useLayoutEffect, useState } from "react";
import Profile from "../components/Profile";
import BottomScroll from "../elements/BottomScroll";
import IntroText from "../elements/IntroText";

const Img = styled.img`
  width: 100%;
  height: 100vh;
  filter: brightness(60%);
`;

const Container = styled.main`
  width: 100%;
  height: 100vh;
  background-color: #1c2632;
  position: relative;
  overflow-y: hidden;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Section = styled.section`
  width: 100%;
  height: 100vh;
  position: absolute;
  top: 0;
  background-color: transparent;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Home = () => {
  useLayoutEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);
  return (
    <>
      <Container>
        <Img
          src="https://velog.velcdn.com/images/jiho3894/post/a85f26d1-92db-405c-a36a-8f024d2ffde3/image.png"
          alt=""
        />
        <Section>
          <IntroText />
          <BottomScroll />
        </Section>
      </Container>
      <Container>
        <Profile />
      </Container>
    </>
  );
};

export default Home;
