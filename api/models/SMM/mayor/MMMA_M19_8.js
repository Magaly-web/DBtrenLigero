'use strict'//usar novedades de JS

var mongoose = require('mongoose');//modulo de moongose
var Schema = mongoose.Schema;//Schema carga moongoose.Schema esto permite definir nuevos esquemas

var mmmaM19_8Schema = Schema({//esquema de la estructura que va a tener el formulario

    date_created: String,
    //datos tren
    noInspeccion: String,
    noTren: String,
    kilometraje: String,
    fechaInicio: String,
    fechaTerminacion: String,
    noSerie: String,
    
    operario: { type : Schema.ObjectId, ref: 'User'},

    limpiezaGral: Boolean,
    observacionesLg: String,

    desarmadoRev: Boolean,
    observacionesDr: String,

    pruebasFuncionamiento: Boolean,
    observacionesPf: String,

    revisionFugas: Boolean,
    observacionesRf: String,

    resultadoAjusteTE90A: Number,
    resultadoAjusteTE95A: Number,

    resultadoAjusteTE90B: Number,
    resultadoAjusteTE95B: Number,

    resultadoAjusteTE90C: Number,
    resultadoAjusteTE95C: Number,

    observaciones: String,

    supervisor: { type : Schema.ObjectId, ref: 'User'},
    jefeMM: { type : Schema.ObjectId, ref: 'User'},
    sMM: { type : Schema.ObjectId, ref: 'User'},
    clave: String
});
module.exports = mongoose.model('mmmaM19_8', mmmaM19_8Schema);