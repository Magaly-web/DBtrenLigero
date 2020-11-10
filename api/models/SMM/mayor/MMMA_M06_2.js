'use strict'//usar novedades de JS

var mongoose = require('mongoose');//modulo de moongose
var Schema = mongoose.Schema;//Schema carga moongoose.Schema esto permite definir nuevos esquemas

var mmmaM06_2Schema = Schema({//esquema de la estructura que va a tener el formulario

    date_created: String,
    //datos tren
    noInspeccion: String,
    noTren: String,
    kilometraje: String,
    fechaInicio: String,
    fechaTerminacion: String,
    
    //1. DESMONTAJE DEL INDICADOR DE DESTINO
    operario1: { type : Schema.ObjectId, ref: 'User'},
    operario2: { type : Schema.ObjectId, ref: 'User'},

    retirarMm1: Boolean,
    retirarMm2: Boolean,
    observacionesRm: String,

    retirarTm1: Boolean,
    retirarTm2: Boolean,
    observacionesRt: String,

    aflojarRm1: Boolean,
    aflojarRm2: Boolean,
    observacionesAr: String,

    desmontarIm1: Boolean,
    desmontarIm2: Boolean,
    observacionesDi: String,

    //2. MANTENIMIENTO
    operario3: { type : Schema.ObjectId, ref: 'User'},
    operario4: { type : Schema.ObjectId, ref: 'User'},
    operario5: { type : Schema.ObjectId, ref: 'User'},

    retirarTsLimp: Boolean,
    retirarTsRev: Boolean,
    retirarTsCamb: Boolean,
    observacionesRts: String,

    retirarMdLimp: Boolean,
    retirarMdRev: Boolean,
    retirarMdCamb: Boolean,
    observacionesRmd: String,

    retirarBLimp: Boolean,
    retirarBRev: Boolean,
    retirarBCamb: Boolean,
    observacionesRb: String,

    cadenasMLimp: Boolean,
    cadenasMRev: Boolean,
    cadenasMCamb: Boolean,
    observacionesCm: String,

    engranesLimp: Boolean,
    engranesRev: Boolean,
    engranesCamb: Boolean,
    observacionesE: String,

    resortesLimp: Boolean,
    resortesRev: Boolean,
    resortesCamb: Boolean,
    observacionesR: String,

    tornilleriaLimp: Boolean,
    tornilleriaRev: Boolean,
    tornilleriaCamb: Boolean,
    observacionesT: String,

    lijadoPm1: Boolean,
    lijadoPm2: Boolean,
    observacionesLp: String,

    aplicacionSm1: Boolean,
    aplicacionSm2: Boolean,
    observacionesAs: String,

    //3. MONTAJE INDICADOR DESTINO
    operario3: { type : Schema.ObjectId, ref: 'User'},

    montarMm1: Boolean,
    montarMm2: Boolean,
    montarMfunc: Boolean,
    montarMajust: Boolean,
    observacionesMm: String,

    montarMDm1: Boolean,
    montarMDm2: Boolean,
    montarMDfunc: Boolean,
    montarMDajust: Boolean,
    observacionesMmd: String,

    montarIDm1: Boolean,
    montarIDm2: Boolean,
    montarIDfunc: Boolean,
    montarIDajust: Boolean,
    observacionesMid: String,

    colocarTm1: Boolean,
    colocarTm2: Boolean,
    colocarTfunc: Boolean,
    colocarTajust: Boolean,
    observacionesCt: String,

    colocarMRm1: Boolean,
    colocarMRm2: Boolean,
    colocarMRfunc: Boolean,
    colocarMRajust: Boolean,
    observacionesCmr: String,

    observaciones: String,

    //MATERIAL UTILIZADO
    codigo1: String,
    desc1: String,
    cant1: String,
    noVale1: Number,
    observaciones1: String,

    codigo2: String,
    desc2: String,
    cant2: String,
    noVale2: Number,
    observaciones2: String,
    
    codigo3: String,
    desc3: String,
    cant3: String,
    noVale3: Number,
    observaciones3: String,

    codigo4: String,
    desc4: String,
    cant4: String,
    noVale4: Number,
    observaciones4: String,

    codigo5: String,
    desc5: String,
    cant5: String,
    noVale5: Number,
    observaciones5: String,
    
    codigo6: String,
    desc6: String,
    cant6: String,
    noVale6: Number,
    observaciones6: String,

    codigo7: String,
    desc7: String,
    cant7: String, 
    noVale7: Number,
    observaciones7: String,

    codigo8: String,
    desc8: String,
    cant8: String,
    noVale8: Number,
    observaciones8: String,

    codigo9: String,
    desc9: String,
    cant9: String,
    noVale9: Number,
    observaciones9: String,

    codigo10: String,
    desc10: String,
    cant10: String,
    noVale10: Number,
    observaciones10: String,

    codigo11: String,
    desc11: String,
    cant11: String,
    noVale11: Number,
    observaciones11: String,

    codigo12: String,
    desc12: String,
    cant12: String,
    noVale12: Number,
    observaciones12: String,

    codigo13: String,
    desc13: String,
    cant13: String,
    noVale13: Number,
    observaciones13: String,

    codigo14: String,
    desc14: String,
    cant14: String,
    noVale14: Number,
    observaciones14: String,

    codigo15: String,
    desc15: String,
    cant15: String,
    noVale15: Number,
    observaciones15: String,

    supervisor: { type : Schema.ObjectId, ref: 'User'},
    jefeMM: { type : Schema.ObjectId, ref: 'User'},
    sMM: { type : Schema.ObjectId, ref: 'User'},
    clave: String
});
module.exports = mongoose.model('mmmaM06_2', mmmaM06_2Schema);