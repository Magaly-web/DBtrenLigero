'use strict'//usar novedades de JS

var mongoose = require('mongoose');//modulo de moongose
var Schema = mongoose.Schema;//Schema carga moongoose.Schema esto permite definir nuevos esquemas

var mmmaM22_2Schema = Schema({//esquema de la estructura que va a tener el formulario

    date_created: String,

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

    codigo21: String,
    desc21: String,
    cant21: String,
    noVale21: Number,
    observaciones21: String,

    codigo22: String,
    desc22: String,
    cant22: String,
    noVale22: Number,
    observaciones22: String,

    codigo23: String,
    desc23: String,
    cant23: String,
    noVale23: Number,
    observaciones23: String,

    codigo24: String,
    desc24: String,
    cant24: String,
    noVale24: Number,
    observaciones24: String,

    codigo25: String,
    desc25: String,
    cant25: String,
    noVale25: Number,
    observaciones25: String,

    codigo26: String,
    desc26: String,
    cant26: String,
    noVale26: Number,
    observaciones26: String,

    codigo27: String,
    desc27: String,
    cant27: String,
    noVale27: Number,
    observaciones27: String,

    codigo28: String,
    desc28: String,
    cant28: String,
    noVale28: Number,
    observaciones28: String,

    codigo29: String,
    desc29: String,
    cant29: String,
    noVale29: Number,
    observaciones29: String,

    codigo30: String,
    desc30: String,
    cant30: String,
    noVale30: Number,
    observaciones30: String,

    codigo31: String,
    desc31: String,
    cant31: String,
    noVale31: Number,
    observaciones31: String,

    codigo32: String,
    desc32: String,
    cant32: String,
    noVale32: Number,
    observaciones32: String,

    codigo33: String,
    desc33: String,
    cant33: String,
    noVale33: Number,
    observaciones33: String,

    codigo34: String,
    desc34: String,
    cant34: String,
    noVale34: Number,
    observaciones34: String,

    codigo35: String,
    desc35: String,
    cant35: String,
    noVale35: Number,
    observaciones35: String,

    codigo36: String,
    desc36: String,
    cant36: String,
    noVale36: Number,
    observaciones36: String,

    codigo37: String,
    desc37: String,
    cant37: String,
    noVale37: Number,
    observaciones37: String,

    codigo38: String,
    desc38: String,
    cant38: String,
    noVale38: Number,
    observaciones38: String,

    codigo39: String,
    desc39: String,
    cant39: String,
    noVale39: Number,
    observaciones39: String,

    codigo40: String,
    desc40: String,
    cant40: String,
    noVale40: Number,
    observaciones40: String,

    codigo41: String,
    desc41: String,
    cant41: String,
    noVale41: Number,
    observaciones41: String,

    codigo42: String,
    desc42: String,
    cant42: String,
    noVale42: Number,
    observaciones42: String,

    codigo43: String,
    desc43: String,
    cant43: String,
    noVale43: Number,
    observaciones43: String,

    codigo44: String,
    desc44: String,
    cant44: String,
    noVale44: Number,
    observaciones44: String,

    codigo45: String,
    desc45: String,
    cant45: String,
    noVale45: Number,
    observaciones45: String,

    codigo46: String,
    desc46: String,
    cant46: String,
    noVale46: Number,
    observaciones46: String,

    codigo47: String,
    desc47: String,
    cant47: String,
    noVale47: Number,
    observaciones47: String,

    codigo48: String,
    desc48: String,
    cant48: String,
    noVale48: Number,
    observaciones48: String,

    codigo49: String,
    desc49: String,
    cant49: String,
    noVale49: Number,
    observaciones49: String,

    codigo50: String,
    desc50: String,
    cant50: String,
    noVale50: Number,
    observaciones50: String,

    codigo51: String,
    desc51: String,
    cant51: String,
    noVale51: Number,
    observaciones51: String,

    codigo52: String,
    desc52: String,
    cant52: String,
    noVale52: Number,
    observaciones52: String,

    codigo53: String,
    desc53: String,
    cant53: String,
    noVale53: Number,
    observaciones53: String,

    codigo54: String,
    desc54: String,
    cant54: String,
    noVale54: Number,
    observaciones54: String,

    codigo55: String,
    desc55: String,
    cant55: String,
    noVale55: Number,
    observaciones55: String,

    codigo56: String,
    desc56: String,
    cant56: String,
    noVale56: Number,
    observaciones56: String,

    codigo57: String,
    desc57: String,
    cant57: String,
    noVale57: Number,
    observaciones57: String,

    codigo58: String,
    desc58: String,
    cant58: String,
    noVale58: Number,
    observaciones58: String,

    codigo59: String,
    desc59: String,
    cant59: String,
    noVale59: Number,
    observaciones59: String,

    codigo60: String,
    desc60: String,
    cant60: String,
    noVale60: Number,
    observaciones60: String,

    supervisor: { type : Schema.ObjectId, ref: 'User'},
    jefeMM: { type : Schema.ObjectId, ref: 'User'},
    sMM: { type : Schema.ObjectId, ref: 'User'},
    clave: String
});
module.exports = mongoose.model('mmmaM22_2', mmmaM22_2Schema);