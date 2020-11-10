'use strict'//usar novedades de JS

var mongoose = require('mongoose');//modulo de moongose
var Schema = mongoose.Schema;//Schema carga moongoose.Schema esto permite definir nuevos esquemas

var mmmeC09Schema = Schema({//esquema de la estructura que va a tener el formulario
    date_created: String,
    //datos tren
    noInspeccion: String,
    noTren: String,
    kilometraje: String,
    horaInicio: String,
    horaTerminacion: String,
    
    operarioM1Izq: { type : Schema.ObjectId, ref: 'User'},
    operarioM1Der: { type : Schema.ObjectId, ref: 'User'},
    operarioEngrasado: { type : Schema.ObjectId, ref: 'User'},

    operarioM2Izq: { type : Schema.ObjectId, ref: 'User'},
    operarioM2Der: { type : Schema.ObjectId, ref: 'User'},
    operarioEngrasado2: { type : Schema.ObjectId, ref: 'User'},

    limpiezam1D1: Boolean,
    limpiezam1D2: Boolean,
    limpiezam1D3: Boolean,
    limpiezam1I1: Boolean,
    limpiezam1I2: Boolean,
    limpiezam1I3: Boolean,
    limpiezam2D1: Boolean,
    limpiezam2D2: Boolean,
    limpiezam2D3: Boolean,
    limpiezam2I1: Boolean,
    limpiezam2I2: Boolean,
    limpiezam2I3: Boolean,

    revisionm1D1: Boolean,
    revisionm1D2: Boolean,
    revisionm1D3: Boolean,
    revisionm1I1: Boolean,
    revisionm1I2: Boolean,
    revisionm1I3: Boolean,
    revisionm2D1: Boolean,
    revisionm2D2: Boolean,
    revisionm2D3: Boolean,
    revisionm2I1: Boolean,
    revisionm2I2: Boolean,
    revisionm2I3: Boolean,

    lubricacionm1D1: Boolean,
    lubricacionm1D2: Boolean,
    lubricacionm1D3: Boolean,
    lubricacionm1I1: Boolean,
    lubricacionm1I2: Boolean,
    lubricacionm1I3: Boolean,
    lubricacionm2D1: Boolean,
    lubricacionm2D2: Boolean,
    lubricacionm2D3: Boolean,
    lubricacionm2I1: Boolean,
    lubricacionm2I2: Boolean,
    lubricacionm2I3: Boolean,

    limpiezaDm1D1: Boolean,
    limpiezaDm1D2: Boolean,
    limpiezaDm1D3: Boolean,
    limpiezaDm1I1: Boolean,
    limpiezaDm1I2: Boolean,
    limpiezaDm1I3: Boolean,
    limpiezaDm2D1: Boolean,
    limpiezaDm2D2: Boolean,
    limpiezaDm2D3: Boolean,
    limpiezaDm2I1: Boolean,
    limpiezaDm2I2: Boolean,
    limpiezaDm2I3: Boolean,

    limpiezaBm1D1: Boolean,
    limpiezaBm1D2: Boolean,
    limpiezaBm1D3: Boolean,
    limpiezaBm1I1: Boolean,
    limpiezaBm1I2: Boolean,
    limpiezaBm1I3: Boolean,
    limpiezaBm2D1: Boolean,
    limpiezaBm2D2: Boolean,
    limpiezaBm2D3: Boolean,
    limpiezaBm2I1: Boolean,
    limpiezaBm2I2: Boolean,
    limpiezaBm2I3: Boolean,

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

    superviso: { type : Schema.ObjectId, ref: 'User'},
    jefeTurno: { type : Schema.ObjectId, ref: 'User'},
    sMM: { type : Schema.ObjectId, ref: 'User'},
    clave: String
});
module.exports = mongoose.model('mmmeC09', mmmeC09Schema);