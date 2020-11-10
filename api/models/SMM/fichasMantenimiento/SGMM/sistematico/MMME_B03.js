'use strict'//usar novedades de JS

var mongoose = require('mongoose');//modulo de moongose
var Schema = mongoose.Schema;//Schema carga moongoose.Schema esto permite definir nuevos esquemas

var mmmeB03Schema = Schema({//esquema de la estructura que va a tener el formulario
    date_created: String,
    //datos tren
    noInspeccion: String,
    noTren: String,
    kilometraje: String,
    horaInicio: String,
    horaTerminacion: String,
    
    operario: { type : Schema.ObjectId, ref: 'User'},

    noSerie: Number,
    dimAnt: Number,
    dimPost: Number,
    cuemoD: Boolean,
    carbonF: Boolean,
    dimensionM: Boolean,
    otros: Boolean,
    obs: String,

    articulacionesL: Boolean,
    articulacionesE: Boolean,
    articulacionesT: Boolean,
    observacionesA: String,

    resortesL: Boolean,
    resortesE: Boolean,
    resortesT: Boolean,
    observacionesR: String,

    conexionesFL: Boolean,
    conexionesFE: Boolean,
    conexionesFC: Boolean,
    conexionesFT: Boolean,
    observacionesCf: String,

    dispositivoSL: Boolean,
    dispositivoSE: Boolean,
    dispositivoSC: Boolean,
    dispositivoST: Boolean,
    observacioneDs: String,

    bastidorL: Boolean,
    bastidorT: Boolean,
    observacionesB: String,

    ejeAL: Boolean,
    ejeAT: Boolean,
    observacionesEa: String,

    clavijaAL: Boolean,
    clavijaAT: Boolean,
    observacionesCa: String,

    carbonesAL: Boolean,
    carbonesAC: Boolean,
    carbonesAT: Boolean,
    observacionesCarquet: String,

    cuernosEL: Boolean,
    cuernosEC: Boolean,
    cuernosET: Boolean,
    observacionesCe: String,

    torretasm1m2L: Boolean,
    torretasm1m2E: Boolean,
    torretasm1m2C: Boolean,
    torretasm1m2T: Boolean,
    observacionesTm1m2: String,

    cableadoT: Boolean,
    observacionesCt: String,

    rotulaAL: Boolean,
    rotulaAE: Boolean,
    rotulaAC: Boolean,
    observacionesRa: String, 
    
    distuntorEL: Boolean,
    distuntorET: Boolean,
    observacionesDe: String,

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
    
    codigo15: String,
    desc15: String,
    cant15: String,
    noVale15: Number,
    
    codigo16: String,
    desc16: String,
    cant16: String,
    noVale16: Number,

    codigo17: String,
    desc17: String,
    cant17: String,
    noVale17: Number,

    codigo18: String,
    desc18: String,
    cant18: String,
    noVale18: Number,

    superviso: { type : Schema.ObjectId, ref: 'User'},
    jefeTurno: { type : Schema.ObjectId, ref: 'User'},
    sMM: { type : Schema.ObjectId, ref: 'User'},
    clave: String
});
module.exports = mongoose.model('mmmeB03', mmmeB03Schema);