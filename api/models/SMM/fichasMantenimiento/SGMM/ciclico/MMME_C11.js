'use strict'//usar novedades de JS

var mongoose = require('mongoose');//modulo de moongose
var Schema = mongoose.Schema;//Schema carga moongoose.Schema esto permite definir nuevos esquemas

var mmmeC11Schema = Schema({//esquema de la estructura que va a tener el formulario
    date_created: String,
    //datos tren
    noInspeccion: String,
    noTren: String,
    kilometraje: String,
    horaInicio: String,
    horaTerminacion: String,
    
    operario: { type : Schema.ObjectId, ref: 'User'},

    bisagraSm1Limp: Boolean,
    bisagraSm1Rev: Boolean,
    bisagraSm1Lub: Boolean,
    bisagraSm1Ajuste: Boolean,
    bisagraSm2Limp: Boolean,
    bisagraSm2Rev: Boolean,
    bisagraSm2Lub: Boolean,
    bisagraSm2Ajuste: Boolean,

    bisagraIm1Limp: Boolean,
    bisagraIm1Rev: Boolean,
    bisagraIm1Lub: Boolean,
    bisagraIm1Ajuste: Boolean,
    bisagraIm2Limp: Boolean,
    bisagraIm2Rev: Boolean,
    bisagraIm2Lub: Boolean,
    bisagraIm2Ajuste: Boolean,

    //CHAPA Y CONTRA CHAPA PARA TE-90 Y TE-95
    resorteSm1Limp: Boolean,
    resorteSm1Rev: Boolean,
    resorteSm1Lub: Boolean,
    resorteSm2Limp: Boolean,
    resorteSm2Rev: Boolean,
    resorteSm2Lub: Boolean,
    
    resorteCm1Limp: Boolean,
    resorteCm1Rev: Boolean,
    resorteCm1Lub: Boolean,
    resorteCm2Limp: Boolean,
    resorteCm2Rev: Boolean,
    resorteCm2Lub: Boolean,
    
    resorteIm1Limp: Boolean,
    resorteIm1Rev: Boolean,
    resorteIm1Lub: Boolean,
    resorteIm2Limp: Boolean,
    resorteIm2Rev: Boolean,
    resorteIm2Lub: Boolean,
    
    tornilleriam1Limp: Boolean,
    tornilleriam1Rev: Boolean,
    tornilleriam1Lub: Boolean,
    tornilleriam2Limp: Boolean,
    tornilleriam2Rev: Boolean,
    tornilleriam2Lub: Boolean,
    
    //CHAPA Y CONTRA CHAPA PARA TE-06
    placam1Limp: Boolean,
    placam1Rev: Boolean,
    placam1Lub: Boolean,
    placam2Limp: Boolean,
    placam2Rev: Boolean,
    placam2Lub: Boolean,
    
    resortesm1Limp: Boolean,
    resortesm1Rev: Boolean,
    resortesm1Lub: Boolean,
    resortesm2Limp: Boolean,
    resortesm2Rev: Boolean,
    resortesm2Lub: Boolean,
    
    mecanismom1Limp: Boolean,
    mecanismom1Rev: Boolean,
    mecanismom1Ajuste: Boolean,
    mecanismom2Limp: Boolean,
    mecanismom2Rev: Boolean,
    mecanismom2Ajuste: Boolean,

    cilindrom1Limp: Boolean,
    cilindrom1Rev: Boolean,
    cilindrom2Limp: Boolean,
    cilindrom2Rev: Boolean,
    
    tornilleria06m1Limp: Boolean,
    tornilleria06m1Rev: Boolean,
    tornilleria06m1Lub: Boolean,
    tornilleria06m2Limp: Boolean,
    tornilleria06m2Rev: Boolean,
    tornilleria06m2Lub: Boolean,
    
    //ASIENTO DE OPERADOR
    basem1Limp: Boolean,
    basem1Rev: Boolean,
    basem1Lub: Boolean,
    basem2Limp: Boolean,
    basem2Rev: Boolean,
    basem2Lub: Boolean,

    asientom1Limp: Boolean,
    asientom1Rev: Boolean,
    asientom1Lub: Boolean,
    asientom2Limp: Boolean,
    asientom2Rev: Boolean,
    asientom2Lub: Boolean,

    respaldom1Limp: Boolean,
    respaldom1Rev: Boolean,
    respaldom2Limp: Boolean,
    respaldom2Rev: Boolean,
        
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

    superviso: { type : Schema.ObjectId, ref: 'User'},
    jefeTurno: { type : Schema.ObjectId, ref: 'User'},
    sMM: { type : Schema.ObjectId, ref: 'User'},
    clave: String
});
module.exports = mongoose.model('mmmeC11', mmmeC11Schema);