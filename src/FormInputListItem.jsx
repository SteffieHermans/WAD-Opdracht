import React from 'react';
import PropTypes from 'prop-types';

const FormInputListItem = ({count, onChange}) => {

  const handleChangeInput = e => {
    onChange(e);
  }

  return(
      <input id={"ingredient" + (count - 1)} type="text" name="ingredient" onChange={handleChangeInput}/>
  );
};


FormInputListItem.propTypes = {
    onChange: PropTypes.func.isRequired,
    name: PropTypes.string.isRequired,
    value: PropTypes.string.isRequired
}

export default FormInputListItem;