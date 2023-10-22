import classes from "./cityInput.module.css";

export default function CityInput() {
  return (
    <div>
      <input className={classes.cityInput} type="text" placeholder="Enter city name"/>
      <button>Search</button>
    </div>
  );
}
