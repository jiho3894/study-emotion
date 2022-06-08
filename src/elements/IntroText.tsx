import styled from "@emotion/styled";
import { useEffect, useState } from "react";

const Span = styled.span`
  font-size: 60px;
  font-weight: 600;
`;

const IntroText = () => {
  const txt = "Front-end developer Kim Jiho";
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
  return <Span>{Text}</Span>;
};

export default IntroText;
