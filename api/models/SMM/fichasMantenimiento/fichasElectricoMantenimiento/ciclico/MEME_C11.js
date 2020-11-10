'use strict'

var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var memeC11Schema = Schema({
    date_created: String,
    
        num_inspeccion: String,
        num_tren: String,
        kilometraje: String,
        hora_inicio: String,
        hora_termino: String,
        
        operario:{type: Schema.ObjectId,red:'user'},
        
        motriz:{

            m1seLimp: Boolean,
            m1seb: Boolean,
            m1sec: Boolean,
            m1seLub: Boolean,
            m1seObs: String,

            m1orLimp: Boolean,
            m1orb: Boolean,
            m1orc: Boolean,
            m1orLub: Boolean,
            m1orObs: String,

            m1toLimp: Boolean,
            m1tob: Boolean,
            m1toc: Boolean,
            m1toLub: Boolean,
            m1toObs: String,


            m2seLimp: Boolean,
            m2seb: Boolean,
            m2sec: Boolean,
            m2seLub: Boolean,
            m2seObs: String,

            m2orLimp: Boolean,
            m2orb: Boolean,
            m2orc: Boolean,
            m2orLub: Boolean,
            m2orObs: String,

            m2toLimp: Boolean,
            m2tob: Boolean,
            m2toc: Boolean,
            m2toLub: Boolean,
            m2toObs: String,
            
            //---------------
            r1seLimp: Boolean,
            r1seb: Boolean,
            r1sec: Boolean,
            r1seLub: Boolean,
            r1seObs: String,

            r1orLimp: Boolean,
            r1orb: Boolean,
            r1orc: Boolean,
            r1orLub: Boolean,
            r1orObs: String,

            r1toLimp: Boolean,
            r1tob: Boolean,
            r1toc: Boolean,
            r1toLub: Boolean,
            r1toObs: String,


            r2seLimp: Boolean,
            r2seb: Boolean,
            r2sec: Boolean,
            r2seLub: Boolean,
            r2seObs: String,

            r2orLimp: Boolean,
            r2orb: Boolean,
            r2orc: Boolean,
            r2orLub: Boolean,
            r2orObs: String,

            r2toLimp: Boolean,
            r2tob: Boolean,
            r2toc: Boolean,
            r2toLub: Boolean,
            r2toObs: String,
        },
        tomas:{
            tx11Rev: Boolean,
            tx11Sop: Boolean,
            tx11Limp: Boolean,
            tx11Obs: String,

            tx12Rev: Boolean,
            tx12Sop: Boolean,
            tx12Limp: Boolean,
            tx12Obs: String,

            tx13Rev: Boolean,
            tx13Sop: Boolean,
            tx13Limp: Boolean,
            tx13Obs: String,

            tx14Rev: Boolean,
            tx14Sop: Boolean,
            tx14Limp: Boolean,
            tx14Obs: String,

            tx15Rev: Boolean,
            tx15Sop: Boolean,
            tx15Limp: Boolean,
            tx15Obs: String,

            tx16Rev: Boolean,
            tx16Sop: Boolean,
            tx16Limp: Boolean,
            tx16Obs: String,

            tx17Rev: Boolean,
            tx17Sop: Boolean,
            tx17Limp: Boolean,
            tx17Obs: String,

            tx19Rev: Boolean,
            tx19Sop: Boolean,
            tx19Limp: Boolean,
            tx19Obs: String,
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

module.exports =mongoose.model('memeC11', memeC11Schema);