import Image from "next/image";
import styled from "styled-components";

type CaseStudyImageProps = {
  alt: string;
  src: string;
  width: number;
  height: number;
};

const CaseStudyImage = ({ alt, src, width, height }: CaseStudyImageProps) => {
  return (
    <ImageWrap>
      <Image alt={alt} src={src} width={width} height={height} />
    </ImageWrap>
  );
};

const ImageWrap = styled.span`
  & > span {
    box-shadow: 0px 10px 15px -3px rgba(0, 0, 0, 0.1);
  }
`;

export default CaseStudyImage;
