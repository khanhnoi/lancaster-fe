import React, { useState } from "react";
import { Pannellum } from "pannellum-react";
import data from "./data.json";
import "./../../assets/styles/explore/index.scss";
import Modal from "./Modal";

const TYPE_SENCE = "sence";
const TYPE_INFO = "info";

function parseHTML(html) {
  var t = document.createElement("template");
  t.innerHTML = html;
  return t.content.cloneNode(true);
}

function Explore(props) {
  const [item, setImage] = useState(data);
  const [openModal, setOpenModal] = useState(false);
  const [dataModal, setDataModal] = useState({});

  const renderHotspot = (hotSpotDiv, args) => {
    hotSpotDiv.classList.add("custom-tooltip");
    if (args.type === TYPE_INFO) {
      hotSpotDiv.classList.add("custom-tooltip-info");
    }
    var span = document.createElement("span");
    var toolTip = parseHTML(
      `<div class="pannellumn-tootip"><p>${args.title}</p></div>`
    );
    hotSpotDiv.appendChild(span);
    hotSpotDiv.appendChild(toolTip);
  };

  const actionModal = (status) => {
    setOpenModal(status);
  };

  const actionClickHotSpot = (args) => {
    let { hotspot } = args;

    if (hotspot.type == TYPE_INFO) {
      actionModal(true);
      setDataModal({ title: hotspot.title, content: hotspot.content });
    }

    if (hotspot.type == TYPE_SENCE) {
      setImage(hotspot);
    }
  };

  const onBackAction = () => {
    props.history.push("/overview");
  };

  return (
    <div className="explore">
      <div className="tool-box">
        <button className="btn btn-back" onClick={onBackAction}>
          <span className="lnr lnr-arrow-left mr-2"></span>
          <span>Trở về</span>
        </button>
      </div>
      <Modal open={openModal} data={dataModal} action={actionModal} />
      <Pannellum
        width="100%"
        height="100vh"
        image={item.image}
        pitch={item.pitch}
        yaw={item.yaw}
        hfov={item.hfov}
        minHfov={100}
        autoLoad
        showZoomCtrl={false}
        onLoad={() => {
          console.log("panorama loaded");
        }}
      >
        {item.hotSpots &&
          item.hotSpots.map((hotspot, index) => {
            return (
              <Pannellum.Hotspot
                type="custom"
                key={index}
                pitch={hotspot.pitch}
                yaw={hotspot.yaw}
                tooltip={renderHotspot}
                tooltipArg={{
                  title: hotspot.title,
                  content: hotspot.content,
                  type: hotspot.type,
                }}
                handleClick={(evt, args) => actionClickHotSpot(args)}
                handleClickArg={{ hotspot: hotspot }}
              />
            );
          })}
      </Pannellum>
    </div>
  );
}

export default Explore;
