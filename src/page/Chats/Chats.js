import React, {useEffect} from 'react';
import io from 'socket.io-client';
import { useParams} from "react-router-dom";
//Importando Compoenentes
import Box from '../../components/Box_Chat/Box';
import Message from '../../components/Message_Chat/Message';
import Header from '../../components/Header_Chat/Header';
//Importar Estilos
import {Div_Chat, Div_Container} from './styled';

const Chats = () => {
    const socket = io(); 

    /*Tomando el parametro enviado por la url */
    const {username} = useParams();
    
    useEffect(() => {
       socket.emit('connected', username); //Establecer conexion con el server
    },[])

    return (
        <Div_Container>
            <Div_Chat>
                <Header username={username} />
                <Message username={username} />
                <Box username={username}/>
            </Div_Chat>
        </Div_Container>
    )
}

export default Chats
