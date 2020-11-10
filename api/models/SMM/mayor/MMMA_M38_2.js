'use strict'//usar novedades de JS

var mongoose = require('mongoose');//modulo de moongose
var Schema = mongoose.Schema;//Schema carga moongoose.Schema esto permite definir nuevos esquemas

var mmmaM38_2Schema = Schema({//esquema de la estructura que va a tener los formularios

    date_created: String,
    //datos tren
    noInspeccion: String,
    noTren: String,
    kilometraje: String,
    fechaInicio: String,
    fechaTerminacion: String,
    
    noReductorAntM1: String,
    noReductorPostM1: String,
    noReductorAntM2: String,
    noReductorPostM2: String,

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
    
    codigo21: String,
    desc21: String,
    cant21: String,
    noVale21: Number,
    
    codigo22: String,
    desc22: String,
    cant22: String,
    noVale22: Number,
    
    codigo23: String,
    desc23: String,
    cant23: String,
    noVale23: Number,
    
    codigo24: String,
    desc24: String,
    cant24: String,
    noVale24: Number,
    
    codigo25: String,
    desc25: String,
    cant25: String,
    noVale25: Number,
    
    codigo26: String,
    desc26: String,
    cant26: String,
    noVale26: Number,
    
    codigo27: String,
    desc27: String,
    cant27: String,
    noVale27: Number,
    
    codigo28: String,
    desc28: String,
    cant28: String,
    noVale28: Number,
    
    codigo29: String,
    desc29: String,
    cant29: String,
    noVale29: Number,
    
    codigo30: String,
    desc30: String,
    cant30: String,
    noVale30: Number,
    
    codigo31: String,
    desc31: String,
    cant31: String,
    noVale31: Number,
    
    codigo32: String,
    desc32: String,
    cant32: String,
    noVale32: Number,
    
    codigo33: String,
    desc33: String,
    cant33: String,
    noVale33: Number,
    
    codigo34: String,
    desc34: String,
    cant34: String,
    noVale34: Number,
    
    codigo35: String,
    desc35: String,
    cant35: String,
    noVale35: Number,
    
    codigo36: String,
    desc36: String,
    cant36: String,
    noVale36: Number,
    
    codigo37: String,
    desc37: String,
    cant37: String,
    noVale37: Number,
    
    codigo38: String,
    desc38: String,
    cant38: String,
    noVale38: Number,
    
    codigo39: String,
    desc39: String,
    cant39: String,
    noVale39: Number,
    
    codigo40: String,
    desc40: String,
    cant40: String,
    noVale40: Number,
    
    codigo41: String,
    desc41: String,
    cant41: String,
    noVale41: Number,
    
    codigo42: String,
    desc42: String,
    cant42: String,
    noVale42: Number,
    
    codigo43: String,
    desc43: String,
    cant43: String,
    noVale43: Number,
    
    codigo44: String,
    desc44: String,
    cant44: String,
    noVale44: Number,
    
    codigo45: String,
    desc45: String,
    cant45: String,
    noVale45: Number,
    
    codigo46: String,
    desc46: String,
    cant46: String,
    noVale46: Number,
    
    codigo47: String,
    desc47: String,
    cant47: String,
    noVale47: Number,
    
    codigo48: String,
    desc48: String,
    cant48: String,
    noVale48: Number,
    
    codigo49: String,
    desc49: String,
    cant49: String,
    noVale49: Number,
    
    codigo50: String,
    desc50: String,
    cant50: String,
    noVale50: Number,

    codigo51: String,
    desc51: String,
    cant51: String,
    noVale51: Number,
    
    codigo52: String,
    desc52: String,
    cant52: String,
    noVale52: Number,
    
    codigo53: String,
    desc53: String,
    cant53: String,
    noVale53: Number,
    
    codigo54: String,
    desc54: String,
    cant54: String,
    noVale54: Number,
    
    codigo55: String,
    desc55: String,
    cant55: String,
    noVale55: Number,
    
    codigo56: String,
    desc56: String,
    cant56: String,
    noVale56: Number,
    
    codigo57: String,
    desc57: String,
    cant57: String,
    noVale57: Number,
    
    codigo58: String,
    desc58: String,
    cant58: String,
    noVale58: Number,
    
    codigo59: String,
    desc59: String,
    cant59: String,
    noVale59: Number,
    
    codigo60: String,
    desc60: String,
    cant60: String,
    noVale60: Number,

    supervisor: { type : Schema.ObjectId, ref: 'User'},
    jefeMM: { type : Schema.ObjectId, ref: 'User'},
    sMM: { type : Schema.ObjectId, ref: 'User'},
    clave: String
});
module.exports = mongoose.model('mmmaM38_2', mmmaM38_2Schema);