import styled from "styled-components";
import Layout from "../src/components/Layout";
import ProjectCard from "../src/components/ProjectCard";

//
// NOTE: This is a JS and not TS because of the .mdx imports (reminder to future Davi to research deeper into this)
//
// Featured projects
import { meta as HoshiiMeta } from "./work/hoshii-case-study.mdx";

const Work = () => {
  return (
    <Layout>
      <Title>Work</Title>
      <CardsContainer>
        <ProjectCard
          title={HoshiiMeta.title}
          description={HoshiiMeta.description}
          thumbnailURL={HoshiiMeta.thumbnailURL}
          projectURL={HoshiiMeta.projectURL}
        />
        {/* <ProjectCard
          title="Hoshii"
          description="Lorem ipsum dor sit amet"
          thumbnailURL="https://upload.wikimedia.org/wikipedia/commons/7/7c/Aspect_ratio_16_9_example.jpg"
          projectURL="/"
        /> */}
      </CardsContainer>
    </Layout>
  );
};

const Title = styled.h1`
  text-align: center;
  padding-bottom: 48px;
`;

const CardsContainer = styled.div`
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
`;

export default Work;
