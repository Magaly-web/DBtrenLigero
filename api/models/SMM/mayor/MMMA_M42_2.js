'use strict'//usar novedades de JS

var mongoose = require('mongoose');//modulo de moongose
var Schema = mongoose.Schema;//Schema carga moongoose.Schema esto permite definir nuevos esquemas

var mmmaM42_2Schema = Schema({//esquema de la estructura que va a tener el formulario

    date_created: String,
    //datos tren
    noInspeccion: String,
    noTren: String,
    kilometraje: String,
    fechaInicio: String,
    fechaTerminacion: String,
    noSerie: String,
    
    operario: { type : Schema.ObjectId, ref: 'User'},

    palancaFrenoRev: Boolean,
    palancaFrenoLimp: Boolean,
    palancaFrenoEng: Boolean,
    palancaFrenoCamb: Boolean,
    observacionesPf: String,

    casquillosRev: Boolean,
    casquillosLimp: Boolean,
    casquillosEng: Boolean,
    casquillosCamb: Boolean,
    observacionesC: String,

    barraTraccionRev: Boolean,
    barraTraccionLimp: Boolean,
    barraTraccionEng: Boolean,
    barraTraccionCamb: Boolean,
    observacionesBt: String,

    casquillos2Rev: Boolean,
    casquillos2Limp: Boolean,
    casquillos2Eng: Boolean,
    casquillos2Camb: Boolean,
    observacionesC2: String,

    portazapatasRev: Boolean,
    portazapatasLimp: Boolean,
    portazapatasEng: Boolean,
    portazapatasCamb: Boolean,
    observacionesP: String,

    zapatasRev: Boolean,
    zapatasLimp: Boolean,
    zapatasEng: Boolean,
    zapatasCamb: Boolean,
    observacionesZ: String,

    bridaColganteRev: Boolean,
    bridaColganteLimp: Boolean,
    bridaColganteEng: Boolean,
    bridaColganteCamb: Boolean,
    observacionesBc: String,

    bulonRev: Boolean,
    bulonLimp: Boolean,
    bulonEng: Boolean,
    bulonCamb: Boolean,
    observacionesB: String,

    chapaSeguridadRev: Boolean,
    chapaSeguridadLimp: Boolean,
    chapaSeguridadEng: Boolean,
    chapaSeguridadCamb: Boolean,
    observacionesChs: String,

    pasadoresChavetasRev: Boolean,
    pasadoresChavetasLimp: Boolean,
    pasadoresChavetasEng: Boolean,
    pasadoresChavetasCamb: Boolean,
    observacionesPch: String,

    bulonRoscableRev: Boolean,
    bulonRoscableLimp: Boolean,
    bulonRoscableEng: Boolean,
    bulonRoscableCamb: Boolean,
    observacionesBr: String,

    resorteDiscoRev: Boolean,
    resorteDiscoLimp: Boolean,
    resorteDiscoEng: Boolean,
    resorteDiscoCamb: Boolean,
    observacionesRd: String,

    tuercaHexagonalM24Rev: Boolean,
    tuercaHexagonalM24Limp: Boolean,
    tuercaHexagonalM24Eng: Boolean,
    tuercaHexagonalM24Camb: Boolean,
    observacionesThM24: String,

    bulonRosacable2Rev: Boolean,
    bulonRosacable2Limp: Boolean,
    bulonRosacable2Eng: Boolean,
    bulonRosacable2Camb: Boolean,
    observacionesBr2: String,

    casquilloCortoRev: Boolean,
    casquilloCortoLimp: Boolean,
    casquilloCortoEng: Boolean,
    casquilloCortoCamb: Boolean,
    observacionesCc: String,

    casquilloConicoRev: Boolean,
    casquilloConicoLimp: Boolean,
    casquilloConicoEng: Boolean,
    casquilloConicoCamb: Boolean,
    observacionesCconico: String,

    casquilloLargoRev: Boolean,
    casquilloLargoLimp: Boolean,
    casquilloLargoEng: Boolean,
    casquilloLargoCamb: Boolean,
    observacionesCl: String,

    tuercaHexagonalM20Rev: Boolean,
    tuercaHexagonalM20Limp: Boolean,
    tuercaHexagonalM20Eng: Boolean,
    tuercaHexagonalM20Camb: Boolean,
    observacionesThM20: String,

    observaciones: String,

    supervisor: { type : Schema.ObjectId, ref: 'User'},
    jefeMM: { type : Schema.ObjectId, ref: 'User'},
    sMM: { type : Schema.ObjectId, ref: 'User'},
    clave: String
});
module.exports = mongoose.model('mmmaM42_2', mmmaM42_2Schema);