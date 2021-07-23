import React, { useRef } from "react";
import { useGlobalContext } from "../context/context";

const CityBtns = ({ btn }) => {
  const { setCityName } = useGlobalContext();
  const cityBtn = useRef();

  const handleClick = () => {
    setCityName(cityBtn.current.outerText);
  };

  return (
    <div className="city-btn">
      <button ref={cityBtn} onClick={handleClick}>
        {btn}
      </button>
    </div>
  );
};

export default CityBtns;
