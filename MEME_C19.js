'use strict'
var moment = require('moment');

var memeC19 = require('../../../../../models/SMM/fichasMantenimiento/fichasElectricoMantenimiento/ciclico/MEME_C19');
var User = require('../../../../../models/user');

function saveMemeC19(req, res){
    var params = req.body;
    var MEME_C19 = new memeC19();
    
    MEME_C19.date_created=moment().format('DD/MM/YYYY');

    MEME_C19.num_inspeccion = params.num_inspeccion;
    MEME_C19.num_tren = params.num_tren;
    MEME_C19.kilometraje = params.kilometraje;
    MEME_C19.hora_inicio = moment().format('HH:mm');
    MEME_C19.hora_termino = moment().format('HH:mm');

    MEME_C19.operario = params.operario;

    MEME_C19.mdpa.oper1 = params.oper1;
    
    MEME_C19.mdpa.oper2 = params.oper2;
    MEME_C19.mdpa.res2 = params.res2;

    MEME_C19.mdpa.oper3 = params.oper3;
    MEME_C19.mdpa.cons3 = params.cons3;

    MEME_C19.mdpa.oper4 = params.oper4;
    MEME_C19.mdpa.cons4 = params.cons4;

    MEME_C19.mdpa.cons5 = params.cons5;
    MEME_C19.mdpa.res5 = params.res5;
    
    MEME_C19.mdpa.cons6 = params.cons6;
    MEME_C19.mdpa.res6 = params.res6;

    MEME_C19.mdpa.cons7 = params.cons7;
    MEME_C19.mdpa.res7 = params.res7;

    MEME_C19.mdpa.cons8 = params.cons8;
    MEME_C19.mdpa.res8 = params.res8;


    MEME_C19.observaciones = params.observaciones;
    
    MEME_C19.materialUtilizado.codigo = params.codigo;
    MEME_C19.materialUtilizado.descMaterial = params.descMaterial;
    MEME_C19.materialUtilizado.cantidad= params.cantidad;
    MEME_C19.materialUtilizado.noVale =params.noVale;

    MEME_C19.supervisor = params.supervisor;
    MEME_C19.jefeDeTurno = params.jefeDeTurno;
    MEME_C19.subgteMeyE = params.subgteMeyE;
    MEME_C19.clave = params.clave;

    MEME_C19.save((err,MEME_C19Stored)=>{
        if(err)return res.status(500).send({message: 'Error al guardar formulario'});

        if(!MEME_C19Stored) return res.status(404).send({message: 'El formulario no ha sido guardado'});
        
        return res.status(200).send({MEME_C19: MEME_C19Stored});

    });
}

//Conseguir datos
function getMEMEC19(req, res){
    var memeC19Id = req.params.id;

    memeC19.findById(memeC19Id, (err, memeC19)=>{
        if(err)
        return res.status(500).send({message: 'Error en la peticion'})

        if(!memeC19) return res.status(404).send({message: 'El formulario no existe'});

        return res.status(200).send({memeC19});
    });
}

//Actualizacion de datos

function updateMEMEC19(req, res){
    var memeC19Id = req.params.id;
    var update = req.body;

        memeC19.findByIdAndUpdate(memeC19Id, update, {new:true}, (err, memeC19Updated) => {
            if(err) return res.status(500).send({message: 'Error en la peticion'});
    
            if(!memeC19Updated) return res.status(404).send({message: 'No se ha podido actualizar el usuario'});
    
            return res.status(200).send({memeC19: memeC19Updated});
        });
}

module.exports = {
    saveMemeC19,
    getMEMEC19,
    updateMEMEC19
}
