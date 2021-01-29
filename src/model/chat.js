const mongoose = require('mongoose');
const {Schema} = mongoose;

/*Definir el esquema de la base de datos Mongoose */
const ChatSchema = new Schema({ 
                                from: String,
                                msg: String,
                                create_at: {
                                  type: Date,
                                  default: Date.now
                                }
                            })
module.exports = mongoose.model('Chat', ChatSchema);