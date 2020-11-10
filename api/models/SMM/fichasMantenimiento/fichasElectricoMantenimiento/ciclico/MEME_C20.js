'use strict'

var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var memeC20Schema = Schema({
    
    date_created: String,
    
        num_inspeccion: String,
        num_tren: String,
        kilometraje: String,
        hora_inicio: String,
        hora_termino: String,
        
        operario:{type: Schema.ObjectId,red:'user'},
        operador:{type: Schema.ObjectId,red:'user'},
        
        //Señal
        c1: String,
        n1: String,

        c2: String,
        n2: String,

        c3: String,
        n3: String,

        c4: String,
        n4: String,

        c5: String,
        n5: String,

        c6: String,
        n6: String,

        c7: String,
        n7: String,

        c8: String,
        n8: String,

        //Motriz 1
        m1p1: Number,
        m1v1: String,
        m1li1: String,
        m1g1: Number,

        m1p2: Number,
        m1v2: String,
        m1li2: String,
        m1g2: Number,

        m1p3: Number,
        m1v3: String,
        m1li3: String,
        m1g3: Number,

        m1p4: Number,
        m1v4: String,
        m1li4: String,
        m1g4: Number,
        
        //Motriz 2
        m2p5: Number,
        m2v5: String,
        m2li5: String,
        m2g5: Number,

        m2p6: Number,
        m2v6: String,
        m2li6: String,
        m2g6: Number,

        m2p7: Number,
        m2v7: String,
        m2li7: String,
        m2g7: Number,

        m2p8: Number,
        m2v8: String,
        m2li8: String,
        m2g8: Number,

        vi1: String,
        vi2: String,
        vi3: String,
        vi4: String,
        vi5: String,
        vi6: String,
        vi7: String,
        vi8: String,

        dm1: String,
        dm2: String,
        dm3: String,
        dm4: String,
        dm5: String,
        dm6: String,
        dm7: String,
        dm8: String,

        rf1: String,
        rf2: String,
        rf3: String,
        rf4: String,
        rf5: String,
        rf6: String,
        rf7: String,
        rf8: String,

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
module.exports =mongoose.model('memeC20', memeC20Schema);