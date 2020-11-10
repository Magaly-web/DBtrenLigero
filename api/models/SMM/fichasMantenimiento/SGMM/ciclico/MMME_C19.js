'use strict'//usar novedades de JS

var mongoose = require('mongoose');//modulo de moongose
var Schema = mongoose.Schema;//Schema carga moongoose.Schema esto permite definir nuevos esquemas

var mmmeC19Schema = Schema({//esquema de la estructura que va a tener el formulario
    date_created: String,
    //datos tren
    noInspeccion: String,
    noTren: String,
    kilometraje: String,
    horaInicio: String,
    horaTerminacion: String,
    
    operario1: { type : Schema.ObjectId, ref: 'User'},
    operario2: { type : Schema.ObjectId, ref: 'User'},

    //CILINDROS STCRM -700 TE-90 Y TE-95
    tubo5_8m11R: Boolean,
    tubo5_8m11L: Boolean,
    tubo5_8m12R: Boolean,
    tubo5_8m12L: Boolean,
    tubo5_8m13R: Boolean,
    tubo5_8m13L: Boolean,
    tubo5_8m14R: Boolean,
    tubo5_8m14L: Boolean,
    tubo5_8m15R: Boolean,
    tubo5_8m15L: Boolean,
    tubo5_8m16R: Boolean,
    tubo5_8m16L: Boolean,
    tubo5_8m21R: Boolean,
    tubo5_8m21L: Boolean,
    tubo5_8m22R: Boolean,
    tubo5_8m22L: Boolean,
    tubo5_8m23R: Boolean,
    tubo5_8m23L: Boolean,
    tubo5_8m24R: Boolean,
    tubo5_8m24L: Boolean,
    tubo5_8m25R: Boolean,
    tubo5_8m25L: Boolean,
    tubo5_8m26R: Boolean,
    tubo5_8m26L: Boolean,

    tapam11R: Boolean,
    tapam11L: Boolean,
    tapam12R: Boolean,
    tapam12L: Boolean,
    tapam13R: Boolean,
    tapam13L: Boolean,
    tapam14R: Boolean,
    tapam14L: Boolean,
    tapam15R: Boolean,
    tapam15L: Boolean,
    tapam16R: Boolean,
    tapam16L: Boolean,
    tapam21R: Boolean,
    tapam21L: Boolean,
    tapam22R: Boolean,
    tapam22L: Boolean,
    tapam23R: Boolean,
    tapam23L: Boolean,
    tapam24R: Boolean,
    tapam24L: Boolean,
    tapam25R: Boolean,
    tapam25L: Boolean,
    tapam26R: Boolean,
    tapam26L: Boolean,

    empaquem11R: Boolean,
    empaquem11L: Boolean,
    empaquem12R: Boolean,
    empaquem12L: Boolean,
    empaquem13R: Boolean,
    empaquem13L: Boolean,
    empaquem14R: Boolean,
    empaquem14L: Boolean,
    empaquem15R: Boolean,
    empaquem15L: Boolean,
    empaquem16R: Boolean,
    empaquem16L: Boolean,
    empaquem21R: Boolean,
    empaquem21L: Boolean,
    empaquem22R: Boolean,
    empaquem22L: Boolean,
    empaquem23R: Boolean,
    empaquem23L: Boolean,
    empaquem24R: Boolean,
    empaquem24L: Boolean,
    empaquem25R: Boolean,
    empaquem25L: Boolean,
    empaquem26R: Boolean,
    empaquem26L: Boolean,

    piston1m11R: Boolean,
    piston1m11L: Boolean,
    piston1m12R: Boolean,
    piston1m12L: Boolean,
    piston1m13R: Boolean,
    piston1m13L: Boolean,
    piston1m14R: Boolean,
    piston1m14L: Boolean,
    piston1m15R: Boolean,
    piston1m15L: Boolean,
    piston1m16R: Boolean,
    piston1m16L: Boolean,
    piston1m21R: Boolean,
    piston1m21L: Boolean,
    piston1m22R: Boolean,
    piston1m22L: Boolean,
    piston1m23R: Boolean,
    piston1m23L: Boolean,
    piston1m24R: Boolean,
    piston1m24L: Boolean,
    piston1m25R: Boolean,
    piston1m25L: Boolean,
    piston1m26R: Boolean,
    piston1m26L: Boolean,

    capaUm11R: Boolean,
    capaUm11L: Boolean,
    capaUm12R: Boolean,
    capaUm12L: Boolean,
    capaUm13R: Boolean,
    capaUm13L: Boolean,
    capaUm14R: Boolean,
    capaUm14L: Boolean,
    capaUm15R: Boolean,
    capaUm15L: Boolean,
    capaUm16R: Boolean,
    capaUm16L: Boolean,
    capaUm21R: Boolean,
    capaUm21L: Boolean,
    capaUm22R: Boolean,
    capaUm22L: Boolean,
    capaUm23R: Boolean,
    capaUm23L: Boolean,
    capaUm24R: Boolean,
    capaUm24L: Boolean,
    capaUm25R: Boolean,
    capaUm25L: Boolean,
    capaUm26R: Boolean,
    capaUm26L: Boolean,

    vastagom11R: Boolean,
    vastagom11L: Boolean,
    vastagom12R: Boolean,
    vastagom12L: Boolean,
    vastagom13R: Boolean,
    vastagom13L: Boolean,
    vastagom14R: Boolean,
    vastagom14L: Boolean,
    vastagom15R: Boolean,
    vastagom15L: Boolean,
    vastagom16R: Boolean,
    vastagom16L: Boolean,
    vastagom21R: Boolean,
    vastagom21L: Boolean,
    vastagom22R: Boolean,
    vastagom22L: Boolean,
    vastagom23R: Boolean,
    vastagom23L: Boolean,
    vastagom24R: Boolean,
    vastagom24L: Boolean,
    vastagom25R: Boolean,
    vastagom25L: Boolean,
    vastagom26R: Boolean,
    vastagom26L: Boolean,

    tubo1_8m11R: Boolean,
    tubo1_8m11L: Boolean,
    tubo1_8m12R: Boolean,
    tubo1_8m12L: Boolean,
    tubo1_8m13R: Boolean,
    tubo1_8m13L: Boolean,
    tubo1_8m14R: Boolean,
    tubo1_8m14L: Boolean,
    tubo1_8m15R: Boolean,
    tubo1_8m15L: Boolean,
    tubo1_8m16R: Boolean,
    tubo1_8m16L: Boolean,
    tubo1_8m21R: Boolean,
    tubo1_8m21L: Boolean,
    tubo1_8m22R: Boolean,
    tubo1_8m22L: Boolean,
    tubo1_8m23R: Boolean,
    tubo1_8m23L: Boolean,
    tubo1_8m24R: Boolean,
    tubo1_8m24L: Boolean,
    tubo1_8m25R: Boolean,
    tubo1_8m25L: Boolean,
    tubo1_8m26R: Boolean,
    tubo1_8m26L: Boolean,

    pistonm11R: Boolean,
    pistonm11L: Boolean,
    pistonm12R: Boolean,
    pistonm12L: Boolean,
    pistonm13R: Boolean,
    pistonm13L: Boolean,
    pistonm14R: Boolean,
    pistonm14L: Boolean,
    pistonm15R: Boolean,
    pistonm15L: Boolean,
    pistonm16R: Boolean,
    pistonm16L: Boolean,
    pistonm21R: Boolean,
    pistonm21L: Boolean,
    pistonm22R: Boolean,
    pistonm22L: Boolean,
    pistonm23R: Boolean,
    pistonm23L: Boolean,
    pistonm24R: Boolean,
    pistonm24L: Boolean,
    pistonm25R: Boolean,
    pistonm25L: Boolean,
    pistonm26R: Boolean,
    pistonm26L: Boolean,

    esprea2m11R: Boolean,
    esprea2m11L: Boolean,
    esprea2m12R: Boolean,
    esprea2m12L: Boolean,
    esprea2m13R: Boolean,
    esprea2m13L: Boolean,
    esprea2m14R: Boolean,
    esprea2m14L: Boolean,
    esprea2m15R: Boolean,
    esprea2m15L: Boolean,
    esprea2m16R: Boolean,
    esprea2m16L: Boolean,
    esprea2m21R: Boolean,
    esprea2m21L: Boolean,
    esprea2m22R: Boolean,
    esprea2m22L: Boolean,
    esprea2m23R: Boolean,
    esprea2m23L: Boolean,
    esprea2m24R: Boolean,
    esprea2m24L: Boolean,
    esprea2m25R: Boolean,
    esprea2m25L: Boolean,
    esprea2m26R: Boolean,
    esprea2m26L: Boolean,

    valvula1_3m11R: Boolean,
    valvula1_3m11L: Boolean,
    valvula1_3m12R: Boolean,
    valvula1_3m12L: Boolean,
    valvula1_3m13R: Boolean,
    valvula1_3m13L: Boolean,
    valvula1_3m14R: Boolean,
    valvula1_3m14L: Boolean,
    valvula1_3m15R: Boolean,
    valvula1_3m15L: Boolean,
    valvula1_3m16R: Boolean,
    valvula1_3m16L: Boolean,
    valvula1_3m21R: Boolean,
    valvula1_3m21L: Boolean,
    valvula1_3m22R: Boolean,
    valvula1_3m22L: Boolean,
    valvula1_3m23R: Boolean,
    valvula1_3m23L: Boolean,
    valvula1_3m24R: Boolean,
    valvula1_3m24L: Boolean,
    valvula1_3m25R: Boolean,
    valvula1_3m25L: Boolean,
    valvula1_3m26R: Boolean,
    valvula1_3m26L: Boolean,

    esprea1m11R: Boolean,
    esprea1m11L: Boolean,
    esprea1m12R: Boolean,
    esprea1m12L: Boolean,
    esprea1m13R: Boolean,
    esprea1m13L: Boolean,
    esprea1m14R: Boolean,
    esprea1m14L: Boolean,
    esprea1m15R: Boolean,
    esprea1m15L: Boolean,
    esprea1m16R: Boolean,
    esprea1m16L: Boolean,
    esprea1m21R: Boolean,
    esprea1m21L: Boolean,
    esprea1m22R: Boolean,
    esprea1m22L: Boolean,
    esprea1m23R: Boolean,
    esprea1m23L: Boolean,
    esprea1m24R: Boolean,
    esprea1m24L: Boolean,
    esprea1m25R: Boolean,
    esprea1m25L: Boolean,
    esprea1m26R: Boolean,
    esprea1m26L: Boolean,

    tuercam11R: Boolean,
    tuercam11L: Boolean,
    tuercam12R: Boolean,
    tuercam12L: Boolean,
    tuercam13R: Boolean,
    tuercam13L: Boolean,
    tuercam14R: Boolean,
    tuercam14L: Boolean,
    tuercam15R: Boolean,
    tuercam15L: Boolean,
    tuercam16R: Boolean,
    tuercam16L: Boolean,
    tuercam21R: Boolean,
    tuercam21L: Boolean,
    tuercam22R: Boolean,
    tuercam22L: Boolean,
    tuercam23R: Boolean,
    tuercam23L: Boolean,
    tuercam24R: Boolean,
    tuercam24L: Boolean,
    tuercam25R: Boolean,
    tuercam25L: Boolean,
    tuercam26R: Boolean,
    tuercam26L: Boolean,

    cabezaCm11R: Boolean,
    cabezaCm11L: Boolean,
    cabezaCm12R: Boolean,
    cabezaCm12L: Boolean,
    cabezaCm13R: Boolean,
    cabezaCm13L: Boolean,
    cabezaCm14R: Boolean,
    cabezaCm14L: Boolean,
    cabezaCm15R: Boolean,
    cabezaCm15L: Boolean,
    cabezaCm16R: Boolean,
    cabezaCm16L: Boolean,
    cabezaCm21R: Boolean,
    cabezaCm21L: Boolean,
    cabezaCm22R: Boolean,
    cabezaCm22L: Boolean,
    cabezaCm23R: Boolean,
    cabezaCm23L: Boolean,
    cabezaCm24R: Boolean,
    cabezaCm24L: Boolean,
    cabezaCm25R: Boolean,
    cabezaCm25L: Boolean,
    cabezaCm26R: Boolean,
    cabezaCm26L: Boolean,

    sellom11R: Boolean,
    sellom11L: Boolean,
    sellom12R: Boolean,
    sellom12L: Boolean,
    sellom13R: Boolean,
    sellom13L: Boolean,
    sellom14R: Boolean,
    sellom14L: Boolean,
    sellom15R: Boolean,
    sellom15L: Boolean,
    sellom16R: Boolean,
    sellom16L: Boolean,
    sellom21R: Boolean,
    sellom21L: Boolean,
    sellom22R: Boolean,
    sellom22L: Boolean,
    sellom23R: Boolean,
    sellom23L: Boolean,
    sellom24R: Boolean,
    sellom24L: Boolean,
    sellom25R: Boolean,
    sellom25L: Boolean,
    sellom26R: Boolean,
    sellom26L: Boolean,

    valvula1_1m11R: Boolean,
    valvula1_1m11L: Boolean,
    valvula1_1m12R: Boolean,
    valvula1_1m12L: Boolean,
    valvula1_1m13R: Boolean,
    valvula1_1m13L: Boolean,
    valvula1_1m14R: Boolean,
    valvula1_1m14L: Boolean,
    valvula1_1m15R: Boolean,
    valvula1_1m15L: Boolean,
    valvula1_1m16R: Boolean,
    valvula1_1m16L: Boolean,
    valvula1_1m21R: Boolean,
    valvula1_1m21L: Boolean,
    valvula1_1m22R: Boolean,
    valvula1_1m22L: Boolean,
    valvula1_1m23R: Boolean,
    valvula1_1m23L: Boolean,
    valvula1_1m24R: Boolean,
    valvula1_1m24L: Boolean,
    valvula1_1m25R: Boolean,
    valvula1_1m25L: Boolean,
    valvula1_1m26R: Boolean,
    valvula1_1m26L: Boolean,

    //CILINDROS STCMA/30 -STE TE-06
    tuboCm11R: Boolean,
    tuboCm11L: Boolean,
    tuboCm12R: Boolean,
    tuboCm12L: Boolean,
    tuboCm13R: Boolean,
    tuboCm13L: Boolean,
    tuboCm14R: Boolean,
    tuboCm14L: Boolean,
    tuboCm15R: Boolean,
    tuboCm15L: Boolean,
    tuboCm16R: Boolean,
    tuboCm16L: Boolean,
    tuboCm21R: Boolean,
    tuboCm21L: Boolean,
    tuboCm22R: Boolean,
    tuboCm22L: Boolean,
    tuboCm23R: Boolean,
    tuboCm23L: Boolean,
    tuboCm24R: Boolean,
    tuboCm24L: Boolean,
    tuboCm25R: Boolean,
    tuboCm25L: Boolean,
    tuboCm26R: Boolean,
    tuboCm26L: Boolean,

    cabezaDm11R: Boolean,
    cabezaDm11L: Boolean,
    cabezaDm12R: Boolean,
    cabezaDm12L: Boolean,
    cabezaDm13R: Boolean,
    cabezaDm13L: Boolean,
    cabezaDm14R: Boolean,
    cabezaDm14L: Boolean,
    cabezaDm15R: Boolean,
    cabezaDm15L: Boolean,
    cabezaDm16R: Boolean,
    cabezaDm16L: Boolean,
    cabezaDm21R: Boolean,
    cabezaDm21L: Boolean,
    cabezaDm22R: Boolean,
    cabezaDm22L: Boolean,
    cabezaDm23R: Boolean,
    cabezaDm23L: Boolean,
    cabezaDm24R: Boolean,
    cabezaDm24L: Boolean,
    cabezaDm25R: Boolean,
    cabezaDm25L: Boolean,
    cabezaDm26R: Boolean,
    cabezaDm26L: Boolean,

    ensamblem11R: Boolean,
    ensamblem11L: Boolean,
    ensamblem12R: Boolean,
    ensamblem12L: Boolean,
    ensamblem13R: Boolean,
    ensamblem13L: Boolean,
    ensamblem14R: Boolean,
    ensamblem14L: Boolean,
    ensamblem15R: Boolean,
    ensamblem15L: Boolean,
    ensamblem16R: Boolean,
    ensamblem16L: Boolean,
    ensamblem21R: Boolean,
    ensamblem21L: Boolean,
    ensamblem22R: Boolean,
    ensamblem22L: Boolean,
    ensamblem23R: Boolean,
    ensamblem23L: Boolean,
    ensamblem24R: Boolean,
    ensamblem24L: Boolean,
    ensamblem25R: Boolean,
    ensamblem25L: Boolean,
    ensamblem26R: Boolean,
    ensamblem26L: Boolean,

    vastago06m11R: Boolean,
    vastago06m11L: Boolean,
    vastago06m12R: Boolean,
    vastago06m12L: Boolean,
    vastago06m13R: Boolean,
    vastago06m13L: Boolean,
    vastago06m14R: Boolean,
    vastago06m14L: Boolean,
    vastago06m15R: Boolean,
    vastago06m15L: Boolean,
    vastago06m16R: Boolean,
    vastago06m16L: Boolean,
    vastago06m21R: Boolean,
    vastago06m21L: Boolean,
    vastago06m22R: Boolean,
    vastago06m22L: Boolean,
    vastago06m23R: Boolean,
    vastago06m23L: Boolean,
    vastago06m24R: Boolean,
    vastago06m24L: Boolean,
    vastago06m25R: Boolean,
    vastago06m25L: Boolean,
    vastago06m26R: Boolean,
    vastago06m26L: Boolean,

    camisaAm11R: Boolean,
    camisaAm11L: Boolean,
    camisaAm12R: Boolean,
    camisaAm12L: Boolean,
    camisaAm13R: Boolean,
    camisaAm13L: Boolean,
    camisaAm14R: Boolean,
    camisaAm14L: Boolean,
    camisaAm15R: Boolean,
    camisaAm15L: Boolean,
    camisaAm16R: Boolean,
    camisaAm16L: Boolean,
    camisaAm21R: Boolean,
    camisaAm21L: Boolean,
    camisaAm22R: Boolean,
    camisaAm22L: Boolean,
    camisaAm23R: Boolean,
    camisaAm23L: Boolean,
    camisaAm24R: Boolean,
    camisaAm24L: Boolean,
    camisaAm25R: Boolean,
    camisaAm25L: Boolean,
    camisaAm26R: Boolean,
    camisaAm26L: Boolean,

    cabezaTm12R: Boolean,
    cabezaTm12L: Boolean,
    cabezaTm13R: Boolean,
    cabezaTm13L: Boolean,
    cabezaTm14R: Boolean,
    cabezaTm14L: Boolean,
    cabezaTm15R: Boolean,
    cabezaTm15L: Boolean,
    cabezaTm16R: Boolean,
    cabezaTm16L: Boolean,
    cabezaTm21R: Boolean,
    cabezaTm21L: Boolean,
    cabezaTm22R: Boolean,
    cabezaTm22L: Boolean,
    cabezaTm23R: Boolean,
    cabezaTm23L: Boolean,
    cabezaTm24R: Boolean,
    cabezaTm24L: Boolean,
    cabezaTm25R: Boolean,
    cabezaTm25L: Boolean,
    cabezaTm26R: Boolean,
    cabezaTm26L: Boolean,

    bandaDm12R: Boolean,
    bandaDm12L: Boolean,
    bandaDm13R: Boolean,
    bandaDm13L: Boolean,
    bandaDm14R: Boolean,
    bandaDm14L: Boolean,
    bandaDm15R: Boolean,
    bandaDm15L: Boolean,
    bandaDm16R: Boolean,
    bandaDm16L: Boolean,
    bandaDm21R: Boolean,
    bandaDm21L: Boolean,
    bandaDm22R: Boolean,
    bandaDm22L: Boolean,
    bandaDm23R: Boolean,
    bandaDm23L: Boolean,
    bandaDm24R: Boolean,
    bandaDm24L: Boolean,
    bandaDm25R: Boolean,
    bandaDm25L: Boolean,
    bandaDm26R: Boolean,
    bandaDm26L: Boolean,

    oringsm12R: Boolean,
    oringsm12L: Boolean,
    oringsm13R: Boolean,
    oringsm13L: Boolean,
    oringsm14R: Boolean,
    oringsm14L: Boolean,
    oringsm15R: Boolean,
    oringsm15L: Boolean,
    oringsm16R: Boolean,
    oringsm16L: Boolean,
    oringsm21R: Boolean,
    oringsm21L: Boolean,
    oringsm22R: Boolean,
    oringsm22L: Boolean,
    oringsm23R: Boolean,
    oringsm23L: Boolean,
    oringsm24R: Boolean,
    oringsm24L: Boolean,
    oringsm25R: Boolean,
    oringsm25L: Boolean,
    oringsm26R: Boolean,
    oringsm26L: Boolean,

    valvulaC1_1m12R: Boolean,
    valvulaC1_1m12L: Boolean,
    valvulaC1_1m13R: Boolean,
    valvulaC1_1m13L: Boolean,
    valvulaC1_1m14R: Boolean,
    valvulaC1_1m14L: Boolean,
    valvulaC1_1m15R: Boolean,
    valvulaC1_1m15L: Boolean,
    valvulaC1_1m16R: Boolean,
    valvulaC1_1m16L: Boolean,
    valvulaC1_1m21R: Boolean,
    valvulaC1_1m21L: Boolean,
    valvulaC1_1m22R: Boolean,
    valvulaC1_1m22L: Boolean,
    valvulaC1_1m23R: Boolean,
    valvulaC1_1m23L: Boolean,
    valvulaC1_1m24R: Boolean,
    valvulaC1_1m24L: Boolean,
    valvulaC1_1m25R: Boolean,
    valvulaC1_1m25L: Boolean,
    valvulaC1_1m26R: Boolean,
    valvulaC1_1m26L: Boolean,

    valvulaC0_8m12R: Boolean,
    valvulaC0_8m12L: Boolean,
    valvulaC0_8m13R: Boolean,
    valvulaC0_8m13L: Boolean,
    valvulaC0_8m14R: Boolean,
    valvulaC0_8m14L: Boolean,
    valvulaC0_8m15R: Boolean,
    valvulaC0_8m15L: Boolean,
    valvulaC0_8m16R: Boolean,
    valvulaC0_8m16L: Boolean,
    valvulaC0_8m21R: Boolean,
    valvulaC0_8m21L: Boolean,
    valvulaC0_8m22R: Boolean,
    valvulaC0_8m22L: Boolean,
    valvulaC0_8m23R: Boolean,
    valvulaC0_8m23L: Boolean,
    valvulaC0_8m24R: Boolean,
    valvulaC0_8m24L: Boolean,
    valvulaC0_8m25R: Boolean,
    valvulaC0_8m25L: Boolean,
    valvulaC0_8m26R: Boolean,
    valvulaC0_8m26L: Boolean,

    ensamble06m12R: Boolean,
    ensamble06m12L: Boolean,
    ensamble06m13R: Boolean,
    ensamble06m13L: Boolean,
    ensamble06m14R: Boolean,
    ensamble06m14L: Boolean,
    ensamble06m15R: Boolean,
    ensamble06m15L: Boolean,
    ensamble06m16R: Boolean,
    ensamble06m16L: Boolean,
    ensamble06m21R: Boolean,
    ensamble06m21L: Boolean,
    ensamble06m22R: Boolean,
    ensamble06m22L: Boolean,
    ensamble06m23R: Boolean,
    ensamble06m23L: Boolean,
    ensamble06m24R: Boolean,
    ensamble06m24L: Boolean,
    ensamble06m25R: Boolean,
    ensamble06m25L: Boolean,
    ensamble06m26R: Boolean,
    ensamble06m26L: Boolean,

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
module.exports = mongoose.model('mmmeC19', mmmeC19Schema);