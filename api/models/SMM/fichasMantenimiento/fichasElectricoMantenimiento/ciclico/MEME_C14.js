'use strict'

var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var memeC14Schema = Schema({
    date_created: String,
    
        num_inspeccion: String,
        num_tren: String,
        kilometraje: String,
        hora_inicio: String,
        hora_termino: String,
        
        operario:{type: Schema.ObjectId,red:'user'},

        bcbs:{
            m1car: Boolean,
            m1cal:Boolean,
            rcar: Boolean,
            rcal: Boolean,
            m2car: Boolean,
            m2cal: Boolean,
            obsca: String,

            m1zar: Boolean,
            m1zal:Boolean,
            rzar: Boolean,
            rzal: Boolean,
            m2zar: Boolean,
            m2zal: Boolean,
            obsza: String,
            
            m1tor: Boolean,
            m1tol:Boolean,
            rtor: Boolean,
            rtol: Boolean,
            m2tor: Boolean,
            m2tol: Boolean,
            obsto: String,

            m1cbr: Boolean,
            m1cbl:Boolean,
            rcbr: Boolean,
            rcbl: Boolean,
            m2cbr: Boolean,
            m2cbl: Boolean,
            obscb: String,

            m1scr: Boolean,
            m1scl:Boolean,
            rscr: Boolean,
            rscl: Boolean,
            m2scr: Boolean,
            m2scl: Boolean,
            obssc: String,

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

module.exports =mongoose.model('memeC14', memeC14Schema);