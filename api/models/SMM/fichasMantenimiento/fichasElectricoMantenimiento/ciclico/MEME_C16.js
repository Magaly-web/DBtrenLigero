'use strict'

var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var memeC16Schema = Schema({
    date_created: String,
    
        num_inspeccion: String,
        num_tren: String,
        kilometraje: String,
        hora_inicio: String,
        hora_termino: String,
        
        operario:{type: Schema.ObjectId,red:'user'},

        motriz:{
            mcm1in: Boolean,
            baim1in: Boolean,
            bapm1in: Boolean,
            tmgm1in: Boolean,
            tfem1in: Boolean,
            palm1in: Boolean,
            alom1in: Boolean,

            mcm2in: Boolean,
            baim2in: Boolean,
            bapm2in: Boolean,
            tmgm2in: Boolean,
            tfem2in: Boolean,
            palm2in: Boolean,
            alom2in: Boolean,
            //---------------------------

            mcm1li: Boolean,
            baim1li: Boolean,
            bapm1li: Boolean,
            tmgm1li: Boolean,
            tfem1li: Boolean,
            palm1li: Boolean,
            alom1li: Boolean,

            mcm2li: Boolean,
            baim2li: Boolean,
            bapm2li: Boolean,
            tmgm2li: Boolean,
            tfem2li: Boolean,
            palm2li: Boolean,
            alom2li: Boolean,
//--------------------------

            mcm1fu: Boolean,
            baim1fu: Boolean,
            bapm1fu: Boolean,
            tmgm1fu: Boolean,
            tfem1fu: Boolean,
            palm1fu: Boolean,
            alom1fu: Boolean,

            mcm2fu: Boolean,
            baim2fu: Boolean,
            bapm2fu: Boolean,
            tmgm2fu: Boolean,
            tfem2fu: Boolean,
            palm2fu: Boolean,
            alom2fu: Boolean,

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
module.exports =mongoose.model('memeC16', memeC16Schema);