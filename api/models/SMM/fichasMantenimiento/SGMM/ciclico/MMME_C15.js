'use strict'//usar novedades de JS

var mongoose = require('mongoose');//modulo de moongose
var Schema = mongoose.Schema;//Schema carga moongoose.Schema esto permite definir nuevos esquemas

var mmmeC15Schema = Schema({//esquema de la estructura que va a tener el formulario
    date_created: String,
    //datos tren
    noInspeccion: String,
    noTren: String,
    kilometraje: String,
    horaInicio: String,
    horaTerminacion: String,
    
    operario1: { type : Schema.ObjectId, ref: 'User'},
    operario2: { type : Schema.ObjectId, ref: 'User'},

    filtroCamb: Boolean,
    observacionesF: String,

    valvulaLimp: Boolean,
    valvulaInsp: Boolean,
    valvulaAjust: Boolean,
    valvulaCamb: Boolean,
    observacionesV: String,

    //SEPARADOR DE ACEITE
    cuerpoCLimp: Boolean,
    cuerpoCInsp: Boolean,
    observacionesCc: String,

    elementoCamb: Boolean,
    observacionesE: String,

    valvulaRLimp: Boolean,
    valvulaRInsp: Boolean,
    valvulaRAjust: Boolean,
    valvulaRCamb: Boolean,
    observacionesVr: String,

    valvulaSLimp: Boolean,
    valvulaSInsp: Boolean,
    valvulaSAjust: Boolean,
    valvulaSCamb: Boolean,
    observacionesVs: String,

    mirillaNaLimp: Boolean,
    milillaNaInsp: Boolean,
    observacionesMna: String,

    mirillaALimp: Boolean,
    mirillaAInsp: Boolean,
    observacionesMa: String,

    //OTROS
    radiadorLimp: Boolean,
    radiadorInsp: Boolean,
    radiadorAjust: Boolean,
    observacionesR: String,

    cartuchoLub: Boolean,
    cartuchoCamb: Boolean,
    observacionesC: String,

    interruptorLimp: Boolean,
    interruptorInsp: Boolean,
    interruptorAjust: Boolean,
    interruptorCamb: Boolean,
    observacionesI: String,

    acoplamientoLimp: Boolean,
    acoplamientoInsp: Boolean,
    acoplamientoAjust: Boolean,
    acoplamientoCamb: Boolean,
    observacionesA: String,

    cuerpoULimp: Boolean,
    cuerpoUInsp: Boolean,
    cuerpoUAjust: Boolean,
    cuerpoUCamb: Boolean,
    observacionesCu: String,

    cuerpoBLimp: Boolean,
    cuerpoBInsp: Boolean,
    cuerpoBAjust: Boolean,
    cuerpoBCamb: Boolean,
    observacionesCb: String,

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
    
    codigo13: String,
    desc13: String,
    cant13: String,
    noVale13: Number,
    
    codigo14: String,
    desc14: String,
    cant14: String,
    noVale14: Number,

    superviso: { type : Schema.ObjectId, ref: 'User'},
    jefeTurno: { type : Schema.ObjectId, ref: 'User'},
    sMM: { type : Schema.ObjectId, ref: 'User'},
    clave: String
});
module.exports = mongoose.model('mmmeC15', mmmeC15Schema);