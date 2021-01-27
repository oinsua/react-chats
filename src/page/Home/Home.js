import React, {useCallback} from 'react'
import io from 'socket.io-client';
//Importando hooks
import {useForm} from 'react-hook-form';
import { useHistory } from "react-router-dom";
//Importando components
import Input from '../../components/Input/Input';

const Home = () => {

     /*Variables globales */
     const {register, handleSubmit, errors} = useForm();
     const history = useHistory(); //Se crea un objeto para la navegacion

    const onSubmit = useCallback((data) => {
        const socket = io();
        socket.emit('send message', {
                                     body: data,
                                     id: "Ossany"});
        history.push(`/chats`);
    }, [history])
    

    return (
        <form onSubmit={handleSubmit(onSubmit)} className="user">
           <div className="user-form">
                <Input name="chats" type="text" register={register} validate={{required: true, maxLength: 100, minLength: 1}} msg="Put in a message" view_label={false} />
                <button>Enviar</button>
           </div>
           <p className="error-msg">
                {errors.user?.type === "required" && "Your input is required"}
                {errors.user?.type === "maxLength" && "Your input exceed maxLength = 100"}
                {errors.user?.type === "minLength" && "Your input must exceed minLength = 1"}
           </p>
        </form>
    )
}

export default Home
