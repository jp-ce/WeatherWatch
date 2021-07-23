import React from "react";
import { TiWeatherCloudy } from "react-icons/ti";
import { useGlobalContext } from "../context/context";

const SearchBar = () => {
  const { setCityName } = useGlobalContext();
  const searchValue = React.useRef();

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  const searchCity = () => {
    const capitalized = `${searchValue.current.value[0].toUpperCase()}${searchValue.current.value
      .toLowerCase()
      .slice(1, searchValue.current.value.length)}`;
    setCityName(capitalized);
    clearInput();
  };

  const clearInput = () => {
    searchValue.current.value = "";
  };

  return (
    <form action="" className="search-bar" onSubmit={handleSubmit}>
      <div className="form-control">
        <input
          type="text"
          placeholder="Enter a city"
          ref={searchValue}
          onSubmit={searchCity}
        />
        <button onClick={searchCity}>
          <TiWeatherCloudy />
        </button>
      </div>
    </form>
  );
};

export default SearchBar;
