'use strict'
var moment = require('moment');

var memeC12 = require('../../../../../models/SMM/fichasMantenimiento/fichasElectricoMantenimiento/ciclico/MEME_C12');
var User = require('../../../../../models/user');

function saveMemeC12(req, res){
    var params = req.body;
    var MEME_C12 = new memeC12();
    
    MEME_C12.date_created=moment().format('DD/MM/YYYY');

    MEME_C12.num_inspeccion = params.num_inspeccion;
    MEME_C12.num_tren = params.num_tren;
    MEME_C12.kilometraje = params.kilometraje;
    MEME_C12.hora_inicio = moment().format('HH:mm');
    MEME_C12.hora_termino = moment().format('HH:mm');

    MEME_C12.operario = params.operario;

    MEME_C12.tornillo.trev = params.trev;
    MEME_C12.tornillo.tlimp = params.tlimp;
    MEME_C12.tornillo.tlubri = params.tlubri;
    MEME_C12.tornillo.tcamb = params.tcamb;

    MEME_C12.tapas.tarev = params.tarev;
    MEME_C12.tapas.talimp = params.talimp;
    MEME_C12.tapas.talubri = params.talubri;
    MEME_C12.tapas.tacamb = params.tacamb;

    MEME_C12.soporte.sfrev = params.sfrev;
    MEME_C12.soporte.sflimp = params.sflimp;
    MEME_C12.soporte.sflubri = params.sflubri;
    MEME_C12.soporte.sfcamb = params.sfcamb;

    MEME_C12.palanca.prev = params.prev;
    MEME_C12.palanca.plimp = params.plimp;
    MEME_C12.palanca.plubri = params.plubri;
    MEME_C12.palanca.pcamb = params.pcamb;

    MEME_C12.seguros.srev = params.srev;
    MEME_C12.seguros.slimp = params.slimp;
    MEME_C12.seguros.slubri = params.slubri;
    MEME_C12.seguros.scamb = params.scamb;

    MEME_C12.resorte.rerev = params.rerev;
    MEME_C12.resorte.relimp = params.relimp;
    MEME_C12.resorte.relubri = params.relubri;
    MEME_C12.resorte.recamb = params.recamb;

    MEME_C12.observaciones = params.observaciones;
    MEME_C12.materialUtilizado.codigo = params.codigo;
    MEME_C12.materialUtilizado.descMaterial = params.descMaterial;
    MEME_C12.materialUtilizado.cantidad= params.cantidad;
    MEME_C12.materialUtilizado.noVale =params.noVale;

    MEME_C12.supervisor = params.supervisor;
    MEME_C12.jefeDeTurno = params.jefeDeTurno;
    MEME_C12.subgteMeyE = params.subgteMeyE;
    MEME_C12.clave = params.clave;

    MEME_C12.save((err,MEME_C12Stored)=>{
        if(err)return res.status(500).send({message: 'Error al guardar formulario'});

        if(!MEME_C12Stored) return res.status(404).send({message: 'El formulario no ha sido guardado'});
        
        return res.status(200).send({MEME_C12: MEME_C12Stored});

    });
}

//Conseguir datos
function getMEMEC12(req, res){
    var memeC12Id = req.params.id;

    memeC12.findById(memeC12Id, (err, memeC12)=>{
        if(err)
        return res.status(500).send({message: 'Error en la peticion'})

        if(!memeC12) return res.status(404).send({message: 'El formulario no existe'});

        return res.status(200).send({memeC12});
    });
}

//Actualizacion de datos

function updateMEMEC12(req, res){
    var memeC12Id = req.params.id;
    var update = req.body;

        memeC11.findByIdAndUpdate(memeC12Id, update, {new:true}, (err, memeC12Updated) => {
            if(err) return res.status(500).send({message: 'Error en la peticion'});
    
            if(!memeC12Updated) return res.status(404).send({message: 'No se ha podido actualizar el usuario'});
    
            return res.status(200).send({memeC12: memeC12Updated});
        });
}

module.exports = {
    saveMemeC12,
    getMEMEC12,
    updateMEMEC12
}
