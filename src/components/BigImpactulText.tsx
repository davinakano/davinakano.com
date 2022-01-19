import React from "react";
import styled from "styled-components";

type BigImpactulTextProps = {
  text: string;
};

const BigImpactulText = ({ text }: BigImpactulTextProps) => {
  return <BigText>{text}</BigText>;
};

const BigText = styled.h3`
  font-size: 2rem;
  margin: 0 auto;
  max-width: 607px;
`;

export default BigImpactulText;
