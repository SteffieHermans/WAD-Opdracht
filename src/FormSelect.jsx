import React from 'react';
import PropTypes from 'prop-types';

const FormSelect = ({value, name, onChange}) => {

  const handleChangeInput = e => {
    const {value} = e.currentTarget
    onChange(parseInt(value, 10));
  }

  return(
    <label htmlFor="servings">{name}
        <select id="servings" value={value} onChange={handleChangeInput}>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
            <option value="5">5</option>
            <option value="6">6</option>
            <option value="7">7</option>
            <option value="8">8</option>
            <option value="9">9</option>
            <option value="10">10</option>
            <option value="11">11</option>
            <option value="12">12</option>
        </select>
    </label>
  );
};


FormSelect.propTypes = {
    onChange: PropTypes.func.isRequired,
    name: PropTypes.string.isRequired,
    value: PropTypes.number.isRequired
}

export default FormSelect;