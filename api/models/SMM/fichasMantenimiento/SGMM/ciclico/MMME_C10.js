'use strict'//usar novedades de JS

var mongoose = require('mongoose');//modulo de moongose
var Schema = mongoose.Schema;//Schema carga moongoose.Schema esto permite definir nuevos esquemas

var mmmeC10Schema = Schema({//esquema de la estructura que va a tener el formulario
    date_created: String,
    //datos tren
    noInspeccion: String,
    noTren: String,
    kilometraje: String,
    horaInicio: String,
    horaTerminacion: String,
    
    operario: { type : Schema.ObjectId, ref: 'User'},

    noSeriePantografo: Number,
    noSerieValvula: Number,

    esfuerzoEstatico1: Number,
    esfuerzoEstatico2: Number,
    esfuerzoSobreTopeInferior: Number,
    tiempoElevacionDescenso1: Number,
    tiempoElevacionDescenso2: Number,
    tiempoElevacionDescensoJ: Number,
    esfuerzoDisparo1: Number,
    esfuerzoDisparo2: Number,
    estanqueidad: Number,

    //material utilizado
    codigo1: String,
    desc1: String,
    cant1: String,
    noVale1: Number,

    codigo2: String,
    desc2: String,
    cant2: String,
    noVale2: Number,
    
    codigo3: String,
    desc3: String,
    cant3: String,
    noVale3: Number,

    superviso: { type : Schema.ObjectId, ref: 'User'},
    jefeTurno: { type : Schema.ObjectId, ref: 'User'},
    sMM: { type : Schema.ObjectId, ref: 'User'},
    clave: String
});
module.exports = mongoose.model('mmmeC10', mmmeC10Schema);