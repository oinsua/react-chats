module.exports =  (io) => {

    io.on('connection', socket => {
        console.log('new user connected', socket.id);
       
        /*Recibiendo el msg desde App para agregar al chats */
        socket.on('send message', (msg) => {
            console.log('id',msg.id);
            console.log('msg',msg.body);
        })
    })
    

}