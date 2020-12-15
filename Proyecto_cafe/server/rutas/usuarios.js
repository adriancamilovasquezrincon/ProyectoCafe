const express=require('express');
const Usuario=require('.././modelos/usuarios');
const app=express();

// get post put delete
app.get('/usuario', function (req,res){
    res.json('get todos los usuarios LOCAL');
});

app.get('/usuario/:id', function (req,res){
    let id=req.params.id;
    res.json(`get usuario con id ${id}`);
});

app.post('/usuario', function (req,res){
    let body=req.body;
let usuario =new Usuario({
    nombre:body.nombre,
    email:body.email,
    password:body.password,
    role:body.role
});

usuario.save((err,usuarioDB)=>{
    if(err){
        return res.status(400).json({
            ok:false,
            err
        })
    }
    return res.json({
        ok:true,
        usuarioDB
    })
})

});

app.put('/usuario/:id', function (req,res){
    let id=req.params.id;
    res.json(`Put Usuario ${id}`)
});

app.delete('/usuario', function (req,res){
    res.json('Delete Usuario')
});

module.exports=app;