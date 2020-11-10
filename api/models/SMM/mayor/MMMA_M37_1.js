'use strict'//usar novedades de JS

var mongoose = require('mongoose');//modulo de moongose
var Schema = mongoose.Schema;//Schema carga moongoose.Schema esto permite definir nuevos esquemas

var mmmaM37_1Schema = Schema({//esquema de la estructura que va a tener el formulario

    date_created: String,
    //datos tren
    noInspeccion: String,
    noTren: String,
    kilometraje: String,
    fechaInicio: String,
    fechaTerminacion: String,
    noSerie: String,
    
    operario: { type : Schema.ObjectId, ref: 'User'},

    medicionCajaADm1_1: Boolean,
    medicionCajaADm1_2: Boolean,
    medicionCajaADm1_3: Boolean,
    medicionCajaADm1_4: Boolean,
    medicionCajaADr_5: Boolean,
    medicionCajaADr_6: Boolean,
    medicionCajaADr_7: Boolean,
    medicionCajaADr_8: Boolean,
    medicionCajaADm2_9: Boolean,
    medicionCajaADm2_10: Boolean,
    medicionCajaADm2_11: Boolean,
    medicionCajaADm2_12: Boolean,

    medicionCajaBCm1_1: Boolean,
    medicionCajaBCm1_2: Boolean,
    medicionCajaBCm1_3: Boolean,
    medicionCajaBCm1_4: Boolean,
    medicionCajaBCr_5: Boolean,
    medicionCajaBCr_6: Boolean,
    medicionCajaBCr_7: Boolean,
    medicionCajaBCr_8: Boolean,
    medicionCajaBCm2_9: Boolean,
    medicionCajaBCm2_10: Boolean,
    medicionCajaBCm2_11: Boolean,
    medicionCajaBCm2_12: Boolean,

    rodamientosCambM1_1: Boolean,
    rodamientosCambM1_2: Boolean,
    rodamientosCambM1_3: Boolean,
    rodamientosCambM1_4: Boolean,
    rodamientosCambR_5: Boolean,
    rodamientosCambR_6: Boolean,
    rodamientosCambR_7: Boolean,
    rodamientosCambR_8: Boolean,
    rodamientosCambM2_9: Boolean,
    rodamientosCambM2_10: Boolean,
    rodamientosCambM2_11: Boolean,
    rodamientosCambM2_12: Boolean,
    
    //MATERIAL UTILIZADO
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

    supervisor: { type : Schema.ObjectId, ref: 'User'},
    jefeMM: { type : Schema.ObjectId, ref: 'User'},
    sMM: { type : Schema.ObjectId, ref: 'User'},
    clave: String
});
module.exports = mongoose.model('mmmaM37_1', mmmaM37_1Schema);