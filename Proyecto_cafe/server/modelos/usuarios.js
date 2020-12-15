const mongoose=require('mongoose');
const uniqueValidator = require('mongoose-unique-validator');

let Schema=mongoose.Schema;

let usuarioSchema= new Schema({
    nombre:{
        type:String,
        //required:true
        required:[true,'El nombre es Obligatorio']
    },
    email:{
        type:String,
        unique:true,
        required:[true,'El email es unico']
    },
    password:{
        type:String,
        required:[true,'La clave es obligatoria']
    },
    role:{
        type:String,
        default:'USER_ROLE'
    },
    img:{
        type:String
    },
    estado:{
        type:Boolean,
        default:true
    }
})

usuarioSchema.plugin(uniqueValidator,{
    message:'{PATH} debe ser unico'
})
module.exports=mongoose.model('Usuario',usuarioSchema)
