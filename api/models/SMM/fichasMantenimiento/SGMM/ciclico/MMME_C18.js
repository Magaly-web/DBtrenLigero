'use strict'//usar novedades de JS

var mongoose = require('mongoose');//modulo de moongose
var Schema = mongoose.Schema;//Schema carga moongoose.Schema esto permite definir nuevos esquemas

var mmmeC18Schema = Schema({//esquema de la estructura que va a tener el formulario
    date_created: String,
    //datos tren
    noInspeccion: String,
    noTren: String,
    kilometraje: String,
    horaInicio: String,
    horaTerminacion: String,
    
    operario1: { type : Schema.ObjectId, ref: 'User'},
    operario2: { type : Schema.ObjectId, ref: 'User'},

    noRedAntM1: Number,
    noRedPostM1: Number,
    noRedAntM2: Number,
    noRedPostM2: Number,

    drenadoM1Ant: Boolean,
    drenadoM1Post: Boolean,
    drenadoM2Ant: Boolean,
    drenadoM2Post: Boolean,

    lavadoM1Ant: Boolean,
    lavadoM1Post: Boolean,
    lavadoM2Ant: Boolean,
    lavadoM2Post: Boolean,

    llenadoM1Ant: Boolean,
    llenadoM1Post: Boolean,
    llenadoM2Ant: Boolean,
    llenadoM2Post: Boolean,

    revisionM1Ant: Boolean,
    revisionM1Post: Boolean,
    revisionM2Ant: Boolean,
    revisionM2Post: Boolean,

    par75M1Ant: Boolean,
    par75M1Post: Boolean,
    par75M2Ant: Boolean,
    par75M2Post: Boolean,

    par180M1Ant: Boolean,
    par180M1Post: Boolean,
    par180M2Ant: Boolean,
    par180M2Post: Boolean,

    revisionPM1Ant: Boolean,
    revisionPM1Post: Boolean,
    revisionPM2Ant: Boolean,
    revisionPM2Post: Boolean,

    aceiteTE90_TE95M1Ant: String,
    aceiteTE90_TE95M1Post: String,
    aceiteTE90_TE95M2Ant: String,
    aceiteTE90_TE95M2Post: String,

    aceiteTE06M1Ant: String,
    aceiteTE06M1Post: String,
    aceiteTE06M2Ant: String,
    aceiteTE06M2Post: String,

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
    
    codigo15: String,
    desc15: String,
    cant15: String,
    noVale15: Number,
    
    codigo16: String,
    desc16: String,
    cant16: String,
    noVale16: Number,

    superviso: { type : Schema.ObjectId, ref: 'User'},
    jefeTurno: { type : Schema.ObjectId, ref: 'User'},
    sMM: { type : Schema.ObjectId, ref: 'User'},
    clave: String
});
module.exports = mongoose.model('mmmeC18', mmmeC18Schema);