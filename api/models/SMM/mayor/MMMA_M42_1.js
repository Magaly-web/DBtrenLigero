'use strict'//usar novedades de JS

var mongoose = require('mongoose');//modulo de moongose
var Schema = mongoose.Schema;//Schema carga moongoose.Schema esto permite definir nuevos esquemas

var mmmaM42_1Schema = Schema({//esquema de la estructura que va a tener el formulario

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

    //MEDIDAS DE REFERENCIA
    distanciaTapaEmbolo: Boolean,
    observacionesDte: String,

    distanciaTapaAnillo: Boolean,
    observacionesDta: String,

    //INSPECCION DE PIEZA
    bridaSujeccion: Boolean,
    observacionesBs: String,

    tapa: Boolean,
    observacionesT: String,

    tuercaPresion: Boolean,
    observacionesTp: String,

    husillo: Boolean,
    observacionesHusillo: String,

    //PRUEBAS DESARROLLADAS
    resistencia: Boolean,
    observacionesR: String,

    hermeticidad: Boolean,
    observacionesH: String,

    //MANTENIMIENTO
    //MEDIDA CILINDRO 178+0.6 MAXIMO DESGASTE: 179.00
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
module.exports = mongoose.model('mmmaM42_1', mmmaM42_1Schema);