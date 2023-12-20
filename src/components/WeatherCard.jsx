import { useState, useEffect } from "react";

function WeatherCard(props) {
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

      data.cityName = city;
      fetch(
        "https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=" + city,
        options
      )
        .then((res) => {
          if (!res.ok) {
            throw new Error(`Fetch Failed!! ${res.status}`);
          }

          return res.json();
        })
        .then((val) => {
          val.cityName = city;
          val.sunrise = getTime(val.sunrise);
          val.sunset = getTime(val.sunset);
          setWeatherData(val);
          setLoading(false);
        })
        .catch((error) => {
          console.error("Error fetching weather data:", error);
          setLoading(true);
        });
      // .finally(() => {
      //   setLoading(false);
      // });
    };

    getWeather(city);
  }, [city]);

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
          <h6>Loading...</h6>
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
      <h1 className="display-6 fw-normal text-center">
        Weather for <span id="cityName">{weatherData.cityName}</span>
      </h1>
      <div className="row row-cols-1 row-cols-md-3 mb-3 text-center">
        <div className="col">
          <div className="card mb-4 rounded-3 shadow-sm">
            <div className="card-header text-bg-primary border-primary py-3">
              <h4 className="my-0 fw-normal">Temperature</h4>
            </div>
            <div className="card-body">
              <h1 className="card-title pricing-card-title">
                <span id="temp2">{weatherData.temp}</span>
                <small className="text-muted fw-light">
                  <span> &#8451;</span>
                </small>
              </h1>
              <ul className="list-unstyled mt-3 mb-4">
                <li>
                  Temperature is <span id="temp">{weatherData.temp}</span>
                </li>
                <li>
                  Min temperature is{" "}
                  <span id="min_temp">{weatherData.min_temp}</span>
                </li>
                <li>
                  Max temperature is{" "}
                  <span id="max_temp">{weatherData.max_temp}</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="col">
          <div className="card mb-4 rounded-3 shadow-sm">
            <div className="card-header text-bg-primary py-3">
              <h4 className="my-0 fw-normal">Humidity</h4>
            </div>
            <div className="card-body">
              <h1 className="card-title pricing-card-title">
                <span id="humidity2">{weatherData.humidity}</span>
                <small className="text-muted fw-light"> %</small>
              </h1>
              <ul className="list-unstyled mt-3 mb-4">
                <li>
                  Cloud PCT is{" "}
                  <span id="cloud_pct">{weatherData.cloud_pct}</span>
                </li>
                <li>
                  Feels like{" "}
                  <span id="feels_like">{weatherData.feels_like}</span>
                </li>
                <li>
                  Humidity is <span id="humidity">{weatherData.humidity}</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="col">
          <div className="card mb-4 rounded-3 shadow-sm">
            <div className="card-header py-3 text-bg-primary border-primary">
              <h4 className="my-0 fw-normal">Wind</h4>
            </div>
            <div className="card-body">
              <h1 className="card-title pricing-card-title">
                <span id="wind_speed2">{weatherData.wind_speed}</span>
                <small className="text-muted fw-light"> km/hr</small>
              </h1>
              <ul className="list-unstyled mt-3 mb-4">
                <li>
                  Wind Speed is{" "}
                  <span id="wind_speed">{weatherData.wind_speed}</span>
                </li>
                <li>
                  Sunrise at <span id="sunrise">{weatherData.sunrise}</span>
                </li>
                <li>
                  Sunset at <span id="sunset">{weatherData.sunset}</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default WeatherCard;
