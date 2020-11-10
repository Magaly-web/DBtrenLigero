'use stric'

var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var memeC04Schema = Schema({
    date_created: String,
    
        num_inspeccion: String,
        num_tren: String,
        kilometraje: String,
        hora_inicio: String,
        hora_termino: String,
        
        operarioM1:{type: Schema.ObjectId,red:'user'},
        operarioM2:{type: Schema.ObjectId,red:'user'},

        m2:{
            m2_1: Boolean,
            m2_2: Boolean,
            m2_3: Boolean,
            m2_4: Boolean,
            m2_5: Boolean,
            m2_6: Boolean,
            m2_7: Boolean,
        },
        m1:{
            m1_1: Boolean,
            m1_2: Boolean,
            m1_3: Boolean,
            m1_4: Boolean,
            m1_5: Boolean,
            m1_6: Boolean,
            m1_7: Boolean,
        },

        ventilador:{
            ventiRevision: Boolean,
            ventiLimp: Boolean,
            //ventiLubrica: Boolean,
            ventiObserva: String,

            motorVentiladorRevision: Boolean,
            motorVentiladorLimp: Boolean,
            //motorVentiladorLubrica: Boolean,
            motorVentiladorObserva: String,

            conexionesElectriRevision: Boolean,
            conexionesElectriLimp: Boolean,
            //conexionesElectriLubrica:Boolean,
            conexionesElectriObserva: String,

            tapaRevision: Boolean,
            tapaLimp: Boolean,
            //tapaLubrica: Boolean,
            tapaObserva: String,

            pestillosRevision: Boolean,
            pestillosLimp: Boolean,
            pestillosLubrica: Boolean,
            pestillosObserva: String,

            ductosRevision: Boolean,
            ductosLimp: Boolean,
            //ductosLubrica: Boolean,
            ductosObserva: String,
        },

        observaciones: String,
        
        //-----------------------
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
        subgteMEyE: {type: Schema.ObjectId,red:'user'},
        
        clave: String,
});

module.exports =mongoose.model('memeC04', memeC04Schema);
