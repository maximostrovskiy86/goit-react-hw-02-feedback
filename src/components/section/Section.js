import React from "react";

const Section = ({ children, title }) => {
  return (
    <div className="section">
      <h2>{title.toUpperCase()}</h2>
      {children}
    </div>
  );
};

export default Section;
