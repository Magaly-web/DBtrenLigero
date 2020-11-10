'use strict'//usar novedades de JS

var mongoose = require('mongoose');//modulo de moongose
var Schema = mongoose.Schema;//Schema carga moongoose.Schema esto permite definir nuevos esquemas

var memeC01Schema = Schema({//esquema de la estructura que van a tener los formularios
    date_created: String,
    //datos tren
    noInspeccion: String,
    noTren: String,
    kilometraje: String,
    horaInicio: String,
    horaTerminacion: String,
    
    user: { type : Schema.ObjectId, ref: 'User'},
    //motor de traccion
    estatorExteriorM1:{
        revision: Boolean,
        sopleteado:Boolean,
        limpieza: Boolean
    },
    estatorExteriorM2:{
        revisionM2: Boolean,
        sopleteadoM2:Boolean,
        limpiezaM2: Boolean
    },
    lineasPotenciaM1:{
        revisionPM1: Boolean,
        sopleteadoPM1:Boolean,
        limpiezaPM1: Boolean
    },
    lineasPotenciaM2:{
        revisionPM2: Boolean,
        sopleteadoPM2:Boolean,
        limpiezaPM2: Boolean
    },
    bridasSujecionM1:{
        revisionSM1: Boolean,
        sopleteadoSM1:Boolean,
        limpiezaSM1: Boolean
    },
    bridasSujecionM2:{
        revisionSM2: Boolean,
        sopleteadoSM2:Boolean,
        limpiezaSM2: Boolean
    },
    rejillasVentilacionM1:{
        revisionVM1: Boolean,
        sopleteadoVM1:Boolean,
        limpiezaVM1: Boolean
    },
    rejillasVentilacionM2:{
        revisionVM2: Boolean,
        sopleteadoVM2:Boolean,
        limpiezaVM2: Boolean
    },
    boquillasEngraseM1:{
        revisionEM1: Boolean,
        sopleteadoEM1:Boolean,
        limpiezaEM1: Boolean
    },
    boquillasEngraseM2:{
        revisionEM2: Boolean,
        sopleteadoEM2:Boolean,
        limpiezaEM2: Boolean
    },
    trenzaMasaM1:{
        revisionMM1: Boolean,
        sopleteadoMM1:Boolean,
        limpiezaMM1: Boolean
    },
    trenzaMasaM2:{
        revisionMM2: Boolean,
        sopleteadoMM2:Boolean,
        limpiezaMM2: Boolean
    },
    tornilleriaAcoplamientoM1:{
        revisionAM1: Boolean,
        sopleteadoAM1:Boolean,
        limpiezaAM1: Boolean
    },
    tornilleriaAcoplamientoM2:{
        revisionAM2: Boolean,
        sopleteadoAM2:Boolean,
        limpiezaAM2: Boolean
    },
    cojinetesM1:{
        revisionCM1: Boolean,
        sopleteadoCM1:Boolean,
        limpiezaCM1: Boolean
    },
    cojinetesM2:{
        revisionCM2: Boolean,
        sopleteadoCM2:Boolean,
        limpiezaCM2: Boolean
    },
    //caja de conexiones
    tapasM1: {
        revisionTM1: Boolean,
        sopleteadoTM1: Boolean,
        limpiezaTM1: Boolean,
    },
    tapasM2: {
        revisionTM2: Boolean,
        sopleteadoTM2: Boolean,
        limpiezaTM2: Boolean,
    },
    tornilleriaM1: {
        revisionToM1: Boolean,
        sopleteadoToM1: Boolean,
        limpiezaToM1: Boolean,
    },
    tornilleriaM2: {
        revisionToM2: Boolean,
        sopleteadoToM2: Boolean,
        limpiezaToM2: Boolean,
    },
    regletaConexionesM1: {
        revisionRM1: Boolean,
        sopleteadoRM1: Boolean,
        limpiezaRM1: Boolean,
    },
    regletaConexionesM2: {
        revisionRM2: Boolean,
        sopleteadoRM2: Boolean,
        limpiezaRM2: Boolean,
    },
    bornesConexionM1: {
        revisionBM1: Boolean,
        sopleteadoBM1: Boolean,
        limpiezaBM1: Boolean,
    },
    bornesConexionM2: {
        revisionBM2: Boolean,
        sopleteadoBM2: Boolean,
        limpiezaBM2: Boolean,
    },
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
    
    superviso: { type : Schema.ObjectId, ref: 'User'},
    jefeTurno: { type : Schema.ObjectId, ref: 'User'},
    sMEyE: { type : Schema.ObjectId, ref: 'User'},
    clave: String,
});

module.exports = mongoose.model('memeC01', memeC01Schema);
//exportacion del modelo para que pueda ser utilizado por otro fichero, 'User' es el nombre de la entidad, 'UserSchema' es el formato o campos que va a tener cada objeto que se defina en el modelo usuario