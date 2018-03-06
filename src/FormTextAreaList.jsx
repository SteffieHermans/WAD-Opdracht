import React from 'react';
import FormTextAreaListItem from './FormTextAreaListItem.jsx';
import PropTypes from 'prop-types';

const FormTextAreaList = ({value, name, onChange}) => {

  const handleChangeInput = (index, data) => {
    value[index] = data;
    onChange(value);
  }

  return(
    <label htmlFor={name}>{name}
      {value.map((step, index) => {
          return <FormTextAreaListItem key={index} onChange={e => handleChangeInput(index, e)} name={name} value={step}/>
      })}
    </label>
  );
};

FormTextAreaList.propTypes = {
    onChange: PropTypes.func.isRequired,
    name: PropTypes.string.isRequired,
    value: PropTypes.array.isRequired
}

export default FormTextAreaList;