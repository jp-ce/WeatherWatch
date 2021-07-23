import React, { useContext, createContext, useState, useEffect } from "react";

const getLocalStorage = () => {
  let weather = localStorage.getItem("weather");
  if (weather) {
    return (weather = JSON.parse(localStorage.getItem("weather")));
  } else {
    return [];
  }
};

const getLocalStoragePrevCity = () => {
  let previousCity = localStorage.getItem("previousCity");
  if (previousCity) {
    return (previousCity = JSON.parse(localStorage.getItem("previousCity")));
  } else {
    return [];
  }
};

const AppContext = createContext();
const weatherBaseURL = "https://api.openweathermap.org/data/2.5/weather?q=";

const AppProvider = ({ children }) => {
  const [cityName, setCityName] = useState("");
  const [weather, setWeather] = useState(getLocalStorage());
  const [previousCity, setPreviousCity] = useState(getLocalStoragePrevCity());
  const [celcius, setCelcius] = useState(true);

  const addPreviousCity = (payload) => {
    let oldCity = previousCity;
    let newCity = [...new Set([payload, ...oldCity])];
    setPreviousCity(newCity.slice(0, 11));
  };

  const fetchWeatherByCity = async () => {
    if (!cityName) return;
    try {
      const response = await fetch(
        `${weatherBaseURL}${cityName}&appid=ec6a7d3a9a3761eccd42d27d758f9414&units=metric`
      );
      if (!response.ok) {
        throw new Error("You have entered an invalid city, please try again");
      } else {
        const data = await response.json();
        setWeather(data);
        addPreviousCity(cityName);
      }
    } catch (err) {
      alert(err);
    }
  };

  console.log(weather);

  useEffect(() => {
    fetchWeatherByCity();
  }, [cityName]);

  useEffect(() => {
    localStorage.setItem("weather", JSON.stringify(weather));
    localStorage.setItem("previousCity", JSON.stringify(previousCity));
  }, [weather, previousCity]);

  return (
    <AppContext.Provider
      value={{
        setWeather,
        setCityName,
        cityName,
        weather,
        previousCity,
        setPreviousCity,
        celcius,
        setCelcius,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useGlobalContext = () => {
  return useContext(AppContext);
};

export { AppProvider, AppContext };
