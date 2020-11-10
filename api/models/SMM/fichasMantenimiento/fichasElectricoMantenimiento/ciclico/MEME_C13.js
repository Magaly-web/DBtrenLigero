'use strict'

var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var memeC13Schema = Schema({
    date_created: String,
    
        num_inspeccion: String,
        num_tren: String,
        kilometraje: String,
        hora_inicio: String,
        hora_termino: String,
        
        operario:{type: Schema.ObjectId,red:'user'},

        //Contactos principales
        contaP:{
            pcpl: Boolean,
            pcpr: Boolean,
            pcpo: String,
            pccl: Boolean,
            pccr: Boolean,
            pcco: String,
            pcrfl: Boolean,
            pcrfr: Boolean,
            pcrfo: String,
            pctl: Boolean,
            pctr: Boolean,
            pcto: String
        },
        //Contactos Axiliares

        contaux:{
            acpl: Boolean,
            acpr: Boolean,
            acpo: String,
            accl: Boolean,
            accr: Boolean,
            acco: String,
            acrfl: Boolean,
            acrfr: Boolean,
            acrfo: String,
            actl: Boolean,
            actr: Boolean,
            acto: String
        },
        ctrl:{
            cmel: Boolean,
            cmer: Boolean,
            cmeo: String,
            radl: Boolean,
            radr: Boolean,
            rado: String,
            ratl: Boolean,
            ratr: Boolean,
            rato: String,
            cvtl: Boolean,
            cvtr: Boolean,
            cvto: String,
            cv1l: Boolean,
            cv1r: Boolean,
            cv1o: String,
            cv2l: Boolean,
            cv2r: Boolean,
            cv2o: String,
            cfsl: Boolean,
            cfsr: Boolean,
            cfso: String,
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

module.exports =mongoose.model('memeC13', memeC13Schema);