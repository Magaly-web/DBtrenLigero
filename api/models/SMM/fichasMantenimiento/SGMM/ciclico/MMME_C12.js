'use strict'//usar novedades de JS

var mongoose = require('mongoose');//modulo de moongose
var Schema = mongoose.Schema;//Schema carga moongoose.Schema esto permite definir nuevos esquemas

var mmmeC12Schema = Schema({//esquema de la estructura que va a tener el formulario
    date_created: String,
    //datos tren
    noInspeccion: String,
    noTren: String,
    kilometraje: String,
    horaInicio: String,
    horaTerminacion: String,
    
    operario: { type : Schema.ObjectId, ref: 'User'},

    //PARA TE-90 Y TE-95
    mitadSRev: Boolean,
    mitadSLimp: Boolean,
    mitadSaExtend: Boolean,
    mitadSCamb: Boolean,
    observacionesMs: String,

    tornilloHRev: Boolean,
    tornilloHLimp: Boolean,
    tornilloHCamb: Boolean,
    observacionesTh: String,

    arandelaRev: Boolean,
    arandelaLimp: Boolean,
    arandelaCamb: Boolean,
    observacionesA: String,

    chapaRev: Boolean,
    chapaLimp: Boolean,
    chapaCamb: Boolean,
    observacionesCh: String,

    tuberiaRev: Boolean,
    tuberiaLimp: Boolean,
    tuberiaCamb: Boolean,
    observacionesT: String,

    anillosRRev: Boolean,
    anillosRLimp: Boolean,
    anillosRCamb: Boolean,
    observacionesAr: String,

    tuercaHRev: Boolean,
    tuercaHLimp: Boolean,
    tuercaHCamb: Boolean,
    observacionesTuercaH: String,

    juntaRev: Boolean,
    juntaLimp: Boolean,
    juntaCamb: Boolean,
    observacionesJ: String,

    mitadIRev: Boolean,
    mitadILimp: Boolean,
    mitadIaExtend: Boolean,
    mitadICamb: Boolean,
    observacionesMi: String,

    grifoRev: Boolean,
    grifoLimp: Boolean,
    grifoCamb: Boolean,
    observacionesG: String,

    //PARA TE-06
    filtroRev: Boolean,
    filtroLimp: Boolean,
    filtroCamb: Boolean,
    observacionesFc: String,

    mirillaRev: Boolean,
    mirillaLimp: Boolean,
    mirillaCamb: Boolean,
    observacionesM: String,

    flotadorRev: Boolean,
    flotadorLimp: Boolean,
    flotadorCamb: Boolean,
    observacionesF: String,

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

    superviso: { type : Schema.ObjectId, ref: 'User'},
    jefeTurno: { type : Schema.ObjectId, ref: 'User'},
    sMM: { type : Schema.ObjectId, ref: 'User'},
    clave: String
});
module.exports = mongoose.model('mmmeC12', mmmeC12Schema);