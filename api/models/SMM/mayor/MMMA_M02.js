'use strict'//usar novedades de JS

var mongoose = require('mongoose');//modulo de moongose
var Schema = mongoose.Schema;//Schema carga moongoose.Schema esto permite definir nuevos esquemas

var mmmaM02Schema = Schema({//esquema de la estructura que va a tener el formulario

    date_created: String,
    //datos tren
    noInspeccion: String,
    noTren: String,
    kilometraje: String,
    fechaInicio: String,
    fechaTerminacion: String,

    //1. DESMONTAJE FILTROS DE ADMISION DE AIRE
    operario1: { type : Schema.ObjectId, ref: 'User'},
    operario2: { type : Schema.ObjectId, ref: 'User'},

    retirarTFm1: Boolean,
    retirarTFm2: Boolean,
    observacionesRt: String,

    desmontajeFFm1: Boolean,
    desmontajeFFm2: Boolean,
    observacionesDf: String,

    //2. MANTENIMIENTO A FILTROS DE ADMISION DE AIRE
    operario3: { type : Schema.ObjectId, ref: 'User'},
    operario4: { type : Schema.ObjectId, ref: 'User'},
    operario5: { type : Schema.ObjectId, ref: 'User'},

    sopleteadoMFm1: Boolean,
    sopleteadoMFm2: Boolean,
    observacionesSm: String,

    asentadoPFm1: Boolean,
    asentadoPFm2: Boolean,
    observacionesAp: String,

    limpiezaFm1: Boolean,
    limpiezaFm2: Boolean,
    observacionesLimp: String,

    empapeladoMFm1: Boolean,
    empapeladoMFm2: Boolean,
    observacionesEm: String,

    recuperacionDFm1: Boolean,
    recuperacionDFm2: Boolean,
    observacionesRd: String,

    aplicacionSpFm1: Boolean,
    aplicacionSpFm2: Boolean,
    observacionesAsp: String,

    //3. MONTAJE DE FILTROS DE ADMISION DE AIRE
    operario6: { type : Schema.ObjectId, ref: 'User'},
    operario7: { type : Schema.ObjectId, ref: 'User'},

    montajeFm1: Boolean,
    montajeFm2: Boolean,
    observacionesM: String,

    colocarSFm1: Boolean,
    colocarSFm2: Boolean,
    observacionesCs: String,

    observaciones1: String,

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

    supervisor: { type : Schema.ObjectId, ref: 'User'},
    jefeMM: { type : Schema.ObjectId, ref: 'User'},
    sMM: { type : Schema.ObjectId, ref: 'User'},
    clave: String
});
module.exports = mongoose.model('mmmaM02', mmmaM02Schema);