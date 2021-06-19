import React from "react";

const ProjectItem = (props) => {
  const { image, title, text } = props;

  return (
    <>
      <div className="section-project-tag-item">
        <div
          className="section-project-tag-item-img"
          style={{ backgroundImage: `url(${image})` }}
        ></div>
        <div className="section-project-tag-item-main">
          <p className="section-project-tag-item-title">{title}</p>
          <p className="section-project-tag-item-text">{text}</p>
          <p className="section-project-tag-item-button">Learn More</p>
        </div>
      </div>
    </>
  );
};

export default ProjectItem;
