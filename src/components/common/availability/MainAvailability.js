import React, { useState } from "react";
import ListView from "./ListView";
import HeaderAvailability from "./HeaderAvailability";
import ProductView from "./ProductView";

const MainAvailability = (props) => {
  const {} = props;

  const [menu, setMenu] = useState(1);

  const handleSetMenu = (n) => {
    setMenu(n);
  };
  return (
    <>
      <div className="availability-main">
        <HeaderAvailability
          title="AVAILABLE RESIDENCES"
          handleSetMenu={(n) => handleSetMenu(n)}
        />
        {menu === 1 ? <ListView /> : <ProductView />}
      </div>
    </>
  );
};

export default MainAvailability;
