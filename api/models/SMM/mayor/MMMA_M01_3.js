'use strict'//usar novedades de JS

var mongoose = require('mongoose');//modulo de moongose
var Schema = mongoose.Schema;//Schema carga moongoose.Schema esto permite definir nuevos esquemas

var mmmaM01_3Schema = Schema({//esquema de la estructura que va a tener el formulario

    date_created: String,
    //datos tren
    noInspeccion: String,
    noTren: String,
    kilometraje: String,
    fechaInicio: String,
    fechaTerminacion: String,
    
    operario1: { type : Schema.ObjectId, ref: 'User'},
    operario2: { type : Schema.ObjectId, ref: 'User'},

    noSeriePantografo: Number,
    noSerieValvula: Number,

    //AJUSTES DEL PANTOGRAFO
    //ESFUERZO ESTATICO
    eE1: String,
    eE2: String,

    //ESTI
    esti: String,

    //TIEMPO DE ELEVACION Y DESCENSO
    ted1: String,
    ted2: String,

    ///DISTANCIA GANCHO TOPE 
    dgt: String,

    //ESFUERZO DE DISPARO
    fd1: String,
    fd2: String,

    //ESTANQUEIDAD
    voE: String,
    observacionesE: String,

    supervisor: { type : Schema.ObjectId, ref: 'User'},
    jefeMM: { type : Schema.ObjectId, ref: 'User'},
    sMM: { type : Schema.ObjectId, ref: 'User'},
    clave: String
});
module.exports = mongoose.model('mmmaM01_3', mmmaM01_3Schema);