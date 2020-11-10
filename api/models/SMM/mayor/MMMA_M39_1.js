'use strict'//usar novedades de JS

var mongoose = require('mongoose');//modulo de moongose
var Schema = mongoose.Schema;//Schema carga moongoose.Schema esto permite definir nuevos esquemas

var mmmaM39_1Schema = Schema({//esquema de la estructura que va a tener el formulario

    date_created: String,
    //datos tren
    noInspeccion: String,
    noTren: String,
    kilometraje: String,
    fechaInicio: String,
    fechaTerminacion: String,
    
    operario: { type : Schema.ObjectId, ref: 'User'},

    cuboRev: Boolean,
    cuboLimp: Boolean,
    cuboCamb: Boolean,
    observacionesC: Boolean,

    llantaRev: Boolean,
    llantaLimp: Boolean,
    llantaCamb: Boolean,
    observacionesLl: Boolean,

    anilloCuniaRev: Boolean,
    anilloCuniaLimp: Boolean,
    anilloCuniaCamb: Boolean,
    observacionesAc: Boolean,

    anilloGomaRev: Boolean,
    anilloGomaLimp: Boolean,
    anilloGomaCamb: Boolean,
    observacionesAg: Boolean,

    conductoresElectricosRev: Boolean,
    conductoresElectricosLimp: Boolean,
    conductoresElectricosCamb: Boolean,
    observacionesCe: Boolean,

    tornilloHexagonalRev: Boolean,
    tornilloHexagonalLimp: Boolean,
    tornilloHexagonalCamb: Boolean,
    observacionesTh: Boolean,

    arandelaElasticaRev: Boolean,
    arandelaElasticaLimp: Boolean,
    arandelaElasticaCamb: Boolean,
    observacionesAe: Boolean,

    tornillosDurlokRev: Boolean,
    tornillosDurlokLimp: Boolean,
    tornillosDurlokCamb: Boolean,
    observacionesTd: Boolean,

    anilloObtuladorRev: Boolean,
    anilloObtuladorLimp: Boolean,
    anilloObtuladorCamb: Boolean,
    observacionesAo: Boolean,

    diametroRuedaRev: Boolean,
    diametroRuedaLimp: Boolean,
    diametroRuedaCamb: Boolean,
    observacionesDr: Boolean,

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

    codigo16: String,
    desc16: String,
    cant16: String,
    noVale16: Number,
    observaciones16: String,

    codigo17: String,
    desc17: String,
    cant17: String,
    noVale17: Number,
    observaciones17: String,

    codigo18: String,
    desc18: String,
    cant18: String,
    noVale18: Number,
    observaciones18: String,

    codigo19: String,
    desc19: String,
    cant19: String,
    noVale19: Number,
    observaciones19: String,

    codigo20: String,
    desc20: String,
    cant20: String,
    noVale20: Number,
    observaciones20: String,

    supervisor: { type : Schema.ObjectId, ref: 'User'},
    jefeMM: { type : Schema.ObjectId, ref: 'User'},
    sMM: { type : Schema.ObjectId, ref: 'User'},
    clave: String
});
module.exports = mongoose.model('mmmaM39_1', mmmaM39_1Schema);