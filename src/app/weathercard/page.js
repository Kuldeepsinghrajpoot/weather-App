import React from "react";
import Card from "./card";

const weather = async () => {
  let data = await fetch(
    "https://api.weatherapi.com/v1/forecast.json?key=ff9b41622f994b1287a73535210809&q=lucknow&days=2"
  );
  data = await data.json();
  return data;
};

const page = async () => {
  const weatherData = await weather();
  // console.log(weatherData);
  return (
    <>
      <div>
        <Card location={weatherData.location} current={weatherData.current} />
        {/* <!-- component --> */}
      </div>
    </>
  );
};

export default page;
