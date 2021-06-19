import React, { useState } from "react";
import cx from "classnames";

const MenuExpand = ({ infoMenu, selectImage, indexMenu }) => {
  const [expand, setExpand] = useState(false);
  const cxMenu = expand ? "expand" : "";
  const handleMenuExpand = () => setExpand(!expand);
  const handleSelectMenu = (imgInfo) => {
    selectImage(imgInfo);
  };
  return (
    <>
      <div
        onClick={handleMenuExpand}
        className={cx("detail_floor_images--expand", cxMenu)}
      >
        {infoMenu.name}
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="15.113"
          height="8.501"
          viewBox="0 0 15.113 8.501"
        >
          <g>
            <path
              d="M8.221.28a.927.927 0 0 0-1.328 0L.28 6.892a.927.927 0 0 0 0 1.328l6.612 6.612a.945.945 0 0 0 1.608-.664V.944A.908.908 0 0 0 8.221.28z"
              transform="rotate(-90 4.25 4.25)"
            />
          </g>
        </svg>
      </div>
      <ul className={cx("list_menu_expand", cxMenu)}>
        {infoMenu.img.length !== 0 &&
          infoMenu.img.map((item, indx) => (
            <li
              className={`${indexMenu === item.id ? "active" : ""}`}
              key={indx.toString()}
              onClick={() => {
                handleSelectMenu(item);
              }}
            >
              {item.name}
            </li>
          ))}
      </ul>
    </>
  );
};

export default MenuExpand;
