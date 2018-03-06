import React from 'react';
import FormInputListItem from './FormInputListItem.jsx';
import PropTypes from 'prop-types';

const FormInputList = ({value, name, onChange}) => {

  const handleChangeInput = (index, data) => {
    console.log(value, data)
    value[index] = data;
    onChange(value);
  }

  return(
    <label htmlFor={name}>{name}
      {value.map((ingredient, index) => {
          return <FormInputListItem key={index} onChange={e => handleChangeInput(index, e)} name={name} value={ingredient}/>
      })}
    </label>
  );
};

FormInputList.propTypes = {
    onChange: PropTypes.func.isRequired,
    name: PropTypes.string.isRequired,
    value: PropTypes.array.isRequired
}

export default FormInputList;