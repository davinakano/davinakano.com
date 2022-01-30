import React from "react";
import styled from "styled-components";

type BigStatsProps = {
  title: string;
  description: string;
  sourceURL?: string;
};

const BigStats = ({ title, description, sourceURL }: BigStatsProps) => {
  return (
    <Container>
      <h4>{title}</h4>
      <p>{description}</p>
      {sourceURL && <a href={sourceURL}>[Source]</a>}
    </Container>
  );
};

const Container = styled.div`
  text-align: center;
  margin-bottom: 32px;
  width: 224px;

  h4 {
    font-size: 4rem;
    font-weight: bold;
  }

  p {
    width: 100%;
  }
`;

export default BigStats;
