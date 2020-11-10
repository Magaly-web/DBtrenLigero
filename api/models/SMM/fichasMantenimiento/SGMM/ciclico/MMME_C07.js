'use strict'//usar novedades de JS

var mongoose = require('mongoose');//modulo de moongose
var Schema = mongoose.Schema;//Schema carga moongoose.Schema esto permite definir nuevos esquemas

var mmmeC07Schema = Schema({//esquema de la estructura que va a tener el formulario
    date_created: String,
    //datos tren
    noInspeccion: String,
    noTren: String,
    kilometraje: String,
    horaInicio: String,
    horaTerminacion: String,
    
    operario: { type : Schema.ObjectId, ref: 'User'},

    bastidorLimp: Boolean,
    bastidorVer: Boolean,
    observacionesB: String,

    recipienteLimp: Boolean,
    recipienteFaire: Boolean,
    recipienteVer: Boolean,
    observacionesRf: String,

    cuerpoLimp: Boolean,
    cuerpoFaire: Boolean,
    cuerpoVer: Boolean,
    observacionesCs: String,

    valvulaLimp: Boolean,
    valvulaEng: Boolean,
    valvulaFaire: Boolean,
    valvulaVer: Boolean,
    observacionesVc: String,

    tanqueLimp: Boolean,
    tanqueFaire: Boolean,
    tanqueVer: Boolean,
    observacionesTr: String,

    filtroLimp: Boolean,
    filtroFaire: Boolean,
    filtroVer: Boolean,
    observacionesF: String,

    silenciadorLimp: Boolean,
    silenciadorFaire: Boolean,
    silenciadorVer: Boolean,
    observacionesS: String,

    coladeraLimp: Boolean,
    coladeraFaire: Boolean,
    coladeraVer: Boolean,
    observacionesCi: String,

    //ELECTROVALVULA DIRECTAIR 6
    operadorRev: Boolean,
    operadorLimp: Boolean,
    operadorLub: Boolean,
    operadorCamb: Boolean,
    observacionesOm: String,

    tuercaRev: Boolean,
    tuercaLimp: Boolean,
    tuercaLub: Boolean,
    tuercaCamb: Boolean,
    observacionesTb: String,

    etiquetaRev: Boolean,
    etiquetaLimp: Boolean,
    etiquetaLub: Boolean,
    etiquetaCamb: Boolean,
    observacionesEb: String,

    carcazaRev: Boolean,
    carcazaLimp: Boolean,
    carcazaLub: Boolean,
    carcazaCamb: Boolean,
    observacionesCb: String,

    roldanaRev: Boolean,
    roldanaLimp: Boolean,
    roldanaLub: Boolean,
    roldanaCamb: Boolean,
    observacionesR: String,

    camisaRev: Boolean,
    camisaLimp: Boolean,
    camisaLub: Boolean,
    camisaCamb: Boolean,
    observacionesC: String,

    bobinaRev: Boolean,
    bobinaLimp: Boolean,
    bobinaLub: Boolean,
    bobinaCamb: Boolean,
    observacionesBobina: String,

    guiaRev: Boolean,
    guiaLimp: Boolean,
    guiaLub: Boolean,
    guiaCamb: Boolean,
    observacionesG: String,

    resortecRev: Boolean,
    resortecLimp: Boolean,
    resortecLub: Boolean,
    resortecCamb: Boolean,
    observacionesRc: String,

    emboloRev: Boolean,
    emboloLimp: Boolean,
    emboloLub: Boolean,
    emboloCamb: Boolean,
    observacionesE: String,

    cuerpovRev: Boolean,
    cuerpovLimp: Boolean,
    cuerpovLub: Boolean,
    cuerpovCamb: Boolean,
    observacionesCv: String,

    vastagoRev: Boolean,
    vastagoLimp: Boolean,
    vastagoLub: Boolean,
    vastagoCamb: Boolean,
    observacionesV: String,

    bujeRev: Boolean,
    bujeLimp: Boolean,
    bujeLub: Boolean,
    bujeCamb: Boolean,
    observacionesBuje: String,
    
    resorteRev: Boolean,
    resorteLimp: Boolean,
    resorteLub: Boolean,
    resorteCamb: Boolean,
    observacionesResorte: String,

    guiarRev: Boolean,
    guiarLimp: Boolean,
    guiarLub: Boolean,
    guiarCamb: Boolean,
    observacionesGr: String,

    tapaRev: Boolean,
    tapaLimp: Boolean,
    tapaLub: Boolean,
    tapaCamb: Boolean,
    observacionesTapa: String,

    tornillosRev: Boolean,
    tornillosLimp: Boolean,
    tornillosLub: Boolean,
    tornillosCamb: Boolean,
    observacionesT: String,

    oringsLub: Boolean,
    oringsCamb: Boolean,
    observacionesO: String,

    silenRev: Boolean,
    silenLimp: Boolean,
    silenCamb: Boolean,
    observacionesSilen: String,

    filtRev: Boolean,
    filtLimp: Boolean,
    filtCamb: Boolean,
    observacionesFiltro: String,

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

    superviso: { type : Schema.ObjectId, ref: 'User'},
    jefeTurno: { type : Schema.ObjectId, ref: 'User'},
    sMM: { type : Schema.ObjectId, ref: 'User'},
    clave: String
});
module.exports = mongoose.model('mmmeC07', mmmeC07Schema);