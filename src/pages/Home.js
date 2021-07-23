import React, { useRef } from "react";
import { useGlobalContext } from "../context/context";

const Home = () => {
  const { weather, celcius, setCelcius } = useGlobalContext();

  const tempBtn1 = useRef();
  const tempBtn2 = useRef();

  const clickTemp1 = () => {
    if (tempBtn1.current.outerText === "C") {
      setCelcius(true);
    }
  };
  const clickTemp2 = () => {
    if (tempBtn2.current.outerText === "F") {
      setCelcius(false);
    }
  };

  if (weather.length < 1) return "";

  const weatherIconUrl = `http://openweathermap.org/img/wn/`;
  return (
    <main className="weather-info">
      <div className="temperature-buttons">
        <button ref={tempBtn1} onClick={clickTemp1}>
          C
        </button>
        <button ref={tempBtn2} onClick={clickTemp2}>
          F
        </button>
      </div>
      <article>
        <div className="left-content">
          <h1>{`${weather.name}, ${weather.sys.country}`}</h1>
          <img src={`${weatherIconUrl}${weather.weather[0].icon}.png`} alt="" />
        </div>
        {celcius ? (
          <div className="right-content">
            <h1>{Math.round(weather.main.temp)}&deg;C</h1>
            <p>{weather.weather[0].description}</p>
            <p>Highest temp: {Math.ceil(weather.main.temp_max)}&deg;C</p>
            <p>Lowest temp: {Math.floor(weather.main.temp_min)}&deg;C</p>
            <p>Feels like: {Math.round(weather.main.feels_like)}&deg;C</p>
          </div>
        ) : (
          <div className="right-content">
            <h1>{Math.round(weather.main.temp * 1.8 + 32)}&deg;F</h1>
            <p>{weather.weather[0].description}</p>
            <p>
              Highest temp: {Math.ceil(weather.main.temp_max * 1.8 + 32)}&deg;F
            </p>
            <p>
              Lowest temp: {Math.floor(weather.main.temp_min * 1.8 + 32)}&deg;F
            </p>
            <p>
              Feels like: {Math.round(weather.main.feels_like * 1.8 + 32)}&deg;F
            </p>
          </div>
        )}
      </article>
    </main>
  );
};

export default Home;
