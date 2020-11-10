'use strict'//usar novedades de JS

var mongoose = require('mongoose');//modulo de moongose
var Schema = mongoose.Schema;//Schema carga moongoose.Schema esto permite definir nuevos esquemas

var mmmaM18_15Schema = Schema({//esquema de la estructura que va a tener el formulario

    date_created: String,
    //datos tren
    noInspeccion: String,
    noTren: String,
    kilometraje: String,
    fechaInicio: String,
    fechaTerminacion: String,
    noSerie: String,
    
    operario: { type : Schema.ObjectId, ref: 'User'},

    caudal8: String,
    caudal8giro: String,

    caudal10: String,
    caudal10giro: String,

    //PRUEBAS DE FASES DE MOTOR SIN CARGA
    motorSinCargaF1Ro: String,
    motorSinCargaF1Ct: String,
    observacionesMscF1: String,

    motorSinCargaF2Ro: String,
    motorSinCargaF2Ct: String,
    observacionesMscF2: String,

    motorSinCargaF3Ro: String,
    motorSinCargaF3Ct: String,
    observacionesMscF3: String,

    motorSinCargaRpmRo: String,
    motorSinCargaRpmCt: String,
    observacionesMscRpm: String,

    //PRUEBAS DE FASES DE MOTOR CON CARGA
    motorConCargaF1Ro: String,
    motorConCargaF1Ct: String,
    observacionesMccF1: String,

    motorConCargaF2Ro: String,
    motorConCargaF2Ct: String,
    observacionesMccF2: String,

    motorConCargaF3Ro: String,
    motorConCargaF3Ct: String,
    observacionesMccF3: String,

    motorConCargaRpmRo: String,
    motorConCargaRpmCt: String,
    observacionesMccRpm: String,

    observaciones: String,

    supervisor: { type : Schema.ObjectId, ref: 'User'},
    jefeTurno: { type : Schema.ObjectId, ref: 'User'},
    sMM: { type : Schema.ObjectId, ref: 'User'},
    clave: String
});
module.exports = mongoose.model('mmmaM18_15', mmmaM18_15Schema);