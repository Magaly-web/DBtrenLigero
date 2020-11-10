'use strict'//usar novedades de JS

var mongoose = require('mongoose');//modulo de moongose
var Schema = mongoose.Schema;//Schema carga moongoose.Schema esto permite definir nuevos esquemas

var mmmeC14_1Schema = Schema({//esquema de la estructura que va a tener el formulario
    date_created: String,
    //datos tren
    noInspeccion: String,
    noTren: String,
    kilometraje: String,
    horaInicio: String,
    horaTerminacion: String,
    
    operario: { type : Schema.ObjectId, ref: 'User'},

    //ELECTOVALVULA SERIE KUTILIZADA EN APERTURA Y CIERRE PUERTAS DE SALON DE PASAJEROS TE-90 Y TE-95
    tornillosRev: Boolean,
    tornillosLimp: Boolean,
    tornillosCamb: Boolean,
    observacionesT2x2: String,

    tornillosPRev: Boolean,
    tornillosPLimp: Boolean,
    tornillosPCamb: Boolean,
    observacionesT5_8: String,

    tuercaRev: Boolean,
    tuercaLimp: Boolean,
    tuercaCamb: Boolean,
    observacionesT: String,

    tuercaBRev: Boolean,
    tuercaBLimp: Boolean,
    tuercaBCamb: Boolean,
    observacionesTbk: String,

    carreteRev: Boolean,
    carreteLimp: Boolean,
    carreteCamb: Boolean,
    observacionesC: String,

    selloRev: Boolean,
    selloLimp: Boolean,
    selloLub: Boolean,
    selloCamb: Boolean,
    observacionesS: String,

    resorteKRev: Boolean,
    resorteKLimp: Boolean,
    resorteKLub: Boolean,
    resorteKCamb: Boolean,
    observacionesR: String,

    camisaKRev: Boolean,
    camisaKLimp: Boolean,
    camisaKLub: Boolean,
    camisaKCamb: Boolean,
    observacionesCk: String,

    retenedorRev: Boolean,
    retenedorLimp: Boolean,
    retenedorLub: Boolean,
    retenedorCamb: Boolean,
    observacionesRk: String,

    vastagoKRev: Boolean,
    vastagoKLimp: Boolean,
    vastagoKLub: Boolean,
    vastagoKCamb: Boolean,
    observacionesVk: String,

    actuadorRev: Boolean,
    actuadorLimp: Boolean,
    actuadorLub: Boolean,
    actuadorCamb: Boolean,
    observacionesAd: String,

    asientoRev: Boolean,
    asientoLimp: Boolean,
    asientoLub: Boolean,
    asientoCamb: Boolean,
    observacionesA: String,

    emboloKRev: Boolean,
    emboloKLimp: Boolean,
    emboloKLub: Boolean,
    emboloKCamb: Boolean,
    observacionesEk: String,

    resorteCKRev: Boolean,
    resorteCKLimp: Boolean,
    resorteCKLub: Boolean,
    resorteCKCamb: Boolean,
    observacionesRck: String,

    guiaRev: Boolean,
    guiaLimp: Boolean,
    guiaLub: Boolean,
    guiaCamb: Boolean,
    observacionesG: String,

    protectorRev: Boolean,
    protectorLimp: Boolean,
    protectorCamb: Boolean,
    observacionesP: String,

    bobinaKRev: Boolean,
    bobinaKLimp: Boolean,
    bobinaKCamb: Boolean,
    observacionesB: String,

    roldanaKRev: Boolean,
    roldanaKLimp: Boolean,
    roldanaKCamb: Boolean,
    observacionesRoldanaK: String,

    carcazaRev: Boolean,
    carcazaLimp: Boolean,
    carcazaCamb: Boolean,
    observacionesCarcaza: String,

    oringsLub: Boolean,
    oringsCamb: Boolean,
    observacionesOk: String,

    //ELECTROVALVULA DECTAIR 6 UTILIZADA EN CLAXON, APERTURA Y CIERRE PUERTAS DE OPERADOR TE-90 Y TE-95
    operadorRev: Boolean,
    operadorLimp: Boolean,
    operadorLub: Boolean,
    operadorCamb: Boolean,
    observacionesO: String,
    
    tuercaBRev: Boolean,
    tuercaBLimp: Boolean,
    tuercaBLub: Boolean,
    tuercaBCamb: Boolean,
    observacionesTb: String,

    etiquetaRev: Boolean,
    etiquetaLimp: Boolean,
    etiquetaLub: Boolean,
    etiquetaCamb: Boolean,
    observacionesEb: String,

    carcazaBRev: Boolean,
    carcazaBLimp: Boolean,
    carcazaBLub: Boolean,
    carcazaBCamb: Boolean,
    observacionesCb: String,

    roldanaRev: Boolean,
    roldanaLimp: Boolean,
    roldanaLub: Boolean,
    roldanaCamb: Boolean,
    observacionesRoldana: String,

    camisaRev: Boolean,
    camisaLimp: Boolean,
    camisaLub: Boolean,
    camisaCamb: Boolean,
    observacionesCamisa: String,

    bobinaRev: Boolean,
    bobinaLimp: Boolean,
    bobinaLub: Boolean,
    bobinaCamb: Boolean,
    observacionesBobina: String,

    guiaERev: Boolean,
    guiaELimp: Boolean,
    guiaELub: Boolean,
    guiaECamb: Boolean,
    observacionesGuiaE: String,

    resorteCRev: Boolean,
    resorteCLimp: Boolean,
    resorteCLub: Boolean,
    resorteCCamb: Boolean,
    observacionesRc: String,

    emboloRev: Boolean,
    emboloLimp: Boolean,
    emboloLub: Boolean,
    emboloCamb: Boolean,
    observacionesE: String,

    cuerpoVRev: Boolean,
    cuerpoVLimp: Boolean,
    cuerpoVLub: Boolean,
    cuerpoVCamb: Boolean,
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

    guiaRRev: Boolean,
    guiaRLimp: Boolean,
    guiaRLub: Boolean,
    guiaRCamb: Boolean,
    observacionesGuiaR: String,

    tapaRev: Boolean,
    tapaLimp: Boolean,
    tapaLub: Boolean,
    tapaCamb: Boolean,
    observacionesTapa: String,

    tornillosRev: Boolean,
    tornillosLimp: Boolean,
    tornillosLub: Boolean,
    tornillosCamb: Boolean,
    observacionesTornillos: String,

    oringsLub: Boolean,
    oringsCamb: Boolean,
    observacionesOrings: String,

    superviso: { type : Schema.ObjectId, ref: 'User'},
    jefeTurno: { type : Schema.ObjectId, ref: 'User'},
    sMM: { type : Schema.ObjectId, ref: 'User'},
    clave: String
});
module.exports = mongoose.model('mmmeC14_1', mmmeC14_1Schema);