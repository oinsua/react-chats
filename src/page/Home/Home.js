import React, { useState} from 'react'
import io from 'socket.io-client';
import {Helmet} from "react-helmet";
//Importando hooks
import {useForm} from 'react-hook-form';
import { useHistory } from "react-router-dom";
//Importando components
import Input from '../../components/Input/Input';
import Button from '../../components/Button/Button';
//Importando styled
import {Div_Form, Div_Input, Span_Error}  from './styled';
//Importando el favicon
import favicon from '../../asset/img/favicon.png';

const Home = () => {

     /*Iniciando los hook que se van a utilizar */
     const {register, handleSubmit, errors} = useForm();
     const history = useHistory(); //Se crea un objeto para la navegacion
     const [errorUser, setErrorUse] = useState(false);

    const onSubmit =  (data) => {
        const socket = io();
        if(data.username.length !== 0){
            socket.emit('new user', data.username, res => {
                  res ? history.push(`/chats/${data.username}`) : setErrorUse(true);
              })
          }         
    }
    
    return (
        <>
             <Helmet>
                <title>Home_Web_Chat</title>
                <meta name="application-name" content="home_web_chat" />
                <meta name="description" content="home_web_chat"/>
                <meta name="google" content="notranslate"/>
                <link rel="icon" href={ favicon } sizes="32x32" type="image/png"></link>
             </Helmet>
            <Div_Form>
            <form onSubmit={handleSubmit(onSubmit)}>
                    <Div_Input>
                        <Input  name="username" type="text" register={register} validate={{required: true, maxLength: 100, minLength: 1}} msg="Enter your Username" view_label={false} />
                        <Button name="send" value="Send" type="submit"/>
                    </Div_Input>
                    <Span_Error>
                            {errors.username?.type === "required" && "Your username is required"}
                            {errors.username?.type === "maxLength" && "Your username exceed maxLength = 100"}
                            {errorUser ? <p>Username is Active!</p> : ''}
                    </Span_Error>
            </form>
            </Div_Form>
        </>
    )
}

export default Home
