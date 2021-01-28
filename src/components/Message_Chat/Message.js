import React from 'react';
//Importando Componentes
import Autor from '../Autor_Chat/Autor';
import Friend from '../Friend_Chat/Friend';
//Importando Estilos
import {Div_Msg} from './styled';

const Message = () => {
    return (
        <Div_Msg>
            <Autor />
            <Friend />
        </Div_Msg>
    )
}

export default Message
