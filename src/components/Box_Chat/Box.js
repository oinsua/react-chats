import React from 'react'
import io from 'socket.io-client';
//Importando hooks
import {useForm} from 'react-hook-form';
//Importando components
import Input from '../Input/Input';

import Button from '../Button/Button';
//Importando styled 
import {Div_Form, Div_Input, Span_Error}  from './styled';

const Box = ({username}) => {
    const socket = io();
    /*Iniciando los hook que se van a utilizar */
    const {register, handleSubmit, errors} = useForm();

    const onSubmit = (data) => {

        if(data.chats.length !== 0){
           socket.emit('send message', {
               msg: data.chats,
               from: username
            })
          } 
      
    }

    return (
            <Div_Form>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <Div_Input>
                        <Input  name="chats"  register={register} validate={{required: true, maxLength: 250, minLength: 1}} msg="Enter a Message" view_label={false}/>
                        <Button name="send" value="Send" type="submit" register={register} />
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
