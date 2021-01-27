import React, {useCallback, useState} from 'react'
import io from 'socket.io-client';
//Importando hooks
import {useForm} from 'react-hook-form';
import { useHistory } from "react-router-dom";
//Importando components
import Input from '../../components/Input/Input';
import Button from '../../components/Button/Button';
//Importando styled
import {Div_Form, Div_Input, Span_Error}  from './styled';
import socket from '../../../api/socket';

const Home = () => {

     /*Iniciando los hook que se van a utilizar */
     const {register, handleSubmit, errors} = useForm();
     const history = useHistory(); //Se crea un objeto para la navegacion
     const [errorUser, setErrorUse] = useState(false);

    const onSubmit = useCallback(async (data) => {
        const socket = io();
        if(data.chats.length !== 0){
            await socket.emit('new user', data.chats, res => {
                  console.log('respuesta del cb', res)
                  res ? history.push(`/chats`) : setErrorUse(true);
              })
          }         
    }, [socket])
    
    return (
        <Div_Form>
        <form onSubmit={handleSubmit(onSubmit)}>
                <Div_Input>
                    <Input  name="chats" type="text" register={register} validate={{required: true, maxLength: 100, minLength: 1}} msg="Enter your Username" view_label={false} />
                    <Button name="enviar" value="Send" type="submit"/>
                </Div_Input>
                <Span_Error>
                        {errors.chats?.type === "required" && "Your username is required"}
                        {errors.chats?.type === "maxLength" && "Your username exceed maxLength = 100"}
                        {errorUser ? <p>Your Username is Use!!!</p> : ''}
                </Span_Error>
        </form>
        </Div_Form>
    )
}

export default Home
