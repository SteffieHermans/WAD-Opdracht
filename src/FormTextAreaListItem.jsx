import React from 'react';
import PropTypes from 'prop-types';

const FormTextAreaListItem = ({value, name, onChange}) => {

  const handleChangeInput = e => {
    const {value} = e.currentTarget
    onChange(value);
  }

  return(
      <textarea id={name} name={name} onChange={handleChangeInput} value={value}></textarea>
  );
};


FormTextAreaListItem.propTypes = {
    onChange: PropTypes.func.isRequired,
    name: PropTypes.string.isRequired,
    value: PropTypes.string.isRequired
}

export default FormTextAreaListItem;