'use strict'

var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var memeC07Schema = Schema({
    date_created: String,
    
        num_inspeccion: String,
        num_tren: String,
        kilometraje: String,
        hora_inicio: String,
        hora_termino: String,
        
        operario:{type: Schema.ObjectId,red:'user'},
        
        actividad:{
            contenedorSop: Boolean,
            contenedorLimp: Boolean,
            contenedorRev: Boolean,

            ducSop: Boolean,
            ducLimp: Boolean,
            ducRev: Boolean,

            filSop: Boolean,
            filLimp: Boolean,
            filRev: Boolean,
            
            disSop: Boolean,
            disLimp: Boolean,
            disRev: Boolean,
            
            mvSop: Boolean,
            mvLimp: Boolean,
            mvRev: Boolean,
            
            conexSop: Boolean,
            conexLim: Boolean,
            conexRev: Boolean,
        },

        tapCaja:{
            señaSop: Boolean,
            señaLimp: Boolean,
            señaRev: Boolean,

            pestSop: Boolean,
            pestLimp: Boolean,
            pestREv: Boolean,

            lamSop:Boolean,
            lamLimp: Boolean,
            lamRev: Boolean,

            selSop: Boolean,
            selLimp: Boolean,
            selRev: Boolean,
        },

        cedtTe90:{
            a_10Sop: Boolean,
            a_10Limp: Boolean,
            a_10Rev: Boolean,
            a_10Serie: String,

            a_20Sop: Boolean,
            a_20Limp: Boolean,
            a_20Rev: Boolean,
            a_20Serie: String,

            a_30Sop: Boolean,
            a_30Limp: Boolean,
            a_30Rev: Boolean,
            a_30Serie: String,

        },
        cedtTe95:{
            rfddmSop: Boolean,
            rfddmLimp: Boolean,
            rfddmRev: Boolean,

            rpdadvSop: Boolean,
            rpdadvLimp: Boolean,
            rpdadvRev: Boolean,
        },

        epuTe06:{
            indSop: Boolean,
            indLimp: Boolean,
            indRev: Boolean,
            
            ctfSop: Boolean,
            ctfLimp: Boolean,
            ctfRev: Boolean,

            ctvSop: Boolean,
            ctvLimp: Boolean,
            ctvRev: Boolean,

            
            ctpLimp: Boolean,
            ctpRev: Boolean,
            
            catpSop: Boolean,
            catpLimp: Boolean,
            catpRev: Boolean

        },
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
module.exports =mongoose.model('memeC07', memeC07Schema);