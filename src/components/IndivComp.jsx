import { useState, useEffect } from "react";

function IndivComp(props) {
  const [weatherData, setWeatherData] = useState(null);
  const [loading, setLoading] = useState(true);

  const city = props.city;

  const options = {
    method: "GET",
    headers: {
      "X-RapidAPI-Key": "4671f334bdmshc05bdbfa1149ffdp1d29a9jsndd0461da52fc",
      "X-RapidAPI-Host": "weather-by-api-ninjas.p.rapidapi.com",
    },
  };

  const data = {};

  useEffect(() => {
    const getWeather = (city) => {
      setLoading(true);
      //console.log(city);
      data.cityName = city;
      fetch(
        "https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=" + city,
        options
      )
        .then((res) => res.json())
        .then((val) => {
          val.cityName = city;
          val.sunrise = getTime(val.sunrise);
          val.sunset = getTime(val.sunset);
          setWeatherData(val);
        })
        .catch((error) => {
          console.error("Error fetching weather data:", error);
        })
        .finally(() => {
          setLoading(false);
        });
    };
    getWeather(city);
  }, []);

  //console.log(weatherData);
  var getTime = (val) => {
    var timestamp = val;
    var date = new Date(timestamp * 1000);

    var hours = date.getHours();
    var minutes = date.getMinutes();
    var seconds = date.getSeconds();

    return hours + ":" + minutes + ":" + seconds;
  };

  if (loading) {
    return (
      <div className="card" aria-hidden="true">
        <div className="card-body">
          <h5 className="card-title placeholder-glow">
            <span className="placeholder col-6"></span>
          </h5>
          <p className="card-text placeholder-glow">
            <span className="placeholder col-7"></span>
            <span className="placeholder col-4"></span>
            <span className="placeholder col-4"></span>
            <span className="placeholder col-6"></span>
            <span className="placeholder col-8"></span>
          </p>
          <a
            className="btn btn-primary disabled placeholder col-6"
            aria-disabled="true"
          ></a>
        </div>
      </div>
    );
  }

  return (
    <>
      <tr>
        <th scope="row" className="text-start">
          {weatherData.cityName}
        </th>
        <td className="temp">{weatherData.temp}</td>
        <td className="max_temp">{weatherData.max_temp}</td>
        <td className="min_temp">{weatherData.min_temp}</td>
        <td className="humidity">{weatherData.humidity}</td>
        <td className="sunrise">{weatherData.sunrise}</td>
        <td className="sunset">{weatherData.sunset}</td>
        <td className="wind_speed">{weatherData.wind_speed}</td>
      </tr>
    </>
  );
}

export default IndivComp;
