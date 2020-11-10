'use strict'

//var path = require('path');
//var fs = require('fs');
var moment = require('moment');
//var mongoosePaginate = ('mongoose-pagination');

var memeC02 = require('../../../../../models/SMM/fichasMantenimiento/fichasElectricoMantenimiento/ciclico/MEME_C02');
var User = require('../../../../../models/user');

//guardar formulario
function saveMemeC02(req, res){
    var params = req.body;

    var MEME_C02 = new memeC02();
        MEME_C02.date_created = moment().format('DD/MM/YYYY');
        MEME_C02.num_inspeccion = params.num_inspeccion;
        MEME_C02.num_tren = params.num_tren;
        MEME_C02.kilometraje = params.kilometraje;
        MEME_C02.hora_inicio = params.hora_inicio;
        MEME_C02.hora_termino = params.hora_termino;    
        MEME_C02.user = params.user;

        MEME_C02.medidasDeCarbon.m1ant = params.m1ant;
        MEME_C02.medidasDeCarbon.m1post = params.m1post;
        MEME_C02.medidasDeCarbon.remolAnt = params.remolAnt;
        MEME_C02.medidasDeCarbon.remolPost = params.remolPost;
        MEME_C02.medidasDeCarbon.m2ant = params.m2ant;
        MEME_C02.medidasDeCarbon.m2post = params.m2post;

        MEME_C02.cajaFrost.m1AntLimp = params.m1AntLimp;
        MEME_C02.cajaFrost.m1AntRev = params.m1AntRev;
        MEME_C02.cajaFrost.m1PostLimp = params.m1PostLimp;
        MEME_C02.cajaFrost.m1PostRev = params.m1PostRev;

        MEME_C02.cajaFrost.remolAntLimp = params.remolAntLimp;
        MEME_C02.cajaFrost.remolAntRev = params.remolAntRev;
        MEME_C02.cajaFrost.remolPostLimp = params.remolPostLimp;
        MEME_C02.cajaFrost.remolPostRev = params.remolPostRev;
        
        MEME_C02.cajaFrost.m2AntLimp = params.m2AntLimp;
        MEME_C02.cajaFrost.m2AntRev = params.m2AntRev;
        MEME_C02.cajaFrost.m2PostLimp = params.m2PostLimp;
        MEME_C02.cajaFrost.m2Postev = params.m2PostRev;

        MEME_C02.observaciones = params.observaciones;

        MEME_C02.materialUtilizado.codigo = params.codigo;
        MEME_C02.materialUtilizado.descMaterial = params.descMaterial;
        MEME_C02.materialUtilizado.cantidad = params.cantidad;
        MEME_C02.materialUtilizado.noVale = params.noVale;
        MEME_C02.clave = params.clave;
       
    MEME_C02.save((err, MEME_C02Stored) => {
        if(err) return res.status(500).send({message: 'Error al guardar el formulario'});

        if(!MEME_C02Stored) return res.status(404).send({message: 'El formulario no ha sido guardado'});

        return res.status(200).send({MEME_C02: MEME_C02Stored});
    });
}
// Conseguir datos de un usuario
function getMEMEC02(req, res){
    var memeC02Id = req.params.id;

    memeC02.findById(memeC02Id, (err, memeC02) => {//va a buscar un documento por la ID
        if(err) 
        return res.status(500).send({message: 'Error en la peticion'});

        if(!memeC02) return res.status(404).send({message: 'El usuario no existe'});

        return res.status(200).send({memeC02});
    });
}

 function updateMEMEC02(req, res){
    var memeC02Id = req.params.id;
    var update = req.body;

        memeC02.findByIdAndUpdate(memeC02Id, update, {new:true}, (err, memeC02Updated) => {
            if(err) return res.status(500).send({message: 'Error en la peticion'});
    
            if(!memeC02Updated) return res.status(404).send({message: 'No se ha podido actualizar el usuario'});
    
            return res.status(200).send({memeC02: memeC02Updated});
        });
}


module.exports = {
    saveMemeC02,
    getMEMEC02,
    updateMEMEC02
}
