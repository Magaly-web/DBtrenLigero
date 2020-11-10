'use strict'//usar novedades de JS

var mongoose = require('mongoose');//modulo de moongose
var Schema = mongoose.Schema;//Schema carga moongoose.Schema esto permite definir nuevos esquemas

var mmmaM05_2Schema = Schema({//esquema de la estructura que va a tener el formulario

    date_created: String,
    //datos tren
    noInspeccion: String,
    noTren: String,
    kilometraje: String,
    fechaInicio: String,
    fechaTerminacion: String,
    
    //1. DESMONTAJE DE PUERTA PARED DIVISORA
    operario1: { type : Schema.ObjectId, ref: 'User'},
    operario2: { type : Schema.ObjectId, ref: 'User'},

    quitarTm1: Boolean,
    quitarTm2: Boolean,
    observacionesQt: String,

    aflojarRm1: Boolean,
    aflojarRm2: Boolean,
    observacionesAr: String,

    desmontarPm1: Boolean,
    desmontarPm2: Boolean,
    observacionesDp: String,

    //2. MANTENIMIENTO DE PUERTA PARED DIVISORA
    operario3: { type : Schema.ObjectId, ref: 'User'},
    operario4: { type : Schema.ObjectId, ref: 'User'},
    operario5: { type : Schema.ObjectId, ref: 'User'},

    aflojarRTBM1: Boolean,
    aflojarRTBM2: Boolean,
    observacionesArtb: String,

    aflojarRTCHM1: Boolean,
    aflojarRTCHM2: Boolean,
    observacionesArtch: String,

    aflojarRTCM1: Boolean,
    aflojarRTCM2: Boolean,
    observacionesArtc: String,

    desarmadoM1: Boolean,
    desarmadoM2: Boolean,
    observacionesD: String,

    preparacionAM1: Boolean,
    preparacionAM2: Boolean,
    observacionesPa: String,

    desarmadoLM1: Boolean,
    desarmadoLM2: Boolean,
    observacionesDl: String,

    reparacionBM1: Boolean,
    reparacionBM2: Boolean,
    observacionesRb: String,

    limpiezaFM1: Boolean,
    limpiezaFM2: Boolean,
    observacionesLf: String,

    montajeCHM1: Boolean,
    montajeCHM2: Boolean,
    observacionesMch: String,

    montajeCM1: Boolean,
    montajeCM2: Boolean,
    observacionesMc: String,

    //3. MONTAJE DE PUERTA PARED DIVISORA
    operario3: { type : Schema.ObjectId, ref: 'User'},

    montarPm1: Boolean,
    montarPm2: Boolean,
    observacionesMp: String,
    
    colocarPm1: Boolean,
    colocarPm2: Boolean,
    observacionesCp: String,

    aplicarTm1: Boolean,
    aplicarTm2: Boolean,
    observacionesAt: String,

    ajustarPm1: Boolean,
    ajustarPm2: Boolean,
    observacionesAp: String,

    ajustarCm1: Boolean,
    ajustarCm2: Boolean,
    observacionesAc: String,

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

    supervisor: { type : Schema.ObjectId, ref: 'User'},
    jefeMM: { type : Schema.ObjectId, ref: 'User'},
    sMM: { type : Schema.ObjectId, ref: 'User'},
    clave: String
});
module.exports = mongoose.model('mmmaM05_2', mmmaM05_2Schema);