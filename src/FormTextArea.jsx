import React from 'react';
import PropTypes from 'prop-types';

const FormTextArea = ({value, name, onChange}) => {

  const handleChangeInput = e => {
    const {value} = e.currentTarget
    onChange(value);
  }

  return(
    <label htmlFor={name}>{name}
        <textarea id={name} value={value} name={name} onChange={handleChangeInput} />
    </label>
  );
};


FormTextArea.propTypes = {
    onChange: PropTypes.func.isRequired,
    name: PropTypes.string.isRequired,
    value: PropTypes.string.isRequired
}

export default FormTextArea;