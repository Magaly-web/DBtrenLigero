'use strict'//usar novedades de JS

var mongoose = require('mongoose');//modulo de moongose
var Schema = mongoose.Schema;//Schema carga moongoose.Schema esto permite definir nuevos esquemas

var mmmaM07_2Schema = Schema({//esquema de la estructura que va a tener el formulario

    date_created: String,
    //datos tren
    noInspeccion: String,
    noTren: String,
    kilometraje: String,
    fechaInicio: String,
    fechaTerminacion: String,
    
    //1. MANTENIMIENTO DE FORROS DE TECHO Y MOLDURAS
    operario1: { type : Schema.ObjectId, ref: 'User'},
    operario2: { type : Schema.ObjectId, ref: 'User'},

    //FORROS
    limpiezaFm1_1: Boolean,
    limpiezaFm1_2: Boolean,
    limpiezaFm1_3: Boolean,
    limpiezaFm1_4: Boolean,
    limpiezaFm2_1: Boolean,
    limpiezaFm2_2: Boolean,
    limpiezaFm2_3: Boolean,
    limpiezaFm2_4: Boolean,
    observacionesLf: String,

    revisarEm1_1: Boolean,
    revisarEm1_2: Boolean,
    revisarEm1_3: Boolean,
    revisarEm1_4: Boolean,
    revisarEm2_1: Boolean,
    revisarEm2_2: Boolean,
    revisarEm2_3: Boolean,
    revisarEm2_4: Boolean,
    observacionesRe: String,

    revisarZm1_1: Boolean,
    revisarZm1_2: Boolean,
    revisarZm1_3: Boolean,
    revisarZm1_4: Boolean,
    revisarZm2_1: Boolean,
    revisarZm2_2: Boolean,
    revisarZm2_3: Boolean,
    revisarZm2_4: Boolean,
    observacionesRz: String,

    aplicarSm1_1: Boolean,
    aplicarSm1_2: Boolean,
    aplicarSm1_3: Boolean,
    aplicarSm1_4: Boolean,
    aplicarSm2_1: Boolean,
    aplicarSm2_2: Boolean,
    aplicarSm2_3: Boolean,
    aplicarSm2_4: Boolean,
    observacionesAs: String,

    //MOLDURAS
    limpiezaMm1_1: Boolean,
    limpiezaMm1_2d: Boolean,
    limpiezaMm1_2i: Boolean,
    limpiezaMm1_3d: Boolean,
    limpiezaMm1_3i: Boolean,
    limpiezaMm1_4d: Boolean,
    limpiezaMm1_4i: Boolean,
    limpiezaMm1_5: Boolean,
    limpiezaMm1_Ld: Boolean,
    limpiezaMm1_Li: Boolean,
    limpiezaMm2_1: Boolean,
    limpiezaMm2_2d: Boolean,
    limpiezaMm2_2i: Boolean,
    limpiezaMm2_3d: Boolean,
    limpiezaMm2_3i: Boolean,
    limpiezaMm2_4d: Boolean,
    limpiezaMm2_4i: Boolean,
    limpiezaMm2_5: Boolean,
    limpiezaMm2_Ld: Boolean,
    limpiezaMm2_Li: Boolean,
    observacionesLm: String,

    revisarEstadoMm1_1: Boolean,
    revisarEstadoMm1_2d: Boolean,
    revisarEstadoMm1_2i: Boolean,
    revisarEstadoMm1_3d: Boolean,
    revisarEstadoMm1_3i: Boolean,
    revisarEstadoMm1_4d: Boolean,
    revisarEstadoMm1_4i: Boolean,
    revisarEstadoMm1_5: Boolean,
    revisarEstadoMm1_Ld: Boolean,
    revisarEstadoMm1_Li: Boolean,
    revisarEstadoMm2_1: Boolean,
    revisarEstadoMm2_2d: Boolean,
    revisarEstadoMm2_2i: Boolean,
    revisarEstadoMm2_3d: Boolean,
    revisarEstadoMm2_3i: Boolean,
    revisarEstadoMm2_4d: Boolean,
    revisarEstadoMm2_4i: Boolean,
    revisarEstadoMm2_5: Boolean,
    revisarEstadoMm2_Ld: Boolean,
    revisarEstadoMm2_Li: Boolean,
    observacionesRem: String,

    revisarElementosFm1_1: Boolean,
    revisarElementosFm1_2d: Boolean,
    revisarElementosFm1_2i: Boolean,
    revisarElementosFm1_3d: Boolean,
    revisarElementosFm1_3i: Boolean,
    revisarElementosFm1_4d: Boolean,
    revisarElementosFm1_4i: Boolean,
    revisarElementosFm1_5: Boolean,
    revisarElementosFm1_Ld: Boolean,
    revisarElementosFm1_Li: Boolean,
    revisarElementosFm2_1: Boolean,
    revisarElementosFm2_2d: Boolean,
    revisarElementosFm2_2i: Boolean,
    revisarElementosFm2_3d: Boolean,
    revisarElementosFm2_3i: Boolean,
    revisarElementosFm2_4d: Boolean,
    revisarElementosFm2_4i: Boolean,
    revisarElementosFm2_5: Boolean,
    revisarElementosFm2_Ld: Boolean,
    revisarElementosFm2_Li: Boolean,
    observacionesRef: String,

    aplicarSelladorFm1_1: Boolean,
    aplicarSelladorFm1_2d: Boolean,
    aplicarSelladorFm1_2i: Boolean,
    aplicarSelladorFm1_3d: Boolean,
    aplicarSelladorFm1_3i: Boolean,
    aplicarSelladorFm1_4d: Boolean,
    aplicarSelladorFm1_4i: Boolean,
    aplicarSelladorFm1_5: Boolean,
    aplicarSelladorFm1_Ld: Boolean,
    aplicarSelladorFm1_Li: Boolean,
    aplicarSelladorFm2_1: Boolean,
    aplicarSelladorFm2_2d: Boolean,
    aplicarSelladorFm2_2i: Boolean,
    aplicarSelladorFm2_3d: Boolean,
    aplicarSelladorFm2_3i: Boolean,
    aplicarSelladorFm2_4d: Boolean,
    aplicarSelladorFm2_4i: Boolean,
    aplicarSelladorFm2_5: Boolean,
    aplicarSelladorFm2_Ld: Boolean,
    aplicarSelladorFm2_Li: Boolean,
    observacionesAsf: String,

    observaciones: String,

    //MATERIAL UTILIZADO
    codigo1: String,
    desc1: String,
    cant1: String,
    noVale1: Number,
    observaciones1: String,

    codigo2: String,
    desc2: String,
    cant2: String,
    noVale2: Number,
    observaciones2: String,
    
    codigo3: String,
    desc3: String,
    cant3: String,
    noVale3: Number,
    observaciones3: String,

    codigo4: String,
    desc4: String,
    cant4: String,
    noVale4: Number,
    observaciones4: String,

    codigo5: String,
    desc5: String,
    cant5: String,
    noVale5: Number,
    observaciones5: String,
    
    codigo6: String,
    desc6: String,
    cant6: String,
    noVale6: Number,
    observaciones6: String,

    codigo7: String,
    desc7: String,
    cant7: String, 
    noVale7: Number,
    observaciones7: String,

    codigo8: String,
    desc8: String,
    cant8: String,
    noVale8: Number,
    observaciones8: String,

    codigo9: String,
    desc9: String,
    cant9: String,
    noVale9: Number,
    observaciones9: String,

    codigo10: String,
    desc10: String,
    cant10: String,
    noVale10: Number,
    observaciones10: String,

    codigo11: String,
    desc11: String,
    cant11: String,
    noVale11: Number,
    observaciones11: String,

    codigo12: String,
    desc12: String,
    cant12: String,
    noVale12: Number,
    observaciones12: String,

    codigo13: String,
    desc13: String,
    cant13: String,
    noVale13: Number,
    observaciones13: String,

    codigo14: String,
    desc14: String,
    cant14: String,
    noVale14: Number,
    observaciones14: String,

    codigo15: String,
    desc15: String,
    cant15: String,
    noVale15: Number,
    observaciones15: String,

    codigo16: String,
    desc16: String,
    cant16: String,
    noVale16: Number,
    observaciones16: String,

    codigo17: String,
    desc17: String,
    cant17: String,
    noVale17: Number,
    observaciones17: String,

    codigo18: String,
    desc18: String,
    cant18: String,
    noVale18: Number,
    observaciones18: String,

    codigo19: String,
    desc19: String,
    cant19: String,
    noVale19: Number,
    observaciones19: String,

    codigo20: String,
    desc20: String,
    cant20: String,
    noVale20: Number,
    observaciones20: String,

    supervisor: { type : Schema.ObjectId, ref: 'User'},
    jefeMM: { type : Schema.ObjectId, ref: 'User'},
    sMM: { type : Schema.ObjectId, ref: 'User'},
    clave: String
});
module.exports = mongoose.model('mmmaM07_2', mmmaM07_2Schema);