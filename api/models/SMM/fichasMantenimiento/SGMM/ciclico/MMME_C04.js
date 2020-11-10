'use strict'//usar novedades de JS

var mongoose = require('mongoose');//modulo de moongose
var Schema = mongoose.Schema;//Schema carga moongoose.Schema esto permite definir nuevos esquemas

var mmmeC04Schema = Schema({//esquema de la estructura que va a tener el formulario
    date_created: String,
    //datos tren
    noInspeccion: String,
    noTren: String,
    kilometraje: String,
    horaInicio: String,
    horaTerminacion: String,
    
    operario: { type : Schema.ObjectId, ref: 'User'},

    //BOGIE M1
    bm1dAma: Number,
    bm1dA1: Number,
    bm1dA1_5: Number,
    bm1dA2: Number,
    bm1dA2_5: Number,
    bm1dA3: Number,
    bm1dA4: Number,
    bm1dA5: Number,

    bm1dPma: Number,
    bm1dP1: Number,
    bm1dP1_5: Number,
    bm1dP2: Number,
    bm1dP2_5: Number,
    bm1dP3: Number,
    bm1dP4: Number,
    bm1dP5: Number,

    bm1iAma: Number,
    bm1iA1: Number,
    bm1iA1_5: Number,
    bm1iA2: Number,
    bm1iA2_5: Number,
    bm1iA3: Number,
    bm1iA4: Number,
    bm1iA5: Number,

    bm1iPma: Number,
    bm1iP1: Number,
    bm1iP1_5: Number,
    bm1iP2: Number,
    bm1iP2_5: Number,
    bm1iP3: Number,
    bm1iP4: Number,
    bm1iP5: Number,

    //BOGIE REMOLQUE
    brdM1ma: Number,
    brdM11: Number,
    brdM11_5: Number,
    brdM12: Number,
    brdM12_5: Number,
    brdM13: Number,
    brdM14: Number,
    brdM15: Number,

    brdM2ma: Number,
    brdM21: Number,
    brdM21_5: Number,
    brdM22: Number,
    brdM22_5: Number,
    brdM23: Number,
    brdM24: Number,
    brdM25: Number,

    briM1ma: Number,
    briM11: Number,
    briM11_5: Number,
    briM12: Number,
    briM12_5: Number,
    briM13: Number,
    briM14: Number,
    briM15: Number,

    briM2ma: Number,
    briM21: Number,
    briM21_5: Number,
    briM22: Number,
    briM22_5: Number,
    briM23: Number,
    briM24: Number,
    briM25: Number,

    //BOGIE M2
    bm2dAma: Number,
    bm2dA1: Number,
    bm2dA1_5: Number,
    bm2dA2: Number,
    bm2dA2_5: Number,
    bm2dA3: Number,
    bm2dA4: Number,
    bm2dA5: Number,

    bm2dPma: Number,
    bm2dP1: Number,
    bm2dP1_5: Number,
    bm2dP2: Number,
    bm2dP2_5: Number,
    bm2dP3: Number,
    bm2dP4: Number,
    bm2dP5: Number,

    bm2iAma: Number,
    bm2iA1: Number,
    bm2iA1_5: Number,
    bm2iA2: Number,
    bm2iA2_5: Number,
    bm2iA3: Number,
    bm2iA4: Number,
    bm2iA5: Number,

    bm2iPma: Number,
    bm2iP1: Number,
    bm2iP1_5: Number,
    bm2iP2: Number,
    bm2iP2_5: Number,
    bm2iP3: Number,
    bm2iP4: Number,
    bm2iP5: Number,

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

    superviso: { type : Schema.ObjectId, ref: 'User'},
    jefeTurno: { type : Schema.ObjectId, ref: 'User'},
    sMM: { type : Schema.ObjectId, ref: 'User'},
    clave: String
});
module.exports = mongoose.model('mmmeC04', mmmeC04Schema);