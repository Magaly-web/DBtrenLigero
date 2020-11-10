'use strict'

var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var memeC18Schema = Schema({
    date_created: String,
    
        num_inspeccion: String,
        num_tren: String,
        kilometraje: String,
        hora_inicio: String,
        hora_termino: String,
        
        operario:{type: Schema.ObjectId,red:'user'},
        act:{
            cets: Boolean,
            cetl: Boolean,
            cetr: Boolean,

            rts: Boolean,
            rtl: Boolean,
            rtr: Boolean,

            ces: Boolean,
            cel: Boolean,
            cer: Boolean,
            
            fs: Boolean,
            fl: Boolean,
            fr: Boolean,

            cos: Boolean,
            col: Boolean,
            cor: Boolean,

            sfs: Boolean,
            sfl: Boolean,
            sfr: Boolean,
        },
        
        te90:{
            a10s: Boolean,
            a10l: Boolean,
            a10r: Boolean,
            a10n: String,

            a20s: Boolean,
            a20l: Boolean,
            a20r: Boolean,
            a20n: String,

            a30s: Boolean,
            a30l: Boolean,
            a30r: Boolean,
            a30n: String,
        },
        te95:{
            mods: Boolean,
            modl: Boolean,
            modr: Boolean,

            cetso: Boolean,
            cetli: Boolean,
            cetre: Boolean,

            tms: Boolean,
            tml: Boolean,
            tmr: Boolean,
   
        },
        te06:{
            ifls: Boolean,
            ifll: Boolean,
            iflr: Boolean,

            ctfs: Boolean,
            ctfl: Boolean,
            ctfr: Boolean,
            
            ctvs: Boolean,
            ctvl: Boolean,
            ctvr: Boolean,

            ctpl: Boolean,
            ctpr: Boolean,

            hvpl: Boolean,
            hvpr: Boolean,
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
module.exports =mongoose.model('memeC18', memeC18Schema);