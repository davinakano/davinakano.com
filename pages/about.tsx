import Image from "next/image";
import styled from "styled-components";
import Layout from "../src/components/Layout";

const About = () => {
  return (
    <Layout>
      <Title>About</Title>
      <MainContainer>
        <Image
          src="/assets/davi.jpg"
          width={500}
          height={452}
          alt="Davi Nakano on stage making a presentation"
        />
        <TextContainer>
          <Name>A developer turned into a designer</Name>
          <Name>
            🇧🇷 -{">"} 🇬🇧 -{">"} 🇯🇵 -{">"} 🇨🇦
          </Name>
          <p>
            I am a UX Designer with a background in Computer Science and a
            decade of experience as a Software Engineer. <br />
            <br /> Being a Software Engineer really let me dig deeper into the
            “how” things worked in the tech world - something that I was always
            passionated as a child. During my interactions with UX Designers
            throughout my career,{" "}
            <b>
              I became hooked into the conversations around the product
              conception and how to translate people’s problems into feasible,
              meaningful and delightful experiences.
            </b>{" "}
            <br /> <br />I have worked for companies in 4 different countries,
            ranging from multinational to startups, from eLearning solutions to
            health care tech. In all those, I’ve helped to launch products used
            worldwide and I’ve learned how to adapt quickly into wildly
            different cultures, technologies and problem statements. <br />
            <br />
            <b>
              Ultimately, my goal is to serve as a bridge between people’s
              problems and solutions by amplifying their voice and translating
              it into digital experiences.
            </b>
          </p>
        </TextContainer>
      </MainContainer>
    </Layout>
  );
};

const Title = styled.h1`
  text-align: center;
  padding-bottom: 48px;
`;

const Name = styled.h2`
  margin-bottom: 32px;
`;

const MainContainer = styled.div`
  @media (min-width: 600px) {
    display: flex;
    align-items: flex-start;
  }
`;

const TextContainer = styled.div`
  @media (min-width: 600px) {
    width: 50%;
    margin-left: 32px;
  }

  width: 100%;
`;

export default About;
