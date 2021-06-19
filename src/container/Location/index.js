import React, { useState } from "react";
import ReactFullpage from "@fullpage/react-fullpage";
import { TweenMax, TimelineMax } from "gsap";
import bgLocation from "../../assets/images/pexels-aleksejs-bergmanis-kn.png";
import SectionLocation from "./SectionLocation";
import MapLocation from "./MapLocation";
import img1 from "../../assets/images/pexels-ketut-subiyanto-kn.png";
import img2 from "../../assets/images/pexels-dominika-gregušová-kn.png";
import ScrollToTop from "../../components/common/ScrollToTop";
import FirstContent from "../../components/common/FirstContent";

const Location = () => {
  const [markets, setMarket] = useState([
    { lat: 16.07821726834676, lng: 108.14557075017608, color: "#D9001E" },
    { lat: 16.076993878584044, lng: 108.14555765396025, color: "#D9001E" },
    { lat: 16.076072948917414, lng: 108.14557075017608, color: "#D9001E" },
    { lat: 16.07458840653348, lng: 108.14557075017608, color: "#D9001E" },
    { lat: 16.077804901022006, lng: 108.14621448033965, color: "#BB08F1" },
    { lat: 16.076856452928904, lng: 108.14685821050323, color: "#BB08F1" },
    { lat: 16.07586676313805, lng: 108.14745902532256, color: "#BB08F1" },
    { lat: 16.075083255226374, lng: 108.14818858617461, color: "#BB08F1" },
    { lat: 16.076155423169293, lng: 108.14844607824004, color: "#BB08F1" },
    { lat: 16.077021400748382, lng: 108.14836024755157, color: "#08F10F" },
    { lat: 16.077722427454404, lng: 108.14836024755157, color: "#08F10F" },
    { lat: 16.07821726834676, lng: 108.14827441686309, color: "#08F10F" },
    { lat: 16.07834097837738, lng: 108.15222262853301, color: "#08F10F" },
    { lat: 16.0780110847913, lng: 108.15123557561553, color: "#009FD9" },
    { lat: 16.076938926855753, lng: 108.15050601476348, color: "#009FD9" },
    { lat: 16.075619339920546, lng: 108.15024852269805, color: "#009FD9" },
    { lat: 16.07458840653348, lng: 108.15084933751739, color: "#009FD9" },
    { lat: 16.074382219214634, lng: 108.15179347509063, color: "#009FD9" },
    { lat: 16.074753356234627, lng: 108.15316676610625, color: "#009FD9" },
    { lat: 16.07586676313805, lng: 108.15441131108916, color: "#F1D208" },
    { lat: 16.076773978967843, lng: 108.1541109036795, color: "#F1D208" },
    { lat: 16.077804901022006, lng: 108.15342425817168, color: "#F1D208" },
    { lat: 16.078505924965107, lng: 108.15235137456573, color: "#F1D208" },
    { lat: 16.078588398207668, lng: 108.15192222112334, color: "#F1D208" },
    { lat: 16.078629634816085, lng: 108.15638541692412, color: "#F1D208" },
    { lat: 16.077763664242486, lng: 108.15651416295684, color: "#F1D208" },
    { lat: 16.076691504972555, lng: 108.15642833226836, color: "#F1D208" },
    { lat: 16.07520696720718, lng: 108.15642833226836, color: "#F1D208" },
    { lat: 16.07380489358439, lng: 108.15655707830108, color: "#F1D208" },
    { lat: 16.081392468093924, lng: 108.15050601476348, color: "#F1D208" },
    { lat: 16.08110381566745, lng: 108.15119266027129, color: "#F1D208" },
    { lat: 16.08044403711844, lng: 108.1518793057791, color: "#F1D208" },
    { lat: 16.07999043809556, lng: 108.15256595128692, color: "#F1D208" },
  ]);
  const [isLast, setIsLast] = useState(false);
  const [isFirst, setIsFirst] = useState(true);
  const onLeaveSection = (origin, destination, direction) => {
    setIsLast(origin && origin.isLast);
    setIsFirst(destination && destination.isFirst);

    if (destination && destination.isFirst) {
      // const sectionHeaderElm = document.querySelector(
      //   ".location-header-content-title"
      // );
    }

    const sectionDestination = destination && destination.item;
    const card = sectionDestination.querySelector(".location-card");
    TweenMax.fromTo(
      card,
      1,
      {
        y: 500,
        opacity: 0,
        delay: 0.3,
      },
      {
        y: 0,
        opacity: 1,
        delay: 0.3,
      }
    );
  };
  // const handleMoveToTop = fullpageApi => {
  // 	fullpageApi.moveTo(1, 0);
  // };
  const mockDataLocation = [
    {
      bg: img1,
      title: "coffee",
      text: `The charming streets of Boer.am Hill, Cobble Hill, Fort
                                                        one- of - a - kind restaurants, bars.and boutiques that
                                                        capture the borough's famously creative spirit Add to
                                                        this an abundance of leafy parks and Brooklyn's
                                                        extraordinary riverfront and you've found yourself at
                                                        home in one of New York Citys most exciting and livable 
                                                        neighborhoods.`,
    },
    {
      bg: img2,
      title: "church",
      text: `The charming streets of Boer.am Hill, Cobble Hill, Fort
                                                        one- of - a - kind restaurants, bars.and boutiques that
                                                        capture the borough's famously creative spirit Add to
                                                        this an abundance of leafy parks and Brooklyn's
                                                        extraordinary riverfront and you've found yourself at
                                                        home in one of New York Citys most exciting and livable 
                                                        neighborhoods.`,
    },
    {
      bg: img1,
      title: "shopping mall",
      text: `The charming streets of Boer.am Hill, Cobble Hill, Fort
                                                        one- of - a - kind restaurants, bars.and boutiques that
                                                        capture the borough's famously creative spirit Add to
                                                        this an abundance of leafy parks and Brooklyn's
                                                        extraordinary riverfront and you've found yourself at
                                                        home in one of New York Citys most exciting and livable 
                                                        neighborhoods.`,
    },
  ];
  return (
    <>
      <ReactFullpage
        //fullpage options
        scrollingSpeed={700} /* Options here */
        autoScrolling={true}
        scrollBar={true}
        menu={true}
        arrowNavigation={true}
        navigation={true}
        navigationTooltips={[]}
        onLeave={onLeaveSection}
        render={({ state, fullpageApi }) => {
          return (
            <>
              <ReactFullpage.Wrapper>
                <FirstContent
                  bg={bgLocation}
                  title=" Conveniently nestled at the edge of Downtown Brooklyn and brownstone Brooklyn KN"
                  type="text"
                />
                {mockDataLocation &&
                  mockDataLocation.map((location, index) => (
                    <SectionLocation
                      key={index.toString()}
                      bg={location.bg}
                      title={location.title}
                      text={location.text}
                      right={index % 2 !== 1}
                    />
                  ))}

                <MapLocation markets={markets} isLast={isLast} />
                {isFirst ? (
                  <ScrollToTop display={false} fullpageApi={fullpageApi} />
                ) : (
                  <ScrollToTop display={true} fullpageApi={fullpageApi} />
                )}
              </ReactFullpage.Wrapper>
            </>
          );
        }}
      />
    </>
  );
};

export default Location;
