module.exports =  (io) => {

    let username = [];

    io.on('connection', socket => {
        console.log('new user connected', socket.id);
       
        socket.on('new user', (data, cb) => {
            console.log('socket data', data)
            if(username.indexOf(data) === -1){
                cb(true);
                socket.username = data;
                username.push(socket.username);
            }
            else{
                cb(false);
            }
              
        })

        /*Recibiendo el msg desde App para agregar al chats */
        socket.on('send message', (msg) => {
            console.log('id',msg.id);
            console.log('msg',msg.body);
        })
    })
    

}