'use strict'
var moment = require('moment');

var memeC10 = require('../../../../../models/SMM/fichasMantenimiento/fichasElectricoMantenimiento/ciclico/MEME_C10');
var User = require('../../../../../models/user');

function saveMemeC10(req, res){
    var params = req.body;
    var MEME_C10 = new memeC10();
    
    MEME_C10.date_created=moment().format('DD/MM/YYYY');

    MEME_C10.num_inspeccion = params.num_inspeccion;
    MEME_C10.num_tren = params.num_tren;
    MEME_C10.kilometraje = params.kilometraje;
    MEME_C10.hora_inicio = params.hora_inicio;
    MEME_C10.hora_termino = params.hora_termino;

    MEME_C10.operario = params.operario;

    MEME_C10.motriz.m1meLimp = params.m1meLimp;
    MEME_C10.motriz.m1meRev = params.m1meRev;
    MEME_C10.motriz.m1meLub = params.m1meLub;

    MEME_C10.motriz.m1torLimp = params.m1torLimp;
    MEME_C10.motriz.m1torRev = params.m1torRev;

    MEME_C10.motriz.m1pLimp = params.m1pLimp;
    MEME_C10.motriz.m1pRev = params.m1pRev;

    MEME_C10.motriz.m1goLimp = params.m1goLimp;
    MEME_C10.motriz.m1goRev = params.m1goRev;

    MEME_C10.motriz.m1maLimp = params.m1maLimp;
    MEME_C10.motriz.m1maRev = params.m1maRev;
    
    MEME_C10.motriz.m1asLimp = params.m1asLimp;
    MEME_C10.motriz.m1asRev = params.m1asRev;

    MEME_C10.motriz.m1daLimp = params.m1daLimp;
    MEME_C10.motriz.m1daRev = params.m1daRev;

    MEME_C10.motriz.m1moLimp = params.m1moLimp;
    MEME_C10.motriz.m1moRev = params.m1moRev;

    MEME_C10.motriz.m1ceLimp = params.m1ceLimp;
    MEME_C10.motriz.m1ceRev = params.m1ceRev;

    MEME_C10.motriz.m2meLimp = params.m2meLimp;
    MEME_C10.motriz.m2meRev = params.m2meRev;
    MEME_C10.motriz.m2meLub = params.m2meLub;

    MEME_C10.motriz.m2torLimp = params.m2torLimp;
    MEME_C10.motriz.m2torRev = params.m2torRev;

    MEME_C10.motriz.m2pLimp = params.m2pLimp;
    MEME_C10.motriz.m2pRev = params.m2pRev;

    MEME_C10.motriz.m2goLimp = params.m2goLimp;
    MEME_C10.motriz.m2goRev = params.m2goRev;

    MEME_C10.motriz.m2maLimp = params.m2maLimp;
    MEME_C10.motriz.m2maRev = params.m2maRev;
    
    MEME_C10.motriz.m2asLimp = params.m2asLimp;
    MEME_C10.motriz.m2asRev = params.m2asRev;

    MEME_C10.motriz.m2daLimp = params.m2daLimp;
    MEME_C10.motriz.m2daRev = params.m2daRev;

    MEME_C10.motriz.m2moLimp = params.m2moLimp;
    MEME_C10.motriz.m2moRev = params.m2moRev;

    MEME_C10.motriz.m2ceLimp = params.m2ceLimp;
    MEME_C10.motriz.m2ceRev = params.m2ceRev;

    MEME_C10.observaciones = params.observaciones;
    MEME_C10.materialUtilizado.codigo = params.codigo;
    MEME_C10.materialUtilizado.descMaterial = params.descMaterial;
    MEME_C10.materialUtilizado.cantidad= params.cantidad;
    MEME_C10.materialUtilizado.noVale =params.noVale;

    MEME_C10.supervisor = params.supervisor;
    MEME_C10.jefeDeTurno = params.jefeDeTurno;
    MEME_C10.subgteMeyE = params.subgteMeyE;
    MEME_C10.clave = params.clave;

    MEME_C10.save((err,MEME_C10Stored)=>{
        if(err)return res.status(500).send({message: 'Error al guardar formulario'});

        if(!MEME_C10Stored) return res.status(404).send({message: 'El formulario no ha sido guardado'});
        
        return res.status(200).send({MEME_C10: MEME_C10Stored});

    });
}

//Conseguir datos
function getMEMEC10(req, res){
    var memeC10Id = req.params.id;

    memeC10.findById(memeC10Id, (err, memeC10)=>{
        if(err)
        return res.status(500).send({message: 'Error en la peticion'})

        if(!memeC10) return res.status(404).send({message: 'El formulario no existe'});

        return res.status(200).send({memeC10});
    });
}

//Actualizacion de datos

function updateMEMEC10(req, res){
    var memeC10Id = req.params.id;
    var update = req.body;

        memeC10.findByIdAndUpdate(memeC10Id, update, {new:true}, (err, memeC10Updated) => {
            if(err) return res.status(500).send({message: 'Error en la peticion'});
    
            if(!memeC10Updated) return res.status(404).send({message: 'No se ha podido actualizar el usuario'});
    
            return res.status(200).send({memeC10: memeC10Updated});
        });
}

module.exports = {
    saveMemeC10,
    getMEMEC10,
    updateMEMEC10
}
