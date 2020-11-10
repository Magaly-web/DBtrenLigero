'use strict'//usar novedades de JS

var mongoose = require('mongoose');//modulo de moongose
var Schema = mongoose.Schema;//Schema carga moongoose.Schema esto permite definir nuevos esquemas

var mmmeC21_1Schema = Schema({//esquema de la estructura que va a tener el formulario
    date_created: String,
    //datos tren
    noInspeccion: String,
    noTren: String,
    kilometraje: String,
    horaInicio: String,
    horaTerminacion: String,
    
    operarioMtto: { type : Schema.ObjectId, ref: 'User'},
    operarioPruebas: { type : Schema.ObjectId, ref: 'User'},

    convertidorNoSerie: Boolean,
    convertidorLimp: Boolean,
    convertidorCambO: Boolean,
    convertidorLub: Boolean,
    convertidorAjust: Boolean,

    valvulaPNoSerie: Boolean,
    valvulaPLimp: Boolean,
    valvulaPCambO: Boolean,
    valvulaPLub: Boolean,

    valvulaRNoSerie: Boolean,
    valvulaRLimp: Boolean,
    valvulaRCambO: Boolean,
    valvulaRLub: Boolean,

    valvulaFUNoSerie: Boolean,
    valvulaFULimp: Boolean,
    valvulaFULub: Boolean,

    trasformadorPNoSerie: Boolean,
    trasformadorPLimp: Boolean,
    trasformadorPLub: Boolean,

    presostatoNoSerie: Boolean,
    presostatoLimp: Boolean,

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

    superviso: { type : Schema.ObjectId, ref: 'User'},
    jefeTurno: { type : Schema.ObjectId, ref: 'User'},
    sMM: { type : Schema.ObjectId, ref: 'User'},
    clave: String
});
module.exports = mongoose.model('mmmeC21_1', mmmeC21_1Schema);