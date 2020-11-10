'use stric'

var mongoose = require('mongoose');//Cargamos el modulo de mongoose
var Schema = mongoose.Schema;//creamos la variable esquema que, nos permite definir un nuevo esquema(objeto)
var memeC02Schema = Schema({//Definicion de la estructura para el usuario
    date_created: String,
        
        num_inspeccion: String,
        num_tren: String,
        kilometraje: String,
        hora_inicio: String,
        hora_termino: String,
    
    user:{type: Schema.ObjectId,red:'user'},

    medidasDeCarbon:{
        m1ant: Number,
        m1post:Number,
        remolAnt: Number,
        remolPost: Number,
        m2ant: Number,
        m2post: Number
    },

    cajaFrost:{
        m1AntLimp: Boolean,
        m1AntRev: Boolean,
        m1PostLimp: Boolean,
        m1PostRev: Boolean,

        remolAntLimp: Boolean,
        remolAntRev: Boolean,
        remolPostLimp: Boolean,
        remolPostRev: Boolean,

        m2AntLimp: Boolean,
        m2AntRev: Boolean,
        m2PostLimp: Boolean,
        m2PostRev: Boolean
    },
    observaciones: String,
    
    //Materiales
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
//-------------------------
    clave: String,

    supervisor:{type: Schema.ObjectId,red:'user'},
    jefeDeTurno:{type: Schema.ObjectId,red:'user'},
    subgteMEYE:{type: Schema.ObjectId,red:'user'},

});

module.exports = mongoose.model('memeC02', memeC02Schema);//lo exportamos para poder utilizar el modelo