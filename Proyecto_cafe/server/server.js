const express =require('express')
const mongoose = require('mongoose');

const app=express()
require ('../server/config/config')


app.use(express.urlencoded({
    extended:false
}))
app.use(require('../server/rutas/usuarios'))
mongoose.connect('mongodb://localhost:27017/cafes', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useFindAndModify: false,
  useCreateIndex: true
},(err,res)=>{
    if(err) throw err;
    console.log('Base de datos Online***')
});
app.listen(process.env.PORT,()=>{
    console.log(`Servidor escuchando en el puerto ${process.env.PORT}`);
})
// app.listen(3000,()=>{
//     console.log('Servidor escuchando en el puerto 3000')
// })