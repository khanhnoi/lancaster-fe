import React from "react";
import cx from "classnames";

import MenuExpand from "./MenuExpand";

const MenuImages = ({
  invisible,
  listImagesFloors,
  indexId,
  handleSelectImages,
}) => {
  const openMenuClass = invisible ? "open" : "";
  const selectImage = (imgInfo) => {
    handleSelectImages(imgInfo);
  };
  return (
    <>
      <div className={cx("detail_floor_images", openMenuClass)}>
        <ul>
          {listImagesFloors &&
            listImagesFloors.map((imgOpt) => {
              if (typeof imgOpt.img === "object") {
                return (
                  <MenuExpand
                    key={imgOpt.id}
                    selectImage={selectImage}
                    infoMenu={imgOpt}
                    indexMenu={indexId}
                  />
                );
              }
              if (imgOpt.id === indexId) {
                return (
                  <li className="active" key={imgOpt.id.toString()}>
                    {imgOpt.name}
                  </li>
                );
              }
              return (
                <li
                  onClick={() => selectImage(imgOpt)}
                  key={imgOpt.id.toString()}
                >
                  {imgOpt.name}
                </li>
              );
            })}
        </ul>
      </div>
    </>
  );
};

export default MenuImages;
