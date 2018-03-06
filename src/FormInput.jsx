import React from 'react';
import PropTypes from 'prop-types';

const FormInput = ({value, name, onChange}) => {

  const handleChangeInput = e => {
    const {value} = e.currentTarget;
    onChange(value);
  }

  return(
    <label htmlFor={name}>{name}
      <input id={name} type="text" name={name} onChange={handleChangeInput} value={value}/>
    </label>
  );
};


FormInput.propTypes = {
    onChange: PropTypes.func.isRequired,
    name: PropTypes.string.isRequired,
    value: PropTypes.string.isRequired
}

export default FormInput;