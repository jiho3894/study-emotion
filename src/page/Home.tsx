import styled from "@emotion/styled";
import { useEffect, useState } from "react";
import { FullPage, Slide } from "react-full-page";
import "../style/slide.css";

const Img = styled.img`
  width: 100%;
  height: 100%;
  filter: brightness(60%);
`;

const Container = styled.main`
  width: 100%;
  height: 100vh;
  background-color: #1c2632;
  position: relative;
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
  const txt = "Front-End developer Kim Jiho";
  const [Text, setText] = useState("");
  const [Count, setCount] = useState(0);
  useEffect(() => {
    const interval = setInterval(() => {
      setText(Text + txt[Count]);
      setCount(Count + 1);
    }, 100);
    if (Count === txt.length) {
      clearInterval(interval);
    }
    return () => clearInterval(interval);
  });
  return (
    <FullPage controls controlProps={{ className: "slide-navigation" }}>
      <Slide>
        <Container>
          <Img
            src="https://velog.velcdn.com/images/jiho3894/post/a85f26d1-92db-405c-a36a-8f024d2ffde3/image.png"
            alt=""
          />
          <Section>
            <span>{Text}</span>
          </Section>
        </Container>
      </Slide>
      <Slide>
        <Container></Container>
      </Slide>
    </FullPage>
  );
};

export default Home;
