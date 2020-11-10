'use strict'//usar novedades de JS

var mongoose = require('mongoose');//modulo de moongose
var Schema = mongoose.Schema;//Schema carga moongoose.Schema esto permite definir nuevos esquemas

var mmmaM18_5Schema = Schema({//esquema de la estructura que va a tener el formulario

    date_created: String,
    //datos tren
    noInspeccion: String,
    noTren: String,
    kilometraje: String,
    fechaInicio: String,
    fechaTerminacion: String,
    noSerie: String,
    
    operario: { type : Schema.ObjectId, ref: 'User'},

    cuerpoBloqueR: Boolean,
    cuerpoBloqueL: Boolean,
    cuerpoBloqueE: Boolean,
    cuerpoBloqueC: Boolean,
    observacionesCb: String,

    tapaR: Boolean,
    tapaL: Boolean,
    tapaE: Boolean,
    tapaC: Boolean,
    observacionesT: String,

    rotorPrincipalR: Boolean,
    rotorPrincipalL: Boolean,
    rotorPrincipalE: Boolean,
    rotorPrincipalC: Boolean,
    observacionesRp: String,

    rotorAuxiliarR: Boolean,
    rotorAuxiliarL: Boolean,
    rotorAuxiliarE: Boolean,
    rotorAuxiliarC: Boolean,
    observacionesRa: String,

    unionRoscadaR: Boolean,
    unionRoscadaL: Boolean,
    unionRoscadaE: Boolean,
    unionRoscadaC: Boolean,
    observacionesUr: String,

    observaciones: String,

    //MATERIAL UTILIZADO
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
    
    codigo19: String,
    desc19: String,
    cant19: String,
    noVale19: Number,
    
    codigo20: String,
    desc20: String,
    cant20: String,
    noVale20: Number,
    
    codigo21: String,
    desc21: String,
    cant21: String,
    noVale21: Number,
    
    codigo22: String,
    desc22: String,
    cant22: String,
    noVale22: Number,
    
    codigo23: String,
    desc23: String,
    cant23: String,
    noVale23: Number,
    
    codigo24: String,
    desc24: String,
    cant24: String,
    noVale24: Number,
    
    codigo25: String,
    desc25: String,
    cant25: String,
    noVale25: Number,

    supervisor: { type : Schema.ObjectId, ref: 'User'},
    jefeMM: { type : Schema.ObjectId, ref: 'User'},
    sMM: { type : Schema.ObjectId, ref: 'User'},
    clave: String
});
module.exports = mongoose.model('mmmaM18_5', mmmaM18_5Schema);