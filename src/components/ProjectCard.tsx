import Link from "next/link";
import Image from "next/image";
import React from "react";
import styled from "styled-components";
import Button from "./Buttons";

type ProjectCardProps = {
  title: string;
  description: string;
  thumbnailURL: string;
  projectURL: string;
  className?: string;
  ctaText?: string;
  isDesktop?: boolean;
};

const ProjectCard = ({
  title,
  description,
  thumbnailURL,
  projectURL,
  className,
  ctaText,
  isDesktop,
}: ProjectCardProps) => {
  return (
    <Container className={className}>
      <TextContainer>
        <h3>{title}</h3>
        <p>{description}</p>
        <Link href={projectURL} passHref>
          <div>
            <MainCTA variant="fill" size="md">
              {ctaText || "Read case study"}
            </MainCTA>
          </div>
        </Link>
      </TextContainer>
      <ImageContainer>
        <Image
          src={thumbnailURL}
          alt={`${title} - ${description}`}
          width={isDesktop ? 835 : 496}
          height={isDesktop ? 704 : 1026}
        />
      </ImageContainer>
    </Container>
  );
};

const Container = styled.div`
  position: relative;
  width: 100%;
  border-radius: 48px;
  padding: 64px;
  transition: 0.3s;
  margin-bottom: 32px;
  overflow: hidden;

  h3 {
    font-size: 1.725rem;
  }

  p {
    line-height: 1.725;
  }

  &:hover {
    box-shadow: 0 8px 16px 0 rgba(0, 0, 0, 0.2);
  }

  @media (max-width: 768px) {
    padding: 32px;
  }
`;

const TextContainer = styled.div`
  max-width: 390px;

  p {
    max-width: 480px;
  }

  h3 {
    margin-bottom: 16px;
  }
`;

const ImageContainer = styled.div`
  position: absolute;
  top: 48px;
  right: 96px;
  width: 30%;

  @media (max-width: 768px) {
    position: relative;
    top: 16px;
    right: 0;
    width: 100%;
  }
`;

const MainCTA = styled(Button)`
  align-self: flex-start;
  margin-top: 28px;
  margin-bottom: 16px;
`;

export default ProjectCard;
