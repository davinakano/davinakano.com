import React from "react"

const MaxWidthWrapper: React.FC = ({ children }) => {
  return (
    <div style={{
      position: "relative",
      width: "100%",
      maxWidth: "1100px",
      marginLeft: "auto",
      marginRight: "auto",
      paddingLeft: "32px",
      paddingRight: "32px",
    }}>
      {children}
    </div>
  )
}

export default MaxWidthWrapper