'use strict'//usar novedades de JS

var mongoose = require('mongoose');//modulo de moongose
var Schema = mongoose.Schema;//Schema carga moongoose.Schema esto permite definir nuevos esquemas

var mmmeB01Schema = Schema({//esquema de la estructura que va a tener el formulario
    date_created: String,
    //datos tren
    noInspeccion: String,
    noTren: String,
    kilometraje: String,
    horaInicio: String,
    horaTerminacion: String,
    
    operario: { type : Schema.ObjectId, ref: 'User'},

    resistenciasS: Boolean,
    resistenciasL: Boolean,
    observacionesR: String,

    convertidorTS: Boolean,
    convertidorTL: Boolean,
    observacionesCt: String,

    convertidorAS: Boolean,
    convertidorAL: Boolean,
    observacionesCa: String,

    cajaCAPS: Boolean,
    cajaCAPL: Boolean,
    observacionesCAP: String,

    disyuntorS: Boolean,
    disyuntorL: Boolean,
    observacionesD: String,

    cajaHVS: Boolean,
    cajaHVL: Boolean,
    observacionesHV: String,

    cajaCCATL: Boolean,
    observacionesCCAT: String,

    convertidorCTL: Boolean,
    observacionesCT: String,

    cofre1S: Boolean,
    cofre1L: Boolean,
    observacionesC1: String,

    cofre2S: Boolean,
    cofre2L: Boolean,
    observacionesC2: String,

    cofre3S: Boolean,
    cofre3L: Boolean,
    observacionesC3: String,

    bogiem1S: Boolean,
    bogiem1L: Boolean,
    bogiem1R: Boolean,
    observacionesBm1: String,

    bogierS: Boolean,
    bogierL: Boolean,
    bogierR: Boolean,
    observacionesBr: String,

    bogiem2S: Boolean,
    bogiem2L: Boolean,
    bogiem2R: Boolean,
    observacionesBm2: String,

    motocompresorS: Boolean,
    motocompresorL: Boolean,
    motocompresorR: Boolean,
    observacionesM: String,

    acopladorm1S: Boolean,
    acopladorm1L: Boolean,
    acopladorm1R: Boolean,
    observacionesAm1: String,

    acopladorm2S: Boolean,
    acopladorm2L: Boolean,
    acopladorm2R: Boolean,
    observacionesAm2: String,

    bajoBm1S: Boolean,
    bajoBm1L: Boolean,
    bajoBm1R: Boolean,
    observacionesBbm1: String,

    bajoAS: Boolean,
    bajoAL: Boolean,
    bajoAR: Boolean,
    observacionesBa: String,

    bajoBm2S: Boolean,
    bajoBm2L: Boolean,
    bajoBm2R: Boolean,
    observacionesBbm2: String,

    busquedaFm1R: Boolean,
    observacionesBfm1: String,

    busquedaFrR: Boolean,
    observacionesBfr: String,

    busquedaFm2R: Boolean,
    observacionesBfm2: String,

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

    codigo4: String,
    desc4: String,
    cant4: String,
    noVale4: Number,

    codigo5: String,
    desc5: String,
    cant5: String,
    noVale5: Number,
    
    codigo6: String,
    desc6: String,
    cant6: String,
    noVale6: Number,

    superviso: { type : Schema.ObjectId, ref: 'User'},
    jefeTurno: { type : Schema.ObjectId, ref: 'User'},
    sMM: { type : Schema.ObjectId, ref: 'User'},
    clave: String
});
module.exports = mongoose.model('mmmeB01', mmmeB01Schema);