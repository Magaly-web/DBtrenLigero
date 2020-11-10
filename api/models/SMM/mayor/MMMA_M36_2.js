'use strict'//usar novedades de JS

var mongoose = require('mongoose');//modulo de moongose
var Schema = mongoose.Schema;//Schema carga moongoose.Schema esto permite definir nuevos esquemas

var mmmaM36_2Schema = Schema({//esquema de la estructura que va a tener el formulario

    date_created: String,

    //MOTRIZ 1
    grados0Int: String,
    grados90Int: String,
    grados180Int: String,
    grados270Int: String,
    
    //MOTRIZ 2
    grados0Ext: String,
    grados90Ext: String,
    grados180Ext: String,
    grados270Ext: String,

    observaciones: String,

    supervisor: { type : Schema.ObjectId, ref: 'User'},
    jefeMM: { type : Schema.ObjectId, ref: 'User'},
    sMM: { type : Schema.ObjectId, ref: 'User'},
    clave: String
});
module.exports = mongoose.model('mmmaM36_2', mmmaM36_2Schema);