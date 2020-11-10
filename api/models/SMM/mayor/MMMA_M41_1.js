'use strict'//usar novedades de JS

var mongoose = require('mongoose');//modulo de moongose
var Schema = mongoose.Schema;//Schema carga moongoose.Schema esto permite definir nuevos esquemas

var mmmaM40_1Schema = Schema({//esquema de la estructura que va a tener el formulario

    date_created: String,
    //datos tren
    noInspeccion: String,
    noTren: String,
    kilometraje: String,
    fechaInicio: String,
    fechaTerminacion: String,
    
    operario: { type : Schema.ObjectId, ref: 'User'},

    cursorRevM1_1: Boolean,
    cursorRevM1_2: Boolean,
    cursorRevR_3: Boolean,
    cursorRevR_4: Boolean,
    cursorRevM2_5: Boolean,
    cursorRevM2_6: Boolean,
    observacionesCrev: Boolean,

    cursorLimpM1_1: Boolean,
    cursorLimpM1_2: Boolean,
    cursorLimpR_3: Boolean,
    cursorLimpR_4: Boolean,
    cursorLimpM2_5: Boolean,
    cursorLimpM2_6: Boolean,
    observacionesClimp: Boolean,

    cursorEngM1_1: Boolean,
    cursorEngM1_2: Boolean,
    cursorEngR_3: Boolean,
    cursorEngR_4: Boolean,
    cursorEngM2_5: Boolean,
    cursorEngM2_6: Boolean,
    observacionesCeng: Boolean,

    tapaRevM1_1: Boolean,
    tapaRevM1_2: Boolean,
    tapaRevR_3: Boolean,
    tapaRevR_4: Boolean,
    tapaRevM2_5: Boolean,
    tapaRevM2_6: Boolean,
    observacionesTapaRev: Boolean,

    tapaLimpM1_1: Boolean,
    tapaLimpM1_2: Boolean,
    tapaLimpR_3: Boolean,
    tapaLimpR_4: Boolean,
    tapaLimpM2_5: Boolean,
    tapaLimpM2_6: Boolean,
    observacionesTapaLimp: Boolean,

    cajaRevM1_1: Boolean,
    cajaRevM1_2: Boolean,
    cajaRevR_3: Boolean,
    cajaRevR_4: Boolean,
    cajaRevM2_5: Boolean,
    cajaRevM2_6: Boolean,
    observacionesCajaRev: Boolean,

    cajaLimpM1_1: Boolean,
    cajaLimpM1_2: Boolean,
    cajaLimpR_3: Boolean,
    cajaLimpR_4: Boolean,
    cajaLimpM2_5: Boolean,
    cajaLimpM2_6: Boolean,
    observacionesCajaLimp: Boolean,

    tornilleriaRevM1_1: Boolean,
    tornilleriaRevM1_2: Boolean,
    tornilleriaRevR_3: Boolean,
    tornilleriaRevR_4: Boolean,
    tornilleriaRevM2_5: Boolean,
    tornilleriaRevM2_6: Boolean,
    observacionesTrev: Boolean,

    tornilleriaLimpM1_1: Boolean,
    tornilleriaLimpM1_2: Boolean,
    tornilleriaLimpR_3: Boolean,
    tornilleriaLimpR_4: Boolean,
    tornilleriaLimpM2_5: Boolean,
    tornilleriaLimpM2_6: Boolean,
    observacionesTlimp: Boolean,

    tornilleriaEngM1_1: Boolean,
    tornilleriaEngM1_2: Boolean,
    tornilleriaEngR_3: Boolean,
    tornilleriaEngR_4: Boolean,
    tornilleriaEngM2_5: Boolean,
    tornilleriaEngM2_6: Boolean,
    observacionesTeng: Boolean,

    observaciones: String,

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
module.exports = mongoose.model('mmmaM40_1', mmmaM40_1Schema);