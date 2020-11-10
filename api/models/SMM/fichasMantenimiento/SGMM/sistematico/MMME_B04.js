'use strict'//usar novedades de JS

var mongoose = require('mongoose');//modulo de moongose
var Schema = mongoose.Schema;//Schema carga moongoose.Schema esto permite definir nuevos esquemas

var mmmeB04Schema = Schema({//esquema de la estructura que va a tener el formulario
    date_created: String,
    //datos tren
    noInspeccion: String,
    noTren: String,
    kilometraje: String,
    horaInicio: String,
    horaTerminacion: String,
    
    operario: { type : Schema.ObjectId, ref: 'User'},

    noSerie: Number,
    horasTE06: Number,
    observacion: String,

    radiadorLimp: Boolean,
    radiadorInsp: Boolean,
    radiadorAp: Boolean,
    observacionesR: String,

    cuerpoMCPLimp: Boolean,
    cuerpoMCPInsp: Boolean,
    observacionesCmcp: String,

    tuberiaGLimp: Boolean,
    tuberiaGInsp: Boolean,
    tuberiaGAp: Boolean,
    observacionesTg: String,

    bayonetaLimp: Boolean,
    bayonetaInsp: Boolean,
    bayonetaAp: Boolean,
    observacionesB: String,

    filtroALimp: Boolean,
    filtroAInsp: Boolean,
    observacionesFa: String,

    conexionesELimp: Boolean,
    conexionesEInsp: Boolean,
    conexionesEAp: Boolean,
    observacionesCe: String,

    tapasCLimp: Boolean,
    tapasCInsp: Boolean,
    tapasCAp: Boolean,
    observacionesTc: String,

    valvulaRLimp: Boolean,
    valvulaRInsp: Boolean,
    valvulaRAp: Boolean,
    observacionesVr: String,

    valvulaDLimp: Boolean,
    valvulaDInsp: Boolean,
    valvulaDAp: Boolean,
    observacionesVd: String,

    platoALimp: Boolean,
    platoAInsp: Boolean,
    platoAAp: Boolean,
    observacionesPa: String,

    carroceriaLimp: Boolean,
    carroceriaInsp: Boolean,
    carroceriaAp: Boolean,
    observacionesC: String,

    fijacionBLimp: Boolean,
    fijacionBInsp: Boolean,
    fijacionBAp: Boolean,
    observacionesFb: String,

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
    
    codigo7: String,
    desc7: String,
    cant7: String, 
    noVale7: Number,
    
    codigo8: String,
    desc8: String,
    cant8: String,
    noVale8: Number,
    
    codigo9: String,
    desc9: String,
    cant9: String,
    noVale9: Number,
    
    codigo10: String,
    desc10: String,
    cant10: String,
    noVale10: Number,
    
    codigo11: String,
    desc11: String,
    cant11: String,
    noVale11: Number,

    codigo12: String,
    desc12: String,
    cant12: String,
    noVale12: Number,

    superviso: { type : Schema.ObjectId, ref: 'User'},
    jefeTurno: { type : Schema.ObjectId, ref: 'User'},
    sMM: { type : Schema.ObjectId, ref: 'User'},
    clave: String
});
module.exports = mongoose.model('mmmeB04', mmmeB04Schema);