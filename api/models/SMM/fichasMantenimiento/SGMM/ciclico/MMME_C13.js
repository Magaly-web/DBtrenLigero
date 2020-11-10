'use strict'//usar novedades de JS

var mongoose = require('mongoose');//modulo de moongose
var Schema = mongoose.Schema;//Schema carga moongoose.Schema esto permite definir nuevos esquemas

var mmmeC13Schema = Schema({//esquema de la estructura que va a tener el formulario
    date_created: String,
    //datos tren
    noInspeccion: String,
    noTren: String,
    kilometraje: String,
    horaInicio: String,
    horaTerminacion: String,
    
    operarioM1: { type : Schema.ObjectId, ref: 'User'},
    operarioM2: { type : Schema.ObjectId, ref: 'User'},

    //TE-90 Y TE-95
    tornillosm1Rev: Boolean,
    tornillosm1Limp: Boolean,
    tornillosm1Camb: Boolean,
    tornillosm1Danios: Boolean,
    observacionesTm1: String,

    zoclosm1Rev: Boolean,
    zoclosm1Limp: Boolean,
    zoclosm1Danios: Boolean,
    observacionesZm1: String,

    correderasm1Rev: Boolean,
    correderasm1Limp: Boolean,
    correderasm1Danios: Boolean,
    correderasm1Asp: Boolean,
    observacionesCm1: String,

    tornillosm2Rev: Boolean,
    tornillosm2Limp: Boolean,
    tornillosm2Camb: Boolean,
    tornillosm2Danios: Boolean,
    observacionesTm2: String,

    zoclosm2Rev: Boolean,
    zoclosm2Limp: Boolean,
    zoclosm2Danios: Boolean,
    observacionesZm2: String,

    correderasm2Rev: Boolean,
    correderasm2Limp: Boolean,
    correderasm2Danios: Boolean,
    correderasm2Asp: Boolean,
    observacionesCm2: String,

    //TE-06
    pestillosM1Rev: Boolean,
    pestillosM1Limp: Boolean,
    pestillosM1Camb: Boolean,
    pestillosM1Danios: Boolean,
    observacionesPM1: String,

    zoclosM1Rev: Boolean,
    zoclosM1Limp: Boolean,
    zoclosM1Danios: Boolean,
    observacionesZM1: String,

    correderasM1Rev: Boolean,
    correderasM1Limp: Boolean,
    correderasM1Danios: Boolean,
    observacionesCM1: String,

    bisagrasM1Rev: Boolean,
    bisagrasM1Limp: Boolean,
    bisagrasM1Danios: Boolean,
    observacionesBM1: String,

    pestillosM2Rev: Boolean,
    pestillosM2Limp: Boolean,
    pestillosM2Camb: Boolean,
    pestillosM2Danios: Boolean,
    observacionesPM2: String,

    zoclosM2Rev: Boolean,
    zoclosM2Limp: Boolean,
    zoclosM2Danios: Boolean,
    observacionesZM2: String,

    correderasM2Rev: Boolean,
    correderasM2Limp: Boolean,
    correderasM2Danios: Boolean,
    observacionesCM2: String,

    bisagrasM2Rev: Boolean,
    bisagrasM2Limp: Boolean,
    bisagrasM2Danios: Boolean,
    observacionesBM2: String,

    observaciones: String,

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
module.exports = mongoose.model('mmmeC13', mmmeC13Schema);