const mongoose= require("mongoose");
const connect= ()=>{
    return mongoose.connect("mongodb://localhost:27017/muddaDb")
}

module.exports= connect;