import React from 'react';
import { useParams} from "react-router-dom";
//Importando Compoenentes
import Box from '../../components/Box_Chat/Box';
import Message from '../../components/Message_Chat/Message';
import Header from '../../components/Header_Chat/Header';
import Body from '../../components/Body_User/Body';
//Importar Estilos
import {Div_Chat, Div_Container, Div_User, Div_Header_User} from './styled';

const Chats = () => {

    /*Tomando el parametro enviado por la url */
    const {username} = useParams();

    return (
        <Div_Container>
            <Div_Chat>
                <Header username={username} />
                <Message />
                <Box />
            </Div_Chat>
            <Div_User>
               <Div_Header_User>Users Online</Div_Header_User>
               <Body />
            </Div_User>
        </Div_Container>
    )
}

export default Chats
