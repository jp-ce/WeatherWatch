import React from "react";
import { useGlobalContext } from "../context/context";
import CityBtns from "./CityBtns";
import { FiDelete } from "react-icons/fi";

const PreviousCity = () => {
  const { previousCity, setPreviousCity } = useGlobalContext();

  const deleteHistory = () => {
    if (window.confirm("Are you sure you want to delete all histories?")) {
      setPreviousCity([]);
    } else {
      return;
    }
  };

  const renderedButtons = previousCity.map((btn, index) => {
    return <CityBtns key={index} btn={btn} />;
  });

  return (
    <div className="history-buttons">
      <div className="city-buttons">
        {renderedButtons.length > 10
          ? renderedButtons.slice(0, 10)
          : renderedButtons}
      </div>
      <div className="delete-button">
        {previousCity.length > 0 && (
          <button onClick={deleteHistory}>
            <FiDelete />
          </button>
        )}
      </div>
    </div>
  );
};

export default PreviousCity;
