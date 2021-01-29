module.exports =  (io) => {

    let username = [];
    let listMsg = [];

    io.on('connection', socket => {
        //Evento establece un nuevo enlace entre el cliente y el server
        socket.on('connected', (user) => {
            socket.user = user;
            console.log('new user connected', socket.user);
            socket.broadcast.emit('all messages', listMsg);
        })
        
        //Evento que establece como se interrumpe el enlace entre el cliente y el server
        socket.on('disconnected', () => {
            console.log('User had left!');
        })
        
        //Evento para agregar un nuevo usuario que hace login en el chat
        socket.on('new user', (data, cb) => {
            if(username.indexOf(data) === -1){
                cb(true);
                socket.username = data;
                username.push(socket.username);
            }
            else{
                cb(false);
            }
              
        })

        /*Evento que recibe el msg desde App para agregar al chats */
        socket.on('send message', (data) => {
            listMsg.push({
                from: data.from,
                msg: data.msg                
            });
            socket.broadcast.emit('new message', {
                from: data.from,
                msg: data.msg
            });
        })
    })
    

}