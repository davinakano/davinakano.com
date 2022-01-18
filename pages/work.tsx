import styled from "styled-components";
import Layout from "../src/components/Layout";
import ProjectCard from "../src/components/ProjectCard";

const Work = () => {
  return (
    <Layout>
      <Title>Work</Title>
      <CardContainer>
        <ProjectCard
          title="Hoshii"
          description="Lorem ipsum dor sit amet"
          thumbnailURL="https://upload.wikimedia.org/wikipedia/commons/7/7c/Aspect_ratio_16_9_example.jpg"
          projectURL="/"
        />
        <ProjectCard
          title="Hoshii"
          description="Lorem ipsum dor sit amet"
          thumbnailURL="https://upload.wikimedia.org/wikipedia/commons/7/7c/Aspect_ratio_16_9_example.jpg"
          projectURL="/"
        />
      </CardContainer>
    </Layout>
  );
};

const Title = styled.h1`
  text-align: center;
  padding-bottom: 48px;
`;

const CardContainer = styled.div`
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
`;

export default Work;
