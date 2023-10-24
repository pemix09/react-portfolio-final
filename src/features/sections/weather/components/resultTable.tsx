import Table from 'react-bootstrap/Table';
import IWeatherResult from '../models/weatherResult';

export interface ResultTableProps {
    data: IWeatherResult;
}

function ResultTable(props: ResultTableProps) {
  return (
    <Table striped bordered hover>
      <thead>
        <tr>
          <th>Station name</th>
          <th>Temperature</th>
          <th>Wind speed</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>{props.data.stacja}</td>
          <td>{props.data.temperatura}</td>
          <td>{props.data.predkosc_wiatru}</td>
        </tr>
      </tbody>
    </Table>
  );
}

export default ResultTable;