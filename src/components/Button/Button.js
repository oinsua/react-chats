import React from 'react';
import {Button_Form} from './styled'

const Button = ({id, name, style, value, type, disable}) => {
    return (
        <>
            <Button_Form 
                 id={id}
                 name={name}
                 type={type}
                 className={`button ${style}`} 
                 disable={disable}
                 value={value}
            >
                {value}
            </Button_Form>
        </>
    )
}

export default Button
