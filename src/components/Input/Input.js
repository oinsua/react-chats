import React from 'react';
import {Label, InputF} from './styled';

const Input = ({name, type, register, style = '', validate, msg, view_label }) => {
    
  const handleClear = (e) => {
     e.target.value = '';
  }

  return (
        <>
          {view_label && <Label className="label">{name}</Label>}
          <InputF 
                className={`input ${style}`} 
                name={name} 
                type={type} 
                ref={register(validate)}
                placeholder={msg} 
                onClick={handleClear}
          />  
        </>
    )
}

export default Input