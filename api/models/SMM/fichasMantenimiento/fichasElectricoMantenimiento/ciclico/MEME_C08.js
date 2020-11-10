'use strict'

var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var memeC08Schema = Schema({
    date_created: String,
    
        num_inspeccion: String,
        num_tren: String,
        kilometraje: String,
        hora_inicio: String,
        hora_termino: String,
        
        operario:{type: Schema.ObjectId,red:'user'},
        
        actividadExt:{
            ceaSop: Boolean,
            ceaLimp: Boolean,
            ceaRev: Boolean,

            avSop: Boolean,
            avLimp: Boolean,
            avRev: Boolean,

            tlSop: Boolean,
            tlLimp: Boolean,
            tlRev: Boolean,

            tisSop: Boolean,
            tisLimp: Boolean,
            tidRev: Boolean,
        },

        actividadInt:{
            spLimp: Boolean,
            spRev: Boolean,
            
            ttLimp: Boolean,
            ttRev: Boolean,

            ttaLimp: Boolean,
            ttaRev: Boolean,
        },

        elecInter:{
            cabSop: Boolean,
            cabLimp: Boolean,
            
            tcSop: Boolean,
            tcLimp: Boolean,
            
            celeronSop: Boolean,
            celeronLimp: Boolean,
            
            a01a02Sop: Boolean,
            a01a02Limp: Boolean,

            r11Sop: Boolean,
            r11Limp: Boolean,
            r11Med: Boolean,
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

module.exports =mongoose.model('memeC08', memeC08Schema);