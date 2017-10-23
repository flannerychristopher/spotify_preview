import React from 'react';
import { FormControl, FormGroup, Glyphicon, InputGroup } from 'react-bootstrap';

import '../App.css';

const Search = ({ value, onChange, onClick, onKeyPress }) => {
  return (
    <FormGroup>
      <InputGroup>
        <FormControl
          value={value}
          onChange={event => onChange(event.target.value)}
          onKeyPress={event => onKeyPress(event)}
          type="text"
          placeholder="search ..."
        />
        <InputGroup.Addon onClick={onClick}>
          <Glyphicon glyph="search"></Glyphicon>
        </InputGroup.Addon>
      </InputGroup>
    </FormGroup>
  );
}

export default Search;

