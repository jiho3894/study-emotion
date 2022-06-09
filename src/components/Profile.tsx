import styled from "@emotion/styled";
import { GetProfile } from "../api/profileQuery";

const Main = styled.main`
  width: 90%;
  height: 90%;
  background-color: cornflowerblue;
  section:first-of-type {
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
  console.log(data);
  return (
    <Main>
      <Section>
        <Article>
          <Img width={40} height={80}></Img>
          <Aside></Aside>
        </Article>
      </Section>
      <Section>
        <img src="https://github-readme-stats.vercel.app/api/top-langs/?username=jiho3894&layout=compact&show_icons=true&theme=material-           palenight&hide_border=true&bg_color=20232a&icon_color=E3E3E3A8&text_color=fff&title_color=918FE0" />
      </Section>
    </Main>
  );
};

export default Profile;
