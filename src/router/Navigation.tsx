import styled from "@emotion/styled";
import { Link } from "react-router-dom";

const Nav = styled.nav`
  width: 100%;
  height: 40px;
  background-color: green;
  display: flex;
  justify-content: space-around;
  align-items: center;
`;

const Navigation = () => {
  return (
    <Nav>
      <a href="">깃허브</a>
      <Link to="/">Home</Link>
      <Link to="/myInfo">myInfo</Link>
      <div>Projects</div>
      <div>Dark</div>
    </Nav>
  );
};

export default Navigation;
