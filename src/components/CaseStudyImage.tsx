import Image from "next/image";
import styled from "styled-components";
import Zoom from "react-medium-image-zoom";
import "react-medium-image-zoom/dist/styles.css";

type CaseStudyImageProps = {
  alt: string;
  src: string;
  width: number;
  height: number;
};

const CaseStudyImage = ({ alt, src, width, height }: CaseStudyImageProps) => {
  return (
    <ImageWrap>
      <Zoom>
        <Image alt={alt} src={src} width={width} height={height} />
      </Zoom>
    </ImageWrap>
  );
};

const ImageWrap = styled.div`
  margin: 0 auto;
  max-width: 75ch;
  box-shadow: 0px 10px 15px -3px rgba(0, 0, 0, 0.1);
`;

export default CaseStudyImage;
