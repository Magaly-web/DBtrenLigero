'use strict'
var moment = require('moment');

var memeC05 = require('../../../../../models/SMM/fichasMantenimiento/fichasElectricoMantenimiento/ciclico/MEME_C05');
var User = require('../../../../../models/user');

function saveMemeC05(req, res){
    var params = req.body;
    var MEME_C05 = new memeC05();
    
    MEME_C05.date_created=moment().format('DD/MM/YYYY');

    MEME_C05.num_inspeccion = params.num_inspeccion;
    MEME_C05.num_tren = params.num_tren;
    MEME_C05.kilometraje = params.kilometraje;
    MEME_C05.hora_inicio = params.hora_inicio;
    MEME_C05.hora_termino = params.hora_termino;

    MEME_C05.operario = params.operario;

    MEME_C05.cdb.cbl = params.cbl;
    MEME_C05.cdb.cbr = params.cbr;
    MEME_C05.cdb.cba = params.cba;
    MEME_C05.cdb.cblu = params.cblu;

    MEME_C05.cdb.cl = params.cl;
    MEME_C05.cdb.cr = params.cr;
    MEME_C05.cdb.ca = params.ca;
    MEME_C05.cdb.clu = params.clu;

    MEME_C05.cdb.col = params.col;
    MEME_C05.cdb.cor = params.cor;
    MEME_C05.cdb.colu = params.colu;

    MEME_C05.cdb.rl = params.rl;
    MEME_C05.cdb.rr = params.rr;
    MEME_C05.cdb.rlu = params.rlu;

    MEME_C05.cdb.bl = params.bl;
    MEME_C05.cdb.br = params.br;
    MEME_C05.cdb.ba = params.ba;

    MEME_C05.observaciones = params.observaciones;

    MEME_C05.materialUtilizado.codigo = params.codigo;
    MEME_C05.materialUtilizado.descMaterial = params.descMaterial;
    MEME_C05.materialUtilizado.cantidad= params.cantidad;
    MEME_C05.materialUtilizado.noVale =params.noVale;

    MEME_C05.supervisor = params.supervisor;
    MEME_C05.jefeDeTurno = params.jefeDeTurno;
    MEME_C05.subgteMeyE = params.subgteMeyE;
    MEME_C05.clave = params.clave;

    MEME_C05.save((err,MEME_C05Stored)=>{
        if(err)return res.status(500).send({message: 'Error al guardar formulario'});

        if(!MEME_C05Stored) return res.status(404).send({message: 'El formulario no ha sido guardado'});
        
        return res.status(200).send({MEME_C05: MEME_C05Stored});

    });

}

//Conseguir datos
function getMEMEC05(req, res){
    var memeC05Id = req.params.id;

    memeC05.findById(memeC05Id, (err, memeC05)=>{
        if(err)
        return res.status(500).send({message: 'Error en la peticion'})

        if(!memeC05) return res.status(404).send({message: 'El formulario no existe'});

        return res.status(200).send({memeC05});
    });
}

//Actualizacion de datos

function updateMEMEC05(req, res){
    var memeC05Id = req.params.id;
    var update = req.body;

        memeC05.findByIdAndUpdate(memeC05Id, update, {new:true}, (err, memeC05Updated) => {
            if(err) return res.status(500).send({message: 'Error en la peticion'});
    
            if(!memeC05Updated) return res.status(404).send({message: 'No se ha podido actualizar el usuario'});
    
            return res.status(200).send({memeC05: memeC05Updated});
        });
}

module.exports = {
    saveMemeC05,
    getMEMEC05,
    updateMEMEC05
}