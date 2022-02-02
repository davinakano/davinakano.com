import styled from "styled-components";
import Layout from "../src/components/Layout";
import ProjectCard from "../src/components/ProjectCard";

//
// NOTE: This is a JS and not TS because of the .mdx imports (reminder to future Davi to research deeper into this)
//
// Featured projects
import { meta as HoshiiMeta } from "./work/hoshii-case-study.mdx";
import { meta as PatientsFirstMeta } from "./work/patients-first-case-study.mdx";
import { meta as StaplesMeta } from "./work/staples-heuristic-evaluation.mdx";

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
