import { useEffect, useState } from "react";
import CityInput from "./components/cityInput";
import WeatherResult from "./components/weatherResult";
import IWeatherResult from "./models/weatherResult";
import classes from "./weather.module.css";

export default function Weather() {
  const [searchedCity, setSearchedCity] = useState<string>("");
  const [searchResult, setSearchResult] = useState<IWeatherResult | null>(null);

  useEffect(() => {
    async function fetchWeatherData() {
      console.debug("Fetching weather data");

      let loweredCity = searchedCity.toLowerCase();
      let responseData: Response = await fetch(
        `https://danepubliczne.imgw.pl/api/data/synop/station/${loweredCity}`
      );

      if (responseData.ok === true) {
        let data = (await responseData.json()) as IWeatherResult;
        setSearchResult(data);
      } else {
        setSearchResult(null);
      }
    }

    if (searchedCity && searchedCity.length > 0) {
      fetchWeatherData();
    } else {
      setSearchResult(null);
    }
  }, [searchedCity]);

  return (
    <section id={weatherSectionId}>
      <div className={classes.weatherInput}>
        <CityInput onSearch={(city: string) => setSearchedCity(city)} />
        <WeatherResult data={searchResult} />
      </div>
    </section>
  );
}

export const weatherSectionId = "weatherSection";