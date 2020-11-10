'use strict'//usar novedades de JS

var mongoose = require('mongoose');//modulo de moongose
var Schema = mongoose.Schema;//Schema carga moongoose.Schema esto permite definir nuevos esquemas

var mmmaM43_1Schema = Schema({//esquema de la estructura que va a tener el formulario

    date_created: String,
    //datos tren
    noInspeccion: String,
    noTren: String,
    kilometraje: String,
    fechaInicio: String,
    fechaTerminacion: String,
    noSerie: String,
    
    operario: { type : Schema.ObjectId, ref: 'User'},

    //INSPECCION INICIAL
    limpiezaGral: Boolean,
    observacionesLg: String,
    
    fugaAire: Boolean,
    observacionesFa: String,

    revCarcaza: Boolean,
    observacionesRc: String,

    distanciaTapaEmbolo: Boolean,
    observacionesDte: String,

    distanciaTapaAnillo: Boolean,
    observacionesDta: String,

    medidaAnillo: Boolean,
    observacionesMa: String,

    observaciones1: String,

    //PRUEBAS DESARROLLADAS AL CILINDRO DE FRENO
    hermeticidadCilindro: Boolean,
    observacionesHc: String,

    frenoServicio: Boolean,
    observacionesFs: String,

    cilindroMuelle: Boolean,
    observacionesCm: String,

    depositoProceso: Boolean,
    observacionesDp: String,

    //MEDIDAD DE CARCAZA
    a_b: String,
    c_d: String,
    estadoGuarnicion: String,
    estadoCuerpoC: String,

    observaciones: String,

    supervisor: { type : Schema.ObjectId, ref: 'User'},
    jefeMM: { type : Schema.ObjectId, ref: 'User'},
    sMM: { type : Schema.ObjectId, ref: 'User'},
    clave: String
});
module.exports = mongoose.model('mmmaM43_1', mmmaM43_1Schema);