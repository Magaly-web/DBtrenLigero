'use stric'

var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var memeC03Schema = Schema({

    date_created: String,
    
        num_inspeccion: String,
        num_tren: String,
        kilometraje: String,
        hora_inicio: String,
        hora_termino: String,
        
        operarioM1:{type: Schema.ObjectId,red:'user'},
        operarioM2:{type: Schema.ObjectId,red:'user'},
        
        luminariasM1:{
            lexanesLimp:Boolean,
            lexanesFisuras:Boolean,
            lexanesRalladuras: Boolean,
            lexanesCompleto: Boolean,
            lexanesBien: Boolean,
            lexanesObserva: String,
            
            soportesLimp:Boolean,
            soportesFisuras:Boolean,
            //soportesRalladuras: Boolean,
            soportesCompleto: Boolean,
            soportesBien: Boolean,
            soportesObserva: String,

            //tornilleraLimp: Boolean,
            //tonilleraFisuras: Boolean,
            //tornilleraRalladura: Boolean,
            tornilleraCompleto: Boolean,
            tornilleraBien: Boolean,
            tornilleraObserva: String,
            
            lamparasLimp: Boolean,
            //lamparasFisuras: Boolean,
            //lamparasRalladura: Boolean,
            lamparasCompleto: Boolean,
            lamparasBien: Boolean,
            lamparasObserva: String,

            balastrasLimp: Boolean,
            //balastrasFisuras: Boolean,
            //balastrasRalladura: Boolean,
            balastrasCompleto: Boolean,
            balastrasBien: Boolean,
            balastrasObserva: String,

            cableadoLimp: Boolean,
            //cableadoFisuras: Boolean,
            //cableadoRalladura: Boolean,
            cableadoCompleto: Boolean,
            cableadoBien: Boolean,
            cableadoObserva: String,
        },

        luminariasM2:{
            lexanesLimpM2:Boolean,
            lexanesFisurasM2:Boolean,
            lexanesRalladurasM2: Boolean,
            lexanesCompletoM2: Boolean,
            lexanesBienM2: Boolean,
            lexanesObservaM2: String,
            
            soportesLimpM2:Boolean,
            soportesFisurasM2:Boolean,
            //soportesRalladurasM2: Boolean,
            soportesCompletoM2: Boolean,
            soportesBienM2: Boolean,
            soportesObservaM2: String,

            //tornilleraLimpM2: Boolean,
            //tonilleraFisurasM2: Boolean,
            //tornilleraRalladuraM2: Boolean,
            tornilleraCompletoM2: Boolean,
            tornilleraBienM2: Boolean,
            tornilleraObservaM2: String,
            
            lamparasLimpM2: Boolean,
            //lamparasFisurasM2: Boolean,
            //lamparasRalladuraM2: Boolean,
            lamparasCompletoM2: Boolean,
            lamparasBienM2: Boolean,
            lamparasObservaM2: String,

            balastrasLimpM2: Boolean,
           // balastrasFisurasM2: Boolean,
            //balastrasRalladuraM2: Boolean,
            balastrasCompletoM2: Boolean,
            balastrasBienM2: Boolean,
            balastrasObservaM2: String,

            cableadoLimpM2: Boolean,
            //cableadoFisurasM2: Boolean,
            //cableadoRalladuraM2: Boolean,
            cableadoCompletoM2: Boolean,
            cableadoBienM2: Boolean,
            cableadoObservaM2: String,
        },

        m2:{
            m2_1: Boolean,
            m2_2: Boolean,
            m2_3: Boolean,
            m2_4: Boolean,
            m2_5: Boolean,
            m2_6: Boolean,
            m2_7: Boolean,
            m2_8: Boolean,
            m2_9: Boolean,

            m2_1_1: Boolean,
            m2_1_2: Boolean,
            m2_1_3: Boolean,
            m2_1_4: Boolean,
            m2_1_5: Boolean,
            m2_1_6: Boolean,
            m2_1_7: Boolean,
            m2_1_8: Boolean,
            m2_1_9: Boolean,
        },

        m1:{
            m1_1: Boolean,
            m1_2: Boolean,
            m1_3: Boolean,
            m1_4: Boolean,
            m1_5: Boolean,
            m1_6: Boolean,
            m1_7: Boolean,
            m1_8: Boolean,
            m1_9: Boolean,

            m1_1_1: Boolean,
            m1_1_2: Boolean,
            m1_1_3: Boolean,
            m1_1_4: Boolean,
            m1_1_5: Boolean,
            m1_1_6: Boolean,
            m1_1_7: Boolean,
            m1_1_8: Boolean,
            m1_1_9: Boolean,
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

        //-------------------
        supervisor:{type: Schema.ObjectId,red:'user'},
        jefeDeTurno: {type: Schema.ObjectId,red:'user'},
        subgteMeyE: {type: Schema.ObjectId,red:'user'},
        clave: String,   
});

module.exports =mongoose.model('memeC03', memeC03Schema);