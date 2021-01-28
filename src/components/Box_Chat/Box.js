import React, {useCallback, useState} from 'react'
import io from 'socket.io-client';
import socket from '../../../api/socket';
//Importando hooks
import {useForm} from 'react-hook-form';
import { useHistory } from "react-router-dom";
//Importando components
import Input from '../Input/Input';
import Button from '../Button/Button';
//Importando styled 
import {Div_Form, Div_Input, Span_Error}  from './styled';

const Box = () => {

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
                        <Input  name="chats" type="text" register={register} validate={{required: true, maxLength: 100, minLength: 1}} msg="Enter a Message" view_label={false} />
                        <Button name="send" value="Send" type="submit"/>
                    </Div_Input>
                </form>
                <Span_Error>
                    {errors.chats?.type === "required" && "Message is Required"}
                    {errors.chats?.type === "maxLength" && "Your Message Exceed maxLength = 100"}
               </Span_Error>
            </Div_Form>
    )
}

export default Box
