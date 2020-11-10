'use strict'
var moment = require('moment');

var memeC17 = require('../../../../../models/SMM/fichasMantenimiento/fichasElectricoMantenimiento/ciclico/MEME_C17');
var User = require('../../../../../models/user');

function saveMemeC17(req, res){
    var params = req.body;
    var MEME_C17 = new memeC17();
    
    MEME_C17.date_created=moment().format('DD/MM/YYYY');

    MEME_C17.num_inspeccion = params.num_inspeccion;
    MEME_C17.num_tren = params.num_tren;
    MEME_C17.kilometraje = params.kilometraje;
    MEME_C17.hora_inicio = moment().format('HH:mm');
    MEME_C17.hora_termino = moment().format('HH:mm');

    MEME_C17.operario = params.operario;  

    MEME_C17.tablilla.shn1r = params.shn1r;
    MEME_C17.tablilla.shn1l = params.shn1l;
    MEME_C17.tablilla.shn1a = params.shn1a;
    MEME_C17.tablilla.sha1o = params.sha1o;

    MEME_C17.tablilla.sht1r = params.sht1r;
    MEME_C17.tablilla.sht1l = params.sht1l;
    MEME_C17.tablilla.sht1a = params.sht1a;
    MEME_C17.tablilla.sht1o = params.sht1o;

    MEME_C17.tablilla.bm1r = params.bm1r;
    MEME_C17.tablilla.bm1l = params.bm1l;
    MEME_C17.tablilla.bm1a = params.bm1a;
    MEME_C17.tablilla.bm1o = params.bm1o;

    MEME_C17.tablilla.sht2r = params.sht2r;
    MEME_C17.tablilla.sht2l = params.sht2l;
    MEME_C17.tablilla.sht2a = params.sht2a;
    MEME_C17.tablilla.sht2o = params.sht2o;

    //------------------

    MEME_C17.observaciones = params.observaciones;
    MEME_C17.materialUtilizado.codigo = params.codigo;
    MEME_C17.materialUtilizado.descMaterial = params.descMaterial;
    MEME_C17.materialUtilizado.cantidad= params.cantidad;
    MEME_C17.materialUtilizado.noVale =params.noVale;

    MEME_C17.supervisor = params.supervisor;
    MEME_C17.jefeDeTurno = params.jefeDeTurno;
    MEME_C17.subgteMeyE = params.subgteMeyE;
    MEME_C17.clave = params.clave;

    MEME_C17.save((err,MEME_C17Stored)=>{
        if(err)return res.status(500).send({message: 'Error al guardar formulario'});

        if(!MEME_C17Stored) return res.status(404).send({message: 'El formulario no ha sido guardado'});
        
        return res.status(200).send({MEME_C17: MEME_C17Stored});

    });
}

//Conseguir datos
function getMEMEC17(req, res){
    var memeC17Id = req.params.id;

    memeC17.findById(memeC17Id, (err, memeC17)=>{
        if(err)
        return res.status(500).send({message: 'Error en la peticion'})

        if(!memeC17) return res.status(404).send({message: 'El formulario no existe'});

        return res.status(200).send({memeC17});
    });
}

//Actualizacion de datos

function updateMEMEC17(req, res){
    var memeC17Id = req.params.id;
    var update = req.body;

        memeC17.findByIdAndUpdate(memeC17Id, update, {new:true}, (err, memeC17Updated) => {
            if(err) return res.status(500).send({message: 'Error en la peticion'});
    
            if(!memeC17Updated) return res.status(404).send({message: 'No se ha podido actualizar el usuario'});
    
            return res.status(200).send({memeC17: memeC17Updated});
        });
}

module.exports = {
    saveMemeC17,
    getMEMEC17,
    updateMEMEC17
}
