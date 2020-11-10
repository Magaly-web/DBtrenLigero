'use strict'

var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var memeC10Schema = Schema({
    date_created: String,
    
        num_inspeccion: String,
        num_tren: String,
        kilometraje: String,
        hora_inicio: String,
        hora_termino: String,
        
        operario:{type: Schema.ObjectId,red:'user'},

        motriz:{

            m1meLimp: Boolean,
            m1meRev: Boolean,
            m1meLub: Boolean,

            m1torLimp: Boolean,
            m1torRev: Boolean,
            
            m1pLimp: Boolean,
            m1pRev: Boolean,

            m1goLimp: Boolean,
            m1goRev: Boolean,

            m1maLimp: Boolean,
            m1maRev: Boolean,

            m1asLimp: Boolean,
            m1asRev: Boolean,

            m1daLimp: Boolean,
            m1daRev: Boolean,

            m1moLimp: Boolean,
            m1moRev: Boolean,

            m1ceLimp: Boolean,
            m1ceRev: Boolean,

            m2meLimp: Boolean,
            m2meRev: Boolean,
            m2meLub: Boolean,

            m2torLimp: Boolean,
            m2torRev: Boolean,
            
            m2pLimp: Boolean,
            m2pRev: Boolean,

            m2goLimp: Boolean,
            m2goRev: Boolean,

            m2maLimp: Boolean,
            m2maRev: Boolean,

            m2asLimp: Boolean,
            m2asRev: Boolean,

            m2daLimp: Boolean,
            m2daRev: Boolean,

            m2moLimp: Boolean,
            m2moRev: Boolean,

            m2ceLimp: Boolean,
            m2ceRev: Boolean,

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

module.exports =mongoose.model('memeC10', memeC10Schema);