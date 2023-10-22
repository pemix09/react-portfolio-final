import IWeatherResult from "../models/weatherResult";
import ResultTable from "./resultTable";

export type WeatherResultProps = {
    data: IWeatherResult | null; 
}

export default function WeatherResult(props: WeatherResultProps) {

    function renderResult() {
        if (props.data === null) {
            return <p>Brak danych</p>;
        } else {
            return <ResultTable data={props.data} />;
        }
    }
    
    return (
        <div>
            <h1>WeatherResult:</h1>
            {renderResult()}
        </div>
    );
}