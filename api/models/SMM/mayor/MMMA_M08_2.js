'use strict'//usar novedades de JS

var mongoose = require('mongoose');//modulo de moongose
var Schema = mongoose.Schema;//Schema carga moongoose.Schema esto permite definir nuevos esquemas

var mmmaM08_2Schema = Schema({//esquema de la estructura que va a tener el formulario

    date_created: String,
    //datos tren
    noInspeccion: String,
    noTren: String,
    kilometraje: String,
    fechaInicio: String,
    fechaTerminacion: String,
    
    //1. MANTENIMIENTO DE FORROS LATERALES, UMBRALES Y ZOCLOS
    operario1: { type : Schema.ObjectId, ref: 'User'},
    operario2: { type : Schema.ObjectId, ref: 'User'},
    operario3: { type : Schema.ObjectId, ref: 'User'},

    //M1 LADO DERECHO
    limpiezaForrosM1d_1: Boolean,
    limpiezaForrosM1d_2: Boolean,
    limpiezaForrosM1d_3: Boolean,
    limpiezaForrosM1d_4: Boolean,
    limpiezaForrosM1d_5: Boolean,
    limpiezaForrosM1d_6: Boolean,
    limpiezaForrosM1d_7: Boolean,
    limpiezaForrosM1d_8: Boolean,
    limpiezaForrosM1d_9: Boolean,
    observacionesLfm1d: String,

    revisarEstadoFM1d_1: Boolean,
    revisarEstadoFM1d_2: Boolean,
    revisarEstadoFM1d_3: Boolean,
    revisarEstadoFM1d_4: Boolean,
    revisarEstadoFM1d_5: Boolean,
    revisarEstadoFM1d_6: Boolean,
    revisarEstadoFM1d_7: Boolean,
    revisarEstadoFM1d_8: Boolean,
    revisarEstadoFM1d_9: Boolean,
    observacionesRefm1d: String,

    //M1 LADO IZQUIERDO
    limpiezaForrosM1i_1: Boolean,
    limpiezaForrosM1i_2: Boolean,
    limpiezaForrosM1i_3: Boolean,
    limpiezaForrosM1i_4: Boolean,
    limpiezaForrosM1i_5: Boolean,
    limpiezaForrosM1i_6: Boolean,
    limpiezaForrosM1i_7: Boolean,
    limpiezaForrosM1i_8: Boolean,
    limpiezaForrosM1i_9: Boolean,
    observacionesLfm1i: String,

    revisarEstadoFM1i_1: Boolean,
    revisarEstadoFM1i_2: Boolean,
    revisarEstadoFM1i_3: Boolean,
    revisarEstadoFM1i_4: Boolean,
    revisarEstadoFM1i_5: Boolean,
    revisarEstadoFM1i_6: Boolean,
    revisarEstadoFM1i_7: Boolean,
    revisarEstadoFM1i_8: Boolean,
    revisarEstadoFM1i_9: Boolean,
    observacionesRefm1i: String,

    //M2  LADO DERECHO
    limpiezaForrosM2d_1: Boolean,
    limpiezaForrosM2d_2: Boolean,
    limpiezaForrosM2d_3: Boolean,
    limpiezaForrosM2d_4: Boolean,
    limpiezaForrosM2d_5: Boolean,
    limpiezaForrosM2d_6: Boolean,
    limpiezaForrosM2d_7: Boolean,
    limpiezaForrosM2d_8: Boolean,
    limpiezaForrosM2d_9: Boolean,
    observacionesLfm2d: String,

    revisarEstadoFM2d_1: Boolean,
    revisarEstadoFM2d_2: Boolean,
    revisarEstadoFM2d_3: Boolean,
    revisarEstadoFM2d_4: Boolean,
    revisarEstadoFM2d_5: Boolean,
    revisarEstadoFM2d_6: Boolean,
    revisarEstadoFM2d_7: Boolean,
    revisarEstadoFM2d_8: Boolean,
    revisarEstadoFM2d_9: Boolean,
    observacionesRefm2d: String,

    //M2  LADO IZQUIERDO
    limpiezaForrosM2i_1: Boolean,
    limpiezaForrosM2i_2: Boolean,
    limpiezaForrosM2i_3: Boolean,
    limpiezaForrosM2i_4: Boolean,
    limpiezaForrosM2i_5: Boolean,
    limpiezaForrosM2i_6: Boolean,
    limpiezaForrosM2i_7: Boolean,
    limpiezaForrosM2i_8: Boolean,
    limpiezaForrosM2i_9: Boolean,
    observacionesLfm2i: String,

    revisarEstadoFM2i_1: Boolean,
    revisarEstadoFM2i_2: Boolean,
    revisarEstadoFM2i_3: Boolean,
    revisarEstadoFM2i_4: Boolean,
    revisarEstadoFM2i_5: Boolean,
    revisarEstadoFM2i_6: Boolean,
    revisarEstadoFM2i_7: Boolean,
    revisarEstadoFM2i_8: Boolean,
    revisarEstadoFM2i_9: Boolean,
    observacionesRefm2i: String,

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
module.exports = mongoose.model('mmmaM08_2', mmmaM08_2Schema);