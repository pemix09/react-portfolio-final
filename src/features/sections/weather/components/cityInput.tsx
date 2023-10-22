import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import { useMemo, useState } from 'react';

export interface CityInputProps {
  onSearch: (city: string) => void;
}

export default function CityInput(props: CityInputProps) {
  const [searchingInput, setSearchingInput] = useState("");

  return (
    <InputGroup className="mb-3"> 
        <Form.Control
          placeholder="Searched city"
          aria-label="Searched city"
          aria-describedby="Searched city"
          onChange={(event) => setSearchingInput(event.target.value)}
        />
        <Button variant="outline-secondary" id="searchButton" onClick={(e) => props.onSearch(searchingInput)}>
          Search
        </Button>
      </InputGroup>
  );
}
