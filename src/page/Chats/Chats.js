import React, {useEffect} from 'react';
import io from 'socket.io-client';
import {Helmet} from "react-helmet";
import { useParams} from "react-router-dom";
//Importando Compoenentes
import Box from '../../components/Box_Chat/Box';
import Message from '../../components/Message_Chat/Message';
import Header from '../../components/Header_Chat/Header';
//Importar Estilos
import {Div_Chat, Div_Container} from './styled';
//Importando el favicon
//import favicon from '../../asset/img/favicon.png'

const Chats = () => {
    const socket = io(); 

    /*Tomando el parametro enviado por la url */
    const {username} = useParams();
    
    useEffect(() => {
       socket.emit('connected', username); //Establecer conexion con el server
    },[])

    return (
        <>
        <Helmet>
                <title>Web_Chat</title>
                <meta name="application-name" content="web_chat" />
                <meta name="description" content="web_chat"/>
                <meta name="google" content="notranslate"/>
                <link rel="icon" href="{favicon}" sizes="32x32" type="image/png"></link>
        </Helmet>
        <Div_Container>
            <Div_Chat>
                <Header username={username} />
                <Message username={username} />
                <Box username={username}/>
            </Div_Chat>
        </Div_Container>
        </>
    )
}

export default Chats
