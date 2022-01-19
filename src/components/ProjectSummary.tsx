import Link from "next/link";
import Image from "next/image";
import React from "react";
import styled from "styled-components";

type ProjectSummaryProps = {
  role: string;
  process: string;
  duration: string;
  tools: string;
};

const ProjectSummary = ({
  role,
  process,
  duration,
  tools,
}: ProjectSummaryProps) => {
  const roles = role.split(", ");
  const processes = process.split(", ");
  const toolset = tools.split(", ");

  return (
    <Container>
      <div>
        <h4>Role</h4>
        {roles.map((r, index) => (
          <SummaryParagraph key={index}>{r}</SummaryParagraph>
        ))}
      </div>
      <div>
        <h4>Process</h4>
        {processes.map((p, index) => (
          <SummaryParagraph key={index}>{p}</SummaryParagraph>
        ))}
      </div>
      <div>
        <h4>Duration</h4>
        <SummaryParagraph>{duration}</SummaryParagraph>
      </div>
      <div>
        <h4>Tools</h4>
        {toolset.map((t, index) => (
          <SummaryParagraph key={index}>{t}</SummaryParagraph>
        ))}
      </div>
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
  margin-bottom: 32px;

  h4 {
    margin-bottom: 16px;
  }
`;

const SummaryParagraph = styled.p`
  width: 100%;
  margin-bottom: 4px;
`;

export default ProjectSummary;
