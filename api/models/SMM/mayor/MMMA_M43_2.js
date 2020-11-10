'use strict'//usar novedades de JS

var mongoose = require('mongoose');//modulo de moongose
var Schema = mongoose.Schema;//Schema carga moongoose.Schema esto permite definir nuevos esquemas

var mmmaM43_2Schema = Schema({//esquema de la estructura que va a tener el formulario

    date_created: String,
    //datos tren
    noInspeccion: String,
    noTren: String,
    kilometraje: String,
    fechaInicio: String,
    fechaTerminacion: String,
    noSerie: String,
    
    operario: { type : Schema.ObjectId, ref: 'User'},

    palancaVastRev: Boolean,
    palancaVastLimp: Boolean,
    palancaVastEng: Boolean,
    palancaVastCamb: Boolean,
    observacionesPv: String,

    casquillosRev: Boolean,
    casquillosLimp: Boolean,
    casquillosEng: Boolean,
    casquillosCamb: Boolean,
    observacionesC: String,

    palancaPuntoRev: Boolean,
    palancaPuntoLimp: Boolean,
    palancaPuntoEng: Boolean,
    palancaPuntoCamb: Boolean,
    observacionesPp: String,

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

    barraTraccionRev: Boolean,
    barraTraccionLimp: Boolean,
    barraTraccionEng: Boolean,
    barraTraccionCamb: Boolean,
    observacionesBt: String,

    casquillos3Rev: Boolean,
    casquillos3Limp: Boolean,
    casquillos3Eng: Boolean,
    casquillos3Camb: Boolean,
    observacionesC3: String,

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

    casquillos4Rev: Boolean,
    casquillos4Limp: Boolean,
    casquillos4Eng: Boolean,
    casquillos4Camb: Boolean,
    observacionesC4: String,

    soporteRev: Boolean,
    soporteLimp: Boolean,
    soporteEng: Boolean,
    soporteCamb: Boolean,
    observacionesS: String,

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

    tornilloPivoteRev: Boolean,
    tornilloPivoteLimp: Boolean,
    tornilloPivoteEng: Boolean,
    tornilloPivoteCamb: Boolean,
    observacionesTp: String,

    arandelaSegRev: Boolean,
    arandelaSegLimp: Boolean,
    arandelaSegEng: Boolean,
    arandelaSegCamb: Boolean,
    observacionesAs: String,

    guiaControlRev: Boolean,
    guiaControlLimp: Boolean,
    guiaControlEng: Boolean,
    guiaControlCamb: Boolean,
    observacionesGc: String,

    tornilloHexagonalRev: Boolean,
    tornilloHexagonalLimp: Boolean,
    tornilloHexagonalEng: Boolean,
    tornilloHexagonalCamb: Boolean,
    observacionesTh: String,

    soporteCojineteRev: Boolean,
    soporteCojineteLimp: Boolean,
    soporteCojineteEng: Boolean,
    soporteCojineteCamb: Boolean,
    observacionesSc: String,

    bulonRoscableRev: Boolean,
    bulonRoscableLimp: Boolean,
    bulonRoscableEng: Boolean,
    bulonRoscableCamb: Boolean,
    observacionesBr: String,

    bulonRosacable2Rev: Boolean,
    bulonRosacable2Limp: Boolean,
    bulonRosacable2Eng: Boolean,
    bulonRosacable2Camb: Boolean,
    observacionesBr2: String,

    tuercaHexagonalRev: Boolean,
    tuercaHexagonalLimp: Boolean,
    tuercaHexagonalEng: Boolean,
    tuercaHexagonalCamb: Boolean,
    observacionesTuercaH: String,

    observaciones: String,

    supervisor: { type : Schema.ObjectId, ref: 'User'},
    jefeMM: { type : Schema.ObjectId, ref: 'User'},
    sMM: { type : Schema.ObjectId, ref: 'User'},
    clave: String
});
module.exports = mongoose.model('mmmaM43_2', mmmaM43_2Schema);