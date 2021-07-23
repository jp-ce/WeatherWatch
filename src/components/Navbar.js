import React from "react";
import PreviousCity from "./PreviousCity";
import SearchBar from "./SearchBar";
import { TiWeatherSunny } from "react-icons/ti";
const Navbar = () => {
  return (
    <nav>
      <div className="nav-contents">
        <div className="heading">
          <div className="logo">
            <TiWeatherSunny />
            WeatherWatch
          </div>
          <p className="api-credit">via OpenWeatherMap</p>
        </div>
        <SearchBar />
        <PreviousCity />
      </div>
    </nav>
  );
};

export default Navbar;
