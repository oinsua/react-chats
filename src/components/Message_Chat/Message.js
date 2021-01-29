import React, {useEffect, useState, useRef} from 'react';
import io from 'socket.io-client';
//Importando Componentes
import Autor from '../Autor_Chat/Autor';
//Importando Estilos
import {Div_Msg} from './styled';

const Message = ({username}) => {

    const socket = io(); 
    const [messages, setMessages] = useState([])
    /*Efecto que trae los mensajes que se han producido */
    useEffect(() => {
        socket.on('all messages', (listMsg) => {
            console.log('all messages',listMsg );
           setMessages(listMsg);
        })
        return () => {
           socket.emit('disconnected');
           socket.off();
       }
    },[])

    /*Efecto que se ejecuta cada vez que se produce un nuevo mensaje */
    useEffect(() => {
        socket.on('new message', (data) => {
            console.log('respuesta del server', data)
          setMessages([...messages, data]);
         
        })
        
        return () => {
            socket.emit('disconnected');
            socket.off();
        }
     },[messages])

     /*Efecto que se encarga de mantener constantemente subiendo el Div */
     const divRef = useRef(null);
     useEffect(() => {
         divRef.current.scrollIntoView({behavior: 'smooth'})
     })
     console.log('listado de msg', messages);

     const msg = messages.map((item, index) => {
        return (
            <Autor key={index} message={item} username={username} />
        )
    }
    )
    return (
        <Div_Msg>
            {
               msg
            }
            <div ref={divRef}></div>
        </Div_Msg>
    )
}

export default Message
