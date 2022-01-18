import Link from "next/link";
import React from "react";
import styled from "styled-components";

type ProjectCardProps = {
  title: string;
  description: string;
  thumbnailURL: string;
  projectURL: string;
};

const ProjectCard = ({
  title,
  description,
  thumbnailURL,
  projectURL,
}: ProjectCardProps) => {
  return (
    <Link href={projectURL} passHref>
      <Container>
        <img src={thumbnailURL} alt={`${title} - ${description}`} />
        <TextContainer>
          <h3>{title}</h3>
          <p>{description}</p>
        </TextContainer>
      </Container>
    </Link>
  );
};

const Container = styled.div`
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
  transition: 0.3s;
  border-radius: 5px;
  margin-bottom: 32px;
  cursor: pointer;

  img {
    max-width: 300px;
    height: 250px;
    object-fit: cover;
    border-radius: 5px 5px 0 0;
  }

  &:hover {
    box-shadow: 0 8px 16px 0 rgba(0, 0, 0, 0.2);
  }
`;

const TextContainer = styled.div`
  padding: 16px;
  width: 300px;
`;

export default ProjectCard;
