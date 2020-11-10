'use strict'//usar novedades de JS

var mongoose = require('mongoose');//modulo de moongose
var Schema = mongoose.Schema;//Schema carga moongoose.Schema esto permite definir nuevos esquemas

var mmmaM01_1Schema = Schema({//esquema de la estructura que va a tener el formulario

    date_created: String,
    //datos tren
    noInspeccion: String,
    noTren: String,
    kilometraje: String,
    fechaInicio: String,
    fechaTerminacion: String,
    
    //1. DESMONTAJE DE PANTOGRAFO
    operario1: { type : Schema.ObjectId, ref: 'User'},
    operario2: { type : Schema.ObjectId, ref: 'User'},

    colocarSm1: Boolean,
    observacionesCs: String,

    retirarTm1: Boolean,
    observacionesRt: String,

    desconectarMm1: Boolean,
    observacionesDm: String,

    retirarTFm1: Boolean,
    observacionesRtf: String,

    bajarPm1: Boolean,
    observacionesBp: String,

    //2. MANTENIMIENTO DEL PANTOGRAFO
    conjuntoAR: Boolean,
    conjuntoAL: Boolean,
    conjuntoAC: Boolean,
    observacionesCam: String,

    conjuntoBR: Boolean,
    conjuntoBL: Boolean,
    conjuntoBE: Boolean,
    conjuntoBC: Boolean,
    observacionesCb: String,

    conjuntoBIR: Boolean,
    conjuntoBIL: Boolean,
    conjuntoBIE: Boolean,
    conjuntoBIC: Boolean,
    observacionesCbi: String,

    conjuntoER: Boolean,
    conjuntoEL: Boolean,
    conjuntoEE: Boolean,
    conjuntoEC: Boolean,
    observacionesCe: String,

    conjuntoBER: Boolean,
    conjuntoBEL: Boolean,
    conjuntoBEE: Boolean,
    conjuntoBEC: Boolean,
    observacionesCbe: String,

    conjuntoCR: Boolean,
    conjuntoCL: Boolean,
    conjuntoCE: Boolean,
    conjuntoCC: Boolean,
    observacionesCc: String,

    conjuntoAC: Boolean,
    observacionesCa: String,

    conjuntoMR: Boolean,
    conjuntoML: Boolean,
    conjuntoME: Boolean,
    conjuntoMC: Boolean,
    observacionesCm: String,

    conjuntoMSR: Boolean,
    conjuntoMSL: Boolean,
    conjuntoMSC: Boolean,
    observacionesCms: String,

    conjuntoVR: Boolean,
    conjuntoVL: Boolean,
    conjuntoVE: Boolean,
    conjuntoVC: Boolean,
    observacionesCv: String,

    //CONEXIONES FLEXIBLES
    verificarE8re: Boolean,
    observacionesVe8: String,

    verificarECre: Boolean,
    observacionesVec: String,

    aplicarGre: Boolean,
    observacionesAg: String,

    colocarMCre: Boolean,
    observacionesCmc: String,

    aplicarPre: Boolean,
    observacionesAp: String,

    //ARQUET NUEVO
    verificarVre: Boolean,
    observacionesVv: String,

    separacionBre: Boolean,
    observacionesSb: String,

    alizarAre: Boolean,
    observacionesAa: String,

    verificarTre: Boolean,
    observacionesVt: String,

    //MOTOR NEUMATICO(CON PRESION DE AIRE REGULADA)
    presionAre: Boolean,
    observacionesPa: String,

    presionRre: Boolean,
    observacionesPr: String,

    recorridoPre: Boolean,
    observacionesRp: String,

    alimentarCre: Boolean,
    observacionesAc: String,

    //LUBRICACION
    codigo: String,
    descipcion: String,
    re: Boolean,
    observaciones: String
});
module.exports = mongoose.model('mmmaM01_1', mmmaM01_1Schema);