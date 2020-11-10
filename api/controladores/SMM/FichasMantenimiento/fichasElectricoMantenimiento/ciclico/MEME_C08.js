'use strict'
var moment = require('moment');

var memeC08 = require('../../../../../models/SMM/fichasMantenimiento/fichasElectricoMantenimiento/ciclico/MEME_C08');
var User = require('../../../../../models/user');

function saveMemeC08(req, res){
    var params = req.body;
    var MEME_C08 = new memeC08();
    
    MEME_C08.date_created=moment().format('DD/MM/YYYY');

    MEME_C08.num_inspeccion = params.num_inspeccion;
    MEME_C08.num_tren = params.num_tren;
    MEME_C08.kilometraje = params.kilometraje;
    MEME_C08.hora_inicio = params.hora_inicio;
    MEME_C08.hora_termino = params.hora_termino;

    MEME_C08.operario = params.operario;

    MEME_C08.actividadExt.ceaSop = params.ceaSop;
    MEME_C08.actividadExt.ceaLimp = params.ceaLimp;
    MEME_C08.actividadExt.ceaRev = params.ceaRev;

    MEME_C08.actividadExt.avSop = params.avSop;
    MEME_C08.actividadExt.avLimp = params.avLimp;
    MEME_C08.actividadExt.avRev = params.avRev;

    MEME_C08.actividadExt.tlSop = params.tlSop;
    MEME_C08.actividadExt.tlLimp = params.tlLimp;
    MEME_C08.actividadExt.tlRev = params.tlRev;

    MEME_C08.actividadExt.tisSop = params.tisSop;
    MEME_C08.actividadExt.tisLimp = params.tisLimp;
    MEME_C08.actividadExt.tidRev = params.tidRev;

    MEME_C08.actividadInt.spLimp = params.spLimp;
    MEME_C08.actividadInt.spRev = params.spRev;

    MEME_C08.actividadInt.ttLimp = params.ttLimp;
    MEME_C08.actividadInt.ttRev = params.ttRev;

    MEME_C08.actividadInt.ttaLimp = params.ttaLimp;
    MEME_C08.actividadInt.ttaRev = params.ttaRev;

    MEME_C08.elecInter.cabSop = params.cabSop;
    MEME_C08.elecInter.cabLimp = params.cabLimp;

    MEME_C08.elecInter.tcSop = params.tcSop;
    MEME_C08.elecInter.tcLimp = params.tcLimp;

    MEME_C08.elecInter.celeronSop = params.celeronSop;
    MEME_C08.elecInter.celeronLimp = params.celeronLimp;

    MEME_C08.elecInter.a01a02Sop = params.a01a02Sop;
    MEME_C08.elecInter.a01a02Limp = params.a01a02Limp;

    MEME_C08.elecInter.r11Sop = params.r11Sop;
    MEME_C08.elecInter.r11Limp = params.r11Limp;
    MEME_C08.elecInter.r11Med = params.r11Med;

    MEME_C08.observaciones = params.observaciones;

    MEME_C08.materialUtilizado.codigo = params.codigo;
    MEME_C08.materialUtilizado.descMaterial = params.descMaterial;
    MEME_C08.materialUtilizado.cantidad = params.cantidad;
    MEME_C08.materialUtilizado.noVale = params.noVale;

    MEME_C08.supervisor = params.supervisor;
    MEME_C08.jefeDeTurno = params.jefeDeTurno;
    MEME_C08.subgteMeyE = params.subgteMeyE;
    MEME_C08.clave = params.clave;

    MEME_C08.save((err,MEME_C08Stored)=>{
        if(err)return res.status(500).send({message: 'Error al guardar formulario'});

        if(!MEME_C08Stored) return res.status(404).send({message: 'El formulario no ha sido guardado'});
        
        return res.status(200).send({MEME_C08: MEME_C08Stored});

    });

}

//Conseguir datos
function getMEMEC08(req, res){
    var memeC08Id = req.params.id;

    memeC08.findById(memeC08Id, (err, memeC08)=>{
        if(err)
        return res.status(500).send({message: 'Error en la peticion'})

        if(!memeC08) return res.status(404).send({message: 'El formulario no existe'});

        return res.status(200).send({memeC08});
    });
}

//Actualizacion de datos

function updateMEMEC08(req, res){
    var memeC08Id = req.params.id;
    var update = req.body;

        memeC08.findByIdAndUpdate(memeC08Id, update, {new:true}, (err, memeC08Updated) => {
            if(err) return res.status(500).send({message: 'Error en la peticion'});
    
            if(!memeC08Updated) return res.status(404).send({message: 'No se ha podido actualizar el usuario'});
    
            return res.status(200).send({memeC08: memeC08Updated});
        });
}

module.exports = {
    saveMemeC08,
    getMEMEC08,
    updateMEMEC08
}