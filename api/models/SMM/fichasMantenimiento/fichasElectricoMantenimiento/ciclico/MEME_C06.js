'use strict'

var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var memeC06Schema = Schema({

    date_created: String,
    
        num_inspeccion: String,
        num_tren: String,
        kilometraje: String,
        hora_inicio: String,
        hora_termino: String,
        
        operario:{type: Schema.ObjectId,red:'user'},

        rf90:{
            r1TyPRev90: Boolean,
            r1TyPLimp90: Boolean,

            r1PdARev90: Boolean,
            r1PdALimp90: Boolean,

            r1TorRev90: Boolean,
            r1TorLimp90: Boolean,

            r1SerpRev90: Boolean,
            r1SerpSop90: Boolean,
            r1SerpLimp90: Boolean,

            r1AisRev90: Boolean,
            r1AisLimp90: Boolean,

            r2TyPRev90: Boolean,
            r2TyPLimp90: Boolean,

            r2PdARev90: Boolean,
            r2PdALimp90: Boolean,

            r2TorRev90: Boolean,
            r2TorLimp90: Boolean,

            r2SerpRev90: Boolean,
            r2SerpSop90: Boolean,
            r2SerpLimp90: Boolean,
            
            r2AisRev90: Boolean,
            r2AisLimp90: Boolean,

            r3TyPRev90: Boolean,
            r3TyPLimp90: Boolean,

            r3PdARev90: Boolean,
            r3PdALimp90: Boolean,

            r3TorRev90: Boolean,
            r3TorLimp90: Boolean,

            r3SerpRev90: Boolean,
            r3SerpSop90: Boolean,
            r3SerpLimp90: Boolean,

            r3AisRev90: Boolean,
            r3AisLimp90: Boolean,

            r4TyPRev90: Boolean,
            r4TyPLimp90: Boolean,

            r4PdARev90: Boolean,
            r4PdALimp90: Boolean,

            r4TorRev90: Boolean,
            r4TorLimp90: Boolean,

            r4SerpRev90: Boolean,
            r4SerpSop90: Boolean,
            r4SerpLimp90: Boolean,

            r4AisRev90: Boolean,
            r4AisLimp90: Boolean,

            r5TyPRev90: Boolean,
            r5TyPLimp90: Boolean,

            r5PdARev90: Boolean,
            r5PdALimp90: Boolean,

            r5TorRev90: Boolean,
            r5TorLimp90: Boolean,

            r5SerpRev90: Boolean,
            r5SerpSop90: Boolean,
            r5SerpLimp90: Boolean,

            r5AisRev90: Boolean,
            r5AisLimp90: Boolean,
        },

        rf95:{
            r1TyPRev95: Boolean,
            r1TyPLimp95: Boolean,

            r1PdARev95: Boolean,
            r1PdALimp95: Boolean,

            r1TorRev95: Boolean,
            r1TorLimp95: Boolean,

            r1SerpRev95: Boolean,
            r1SerpSop95: Boolean,
            r1SerpLimp95: Boolean,

            r1AisRev95: Boolean,
            r1AisLimp95: Boolean,

            r2TyPRev95: Boolean,
            r2TyPLimp95: Boolean,

            r2PdARev95: Boolean,
            r2PdALimp95: Boolean,

            r2TorRev95: Boolean,
            r2TorLimp95: Boolean,

            r2SerpRev95: Boolean,
            r2SerpSop95: Boolean,
            r2SerpLimp95: Boolean,

            r2AisRev95: Boolean,
            r2AisLimp95: Boolean,

            r3TyPRev95: Boolean,
            r3TyPLimp95: Boolean,

            r3PdARev95: Boolean,
            r3PdALimp95: Boolean,

            r3TorRev95: Boolean,
            r3TorLimp95: Boolean,
        
            r3SerpRev95: Boolean,
            r3SerpSop95: Boolean,
            r3SerpLimp95: Boolean,

            r3AisRev95: Boolean,
            r3AisLimp95: Boolean,

            r4TyPRev95: Boolean,
            r4TyPLimp95: Boolean,

            r4PdARev95: Boolean,
            r4PdALimp95: Boolean,

            r4TorRev95: Boolean,
            r4TorLimp95: Boolean,

            r4SerpRev95: Boolean,
            r4SerpSop95: Boolean,
            r4SerpLimp95: Boolean,

            r4AisRev95: Boolean,
            r4AisLimp95: Boolean,

            r5TyPRev95: Boolean,
            r5TyPLimp95: Boolean,

            r5PdARev95: Boolean,
            r5PdALimp95: Boolean,

            r5TorRev95: Boolean,
            r5TorLimp95: Boolean,

            r5SerpRev95: Boolean,
            r5SerpSop95: Boolean,
            r5SerpLimp95: Boolean,

            r5AisRev95: Boolean,
            r5AisLimp95: Boolean,

            r6TyPRev95: Boolean,
            r6TyPLimp95: Boolean,

            r6PdARev95: Boolean,
            r6PdALimp95: Boolean,

            r6TorRev95: Boolean,
            r6TorLimp95: Boolean,

            r6SerpRev95: Boolean,
            r6SerpSop95: Boolean,
            r6SerpLimp95: Boolean,

            r6AisRev95: Boolean,
            r6AisLimp95: Boolean,
        },

        rf06:{
            puentesDaluminioRev: Boolean,
            puentesDaluminioSop: Boolean,
                        
            tornilleriaRev: Boolean,
            tornilleriaSop: Boolean,
            
            serpentinesRev: Boolean,
            serpentinesSop: Boolean,
            
            aisladoresRev:  Boolean,
            aisladoresSop: Boolean,
            
            bastidorRev: Boolean,
            bastidoresSop: Boolean,
            bastidorLimp: Boolean,
        },
        
        resistenciaTotal: String,
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

module.exports =mongoose.model('memeC06', memeC06Schema);

