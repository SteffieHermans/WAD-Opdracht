import React from 'react';
import PropTypes from 'prop-types';

const FormInputListItem = ({value, name, onChange}) => {

  const handleChangeInput = e => {
    const {value} = e.currentTarget
    onChange(value);
  }

  return(
      <input id={name} type="text" name={name} onChange={handleChangeInput} value={value}/>
  );
};


FormInputListItem.propTypes = {
    onChange: PropTypes.func.isRequired,
    name: PropTypes.string.isRequired,
    value: PropTypes.string.isRequired
}

export default FormInputListItem;