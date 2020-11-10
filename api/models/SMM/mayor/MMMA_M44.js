'use strict'//usar novedades de JS

var mongoose = require('mongoose');//modulo de moongose
var Schema = mongoose.Schema;//Schema carga moongoose.Schema esto permite definir nuevos esquemas

var mmmaM44Schema = Schema({//esquema de la estructura que va a tener el formulario

    date_created: String,
    //datos tren
    noInspeccion: String,
    noTren: String,
    kilometraje: String,
    fechaInicio: String,
    fechaTerminacion: String,
    noSerie: String,
    
    operario: { type : Schema.ObjectId, ref: 'User'},

    limpiezaGralE1: Boolean,
    limpiezaGralE2: Boolean,
    observacionesLg: String,

    desarmadoRevE1: Boolean,
    desarmadoRevE2: Boolean,
    observacionesDr: String,

    cambioKitE1: Boolean,
    cambioKitE2: Boolean,
    observacionesCk: String,

    lubricacionE1: Boolean,
    lubricacionE2: Boolean,
    observacionesL: String,

    funcionamientoMontajeE1: Boolean,
    funcionamientoMontajeE2: Boolean,
    observacionesFm: String,

    pruebasConjuntoE1: Boolean,
    pruebasConjuntoE2: Boolean,
    observacionesPc: String,

    numeroE1: Boolean,
    numeroE2: Boolean,
    observacionesN: String,

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

    codigo21: String,
    desc21: String,
    cant21: String,
    noVale21: Number,
    observaciones21: String,

    codigo22: String,
    desc22: String,
    cant22: String,
    noVale22: Number,
    observaciones22: String,

    codigo23: String,
    desc23: String,
    cant23: String,
    noVale23: Number,
    observaciones23: String,

    codigo24: String,
    desc24: String,
    cant24: String,
    noVale24: Number,
    observaciones24: String,

    codigo25: String,
    desc25: String,
    cant25: String,
    noVale25: Number,
    observaciones25: String,

    codigo26: String,
    desc26: String,
    cant26: String,
    noVale26: Number,
    observaciones26: String,

    codigo27: String,
    desc27: String,
    cant27: String,
    noVale27: Number,
    observaciones27: String,

    codigo28: String,
    desc28: String,
    cant28: String,
    noVale28: Number,
    observaciones28: String,

    codigo29: String,
    desc29: String,
    cant29: String,
    noVale29: Number,
    observaciones29: String,

    codigo30: String,
    desc30: String,
    cant30: String,
    noVale30: Number,
    observaciones30: String,

    supervisor: { type : Schema.ObjectId, ref: 'User'},
    jefeMM: { type : Schema.ObjectId, ref: 'User'},
    sMM: { type : Schema.ObjectId, ref: 'User'},
    clave: String
});
module.exports = mongoose.model('mmmaM44', mmmaM44Schema);