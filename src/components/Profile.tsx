import styled from "@emotion/styled";
import { GetProfile } from "../api/profileQuery";

const Main = styled.main`
  width: 90%;
  height: 90%;
  background-color: cornflowerblue;
  section:first-child {
    height: 35%;
    background-color: green;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  section:last-child {
    height: 65%;
    background-color: yellow;
  }
`;

const Section = styled.section`
  width: 100%;
`;

const Article = styled.article`
  width: 90%;
  height: 90%;
  background-color: blue;
`;

const Img = styled.img``;

const Aside = styled.aside``;

const Profile = () => {
  const { data } = GetProfile();
  return (
    <Main>
      <Section>
        <Article>
          <Img></Img>
          <Aside></Aside>
        </Article>
      </Section>
      <Section></Section>
    </Main>
  );
};

export default Profile;
