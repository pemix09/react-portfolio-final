import IWeatherResult from "../models/weatherResult";
import ResultTable from "./resultTable";

export type WeatherResultProps = {
    data: IWeatherResult | null; 
}

export default function WeatherResult(props: WeatherResultProps) {

    if (props.data === null) {
        return <p>Brak danych</p>;
    } else {
        return <ResultTable data={props.data} />;
    }
}