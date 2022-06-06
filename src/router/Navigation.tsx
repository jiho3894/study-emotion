import styled from "@emotion/styled";
import { Link } from "react-router-dom";
import { useRecoilState } from "recoil";
import { themeState } from "../recoil/Darkmode";

const Nav = styled.nav`
  width: 100%;
  height: 4rem;
  background-color: transparent;
  display: flex;
  position: fixed;
  left: 0;
  top: 0;
  z-index: 9999;
  justify-content: center;
  gap: 10px;
  align-items: center;
`;

const Navigation = () => {
  const [theme, DarkMode] = useRecoilState(themeState);
  const onDarkMode = () => {
    DarkMode((prev: boolean) => !prev);
  };
  return (
    <Nav>
      <Link to="/">Home</Link>
      <span>projects</span>
      <span onClick={onDarkMode}>{theme ? "Dark" : "Ligth"}</span>
    </Nav>
  );
};

export default Navigation;
