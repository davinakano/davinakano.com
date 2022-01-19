import React, { CSSProperties } from "react";

type FlexContainerProps = {
  style: CSSProperties;
};

const FlexContainer: React.FC<FlexContainerProps> = ({ children, style }) => {
  return (
    <div
      style={{
        display: "flex",
        ...style,
      }}
    >
      {children}
    </div>
  );
};

export default FlexContainer;
