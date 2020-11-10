'use strict'

var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var memeC21Schema = Schema({
    
    date_created: String,
    
        num_inspeccion: String,
        num_tren: String,
        kilometraje: String,
        hora_inicio: String,
        hora_termino: String,
        
        operario:{type: Schema.ObjectId,red:'user'},
        
       // eqMo Equipo Motriz
           dom1ins: Boolean,
           dom2ins: Boolean,
           dom1lim: Boolean,
           dom2lim: Boolean,
           doObs: String,
           
           cem1ins: Boolean,
           cem2ins: Boolean,
           cem1lim: Boolean,
           cem2lim: Boolean,
           ceObs: String,

           cmm1ins: Boolean,
           cmm2ins: Boolean,
           cmm1lim: Boolean,
           cmm2lim: Boolean,
           cmObs: String,

           lpm1ins: Boolean,
           lpm2ins: Boolean,
           lpm1lim: Boolean,
           lpm2lim: Boolean,
           lpObs: String,

           ccm1ins: Boolean,
           ccm2ins: Boolean,
           ccm1lim: Boolean,
           ccm2lim: Boolean,
           ccObs: String,

           ivm1ins: Boolean,
           ivm2ins: Boolean,
           ivm1lim: Boolean,
           ivm2lim: Boolean,
           ivObs: String,

           sivm1ins: Boolean,
           sivm2ins: Boolean,
           sivm1lim: Boolean,
           sivm2lim: Boolean,
           sivObs: String,

           icim1ins: Boolean,
           icim2ins: Boolean,
           icim1lim: Boolean,
           icim2lim: Boolean,
           iciObs: String,

        observaciones: String,

              //materialUtilizado

              codigo1: String,
              desc1: String,
              novale1: Number,
              cant1: String,
              unidad1: String,
      
              codigo2: String,
              desc2: String,
              novale2: Number,
              cant2: String,
              unidad2: String,
      
              codigo3: String,
              desc3: String,
              novale3: Number,
              cant3: String,
              unidad3: String,
      
              codigo4: String,
              desc4: String,
              novale4: Number,
              cant4: String,
              unidad4: String,
      
              codigo5: String,
              desc5: String,
              novale5: Number,
              cant5: String,
              unidad5: String,
      
              codigo6: String,
              desc6: String,
              novale6: Number,
              cant6: String,
              unidad6: String,
      
              codigo7: String,
              desc7: String,
              novale7: Number,
              cant7: String,
              unidad7: String,
      
              //-----------------------

        supervisor:{type: Schema.ObjectId,red:'user'},
        jefeDeTurno: {type: Schema.ObjectId,red:'user'},
        subgteMeyE: {type: Schema.ObjectId,red:'user'},
        
        clave: String
});
module.exports =mongoose.model('memeC21', memeC21Schema);