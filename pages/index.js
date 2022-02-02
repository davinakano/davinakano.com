import Head from "next/head";
import Image from "next/image";
import styled, { keyframes } from "styled-components";
import Button from "../src/components/Buttons";
import Header from "../src/components/Header";
import Footer from "../src/components/Footer";
import MaxWidthWrapper from "../src/components/MaxWidthWrapper";
import COLORS from "../src/constants/colors";
import ProjectCard from "../src/components/ProjectCard";

//
// NOTE: This is a JS and not TS because of the .mdx imports (reminder to future Davi to research deeper into this)
//
// Featured projects
import { meta as HoshiiMeta } from "./work/hoshii-case-study.mdx";
import { meta as PatientsFirstMeta } from "./work/patients-first-case-study.mdx";
import { meta as StaplesMeta } from "./work/staples-heuristic-evaluation.mdx";

const Home = () => {
  return (
    <Container>
      <Head>
        <title>Davi Nakano - UX Designer</title>
        <meta name="description" content="Davi Nakano's UX Portfolio" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Spacer />

      <MaxWidthWrapper>
        <Header />
      </MaxWidthWrapper>

      <CloudsContainer />

      <MaxWidthWrapper>
        <HeroImageContainer>
          <Image
            src="/assets/clay-illustration.png"
            width="560px"
            height="603px"
            alt="A cloud head with HTML, CSS, JS, React, Figma and InVision logos coming out of it."
          />
        </HeroImageContainer>
        <HeroTextContainer>
          <h1>Hello! I am Davi.</h1>
          <p>
            A curiosity-driven, serial-listener and question-asker{" "}
            <b>UX Designer</b>, aiming to be the people channel for creating{" "}
            <b>delightful experiences</b>.
          </p>
          <HeroCTA variant="fill" size="md">
            <a
              href="https://drive.google.com/file/d/1JtzLvKF4KUHCRrgKWSWQTmBtog0vU0xM/view?usp=sharing"
              rel="noreferrer"
              target="_blank"
            >
              View my CV / Resume
            </a>
          </HeroCTA>
        </HeroTextContainer>
      </MaxWidthWrapper>

      <MaxWidthWrapper>
        <SectionContainer>
          <h1>Featured Work</h1>
          <CardsContainer>
            <ProjectCard
              title={HoshiiMeta.title}
              description={HoshiiMeta.description}
              thumbnailURL={HoshiiMeta.thumbnailURL}
              projectURL={HoshiiMeta.projectURL}
              className="hoshii-card"
            />
            <ProjectCard
              title={PatientsFirstMeta.title}
              description={PatientsFirstMeta.description}
              thumbnailURL={PatientsFirstMeta.thumbnailURL}
              projectURL={PatientsFirstMeta.projectURL}
              className="patients-first-card"
            />
            <ProjectCard
              title={StaplesMeta.title}
              description={StaplesMeta.description}
              thumbnailURL={StaplesMeta.thumbnailURL}
              projectURL={StaplesMeta.projectURL}
              isDesktop
              className="staples-card"
              ctaText="View report"
            />
          </CardsContainer>
        </SectionContainer>
      </MaxWidthWrapper>

      <MaxWidthWrapper>
        <Footer />
      </MaxWidthWrapper>
    </Container>
  );
};

const Spacer = styled.div`
  min-height: 48px;
`;

const Container = styled.div`
  position: relative;
  background: ${COLORS.mainLinearGradient};
  height: 760px;
  color: ${COLORS.white};

  @media (max-width: 600px) {
    height: 660px;
  }
`;

const floatAnimation = keyframes`
  0% {
    transform: translateY(0);
    }
  100% {
    transform: translateY(10px);
  }
`;

const HeroImageContainer = styled.div`
  position: absolute;
  right: -24px;
  animation: ${floatAnimation} 1.75s infinite;
  animation-direction: alternate;

  @media (max-width: 1150px) {
    display: flex;
    width: 50%;
    height: 100%;
    align-items: center;
    right: 0px;
  }

  @media (max-width: 600px) {
    display: none;
  }
`;

const HeroTextContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  height: 603px;
  width: 45%;

  h1 {
    font-size: ${48 / 16}rem;
    position: relative;
    margin-bottom: 1rem;
  }

  p {
    margin-bottom: 2rem;
    line-height: 1.725rem;
  }

  @media (max-width: 600px) {
    width: 100%;
    height: 400px;
  }
`;

const CloudsContainer = styled.div`
  position: absolute;
  height: 213px;
  bottom: -115px;
  left: 0;
  right: 0;
  background: url("/assets/clouds.svg") bottom center;
`;

const HeroCTA = styled(Button)`
  align-self: flex-start;

  a {
    color: inherit;
    text-decoration: none;
  }
`;

const SectionContainer = styled.section`
  margin-top: 56px;
  color: black;

  @media (max-width: 600px) {
    margin-top: 148px;
  }

  h1 {
    margin-bottom: 48px;
    text-align: center;
  }
`;

const CardsContainer = styled.div`
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
`;

export default Home;
