import React from "react";

const CaseStudyParagraph: React.FC = ({ children }) => {
  return (
    <p
      style={{
        maxWidth: "75ch",
        margin: "0 auto",
      }}
    >
      {children}
    </p>
  );
};

export default CaseStudyParagraph;
