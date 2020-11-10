'use strict'
var moment = require('moment');

var memeC11 = require('../../../../../models/SMM/fichasMantenimiento/fichasElectricoMantenimiento/ciclico/MEME_C11');
var User = require('../../../../../models/user');

function saveMemeC11(req, res){
    var params = req.body;
    var MEME_C11 = new memeC11();
    
    MEME_C11.date_created=moment().format('DD/MM/YYYY');

    MEME_C11.num_inspeccion = params.num_inspeccion;
    MEME_C11.num_tren = params.num_tren;
    MEME_C11.kilometraje = params.kilometraje;
    MEME_C11.hora_inicio = params.hora_inicio;
    MEME_C11.hora_termino = params.hora_termino;

    MEME_C11.operario = params.operario;

    MEME_C11.motriz.m1seLimp = params.m1seLimp;
    MEME_C11.motriz.m1seb = params.m1seb;
    MEME_C11.motriz.m1sec = params.m1sec;
    MEME_C11.motriz.m1seLub = params.m1seLub;
    MEME_C11.motriz.m1seObs = params.m1seObs;

    MEME_C11.motriz.m1orLimp = params.m1orLimp;
    MEME_C11.motriz.m1orb = params.m1orb;
    MEME_C11.motriz.m1orc = params.m1orc;
    MEME_C11.motriz.m1orLub = params.m1orLub;
    MEME_C11.motriz.m1orObs = params.m1orObs;

    MEME_C11.motriz.m1toLimp = params.m1toLimp;
    MEME_C11.motriz.m1tob = params.m1tob;
    MEME_C11.motriz.m1toc = params.m1toc;
    MEME_C11.motriz.m1toLub = params.m1toLub;
    MEME_C11.motriz.m1toObs = params.m1toObs;

    MEME_C11.motriz.m2seLimp = params.m2seLimp;
    MEME_C11.motriz.m2seb = params.m2seb;
    MEME_C11.motriz.m2sec = params.m2sec;
    MEME_C11.motriz.m2seLub = params.m2seLub;
    MEME_C11.motriz.m2seObs = params.m2seObs;
    
    MEME_C11.motriz.m2orLimp = params.m2orLimp;
    MEME_C11.motriz.m2orb = params.m2orb;
    MEME_C11.motriz.m2orc = params.m2orc;
    MEME_C11.motriz.m2orLub = params.m2orLub;
    MEME_C11.motriz.m2orObs = params.m2orObs;

    MEME_C11.motriz.m2toLimp = params.m2toLimp;
    MEME_C11.motriz.m2tob = params.m2tob;
    MEME_C11.motriz.m2toc = params.m2toc;
    MEME_C11.motriz.m2toLub = params.m2toLub;
    MEME_C11.motriz.m2toObs = params.m2toObs;

    MEME_C11.motriz.r1seLimp = params.r1seLimp;
    MEME_C11.motriz.r1seb = params.r1seb;
    MEME_C11.motriz.r1sec = params.r1sec;
    MEME_C11.motriz.r1seLub = params.r1seLub;
    MEME_C11.motriz.r1seObs = params.r1seObs;

    MEME_C11.motriz.r1orLimp = params.r1orLimp;
    MEME_C11.motriz.r1orb = params.r1orb;
    MEME_C11.motriz.r1orc = params.r1orc;
    MEME_C11.motriz.r1orLub = params.r1orLub;
    MEME_C11.motriz.r1orObs = params.r1orObs;

    MEME_C11.motriz.r1toLimp = params.r1toLimp;
    MEME_C11.motriz.r1tob = params.r1tob;
    MEME_C11.motriz.r1toc = params.r1toc;
    MEME_C11.motriz.r1toLub = params.r1toLub;
    MEME_C11.motriz.r1toObs = params.r1toObs;

    MEME_C11.motriz.r2seLimp = params.r2seLimp;
    MEME_C11.motriz.r2seb = params.r2seb;
    MEME_C11.motriz.r2sec = params.r2sec;
    MEME_C11.motriz.r2seLub = params.r2seLub;
    MEME_C11.motriz.r2seObs = params.r2seObs;
    
    MEME_C11.motriz.r2orLimp = params.r2orLimp;
    MEME_C11.motriz.r2orb = params.r2orb;
    MEME_C11.motriz.r2orc = params.r2orc;
    MEME_C11.motriz.r2orLub = params.r2orLub;
    MEME_C11.motriz.r2orObs = params.r2orObs;

    MEME_C11.motriz.r2toLimp = params.r2toLimp;
    MEME_C11.motriz.r2tob = params.r2tob;
    MEME_C11.motriz.r2toc = params.r2toc;
    MEME_C11.motriz.r2toLub = params.r2toLub;
    MEME_C11.motriz.r2toObs = params.r2toObs;

    MEME_C11.tomas.tx11Rev = params.tx11Rev;
    MEME_C11.tomas.tx11Sop = params.tx11Sop;
    MEME_C11.tomas.tx11Limp = params.tx11Limp;
    MEME_C11.tomas.tx11Obs = params.tx11Obs;

    MEME_C11.tomas.tx12Rev = params.tx12Rev;
    MEME_C11.tomas.tx12Sop = params.tx12Sop;
    MEME_C11.tomas.tx12Limp = params.tx12Limp;
    MEME_C11.tomas.tx12Obs = params.tx12Obs;

    MEME_C11.tomas.tx13Rev = params.tx13Rev;
    MEME_C11.tomas.tx13Sop = params.tx13Sop;
    MEME_C11.tomas.tx13Limp = params.tx13Limp;
    MEME_C11.tomas.tx13Obs = params.tx13Obs;
    
    MEME_C11.tomas.tx14Rev = params.tx14Rev;
    MEME_C11.tomas.tx14Sop = params.tx14Sop;
    MEME_C11.tomas.tx14Limp = params.tx14Limp;
    MEME_C11.tomas.tx14Obs = params.tx14Obs;

    MEME_C11.tomas.tx15Rev = params.tx15Rev;
    MEME_C11.tomas.tx15Sop = params.tx15Sop;
    MEME_C11.tomas.tx15Limp = params.tx15Limp;
    MEME_C11.tomas.tx15Obs = params.tx15Obs;

    MEME_C11.tomas.tx16Rev = params.tx16Rev;
    MEME_C11.tomas.tx16Sop = params.tx16Sop;
    MEME_C11.tomas.tx16Limp = params.tx16Limp;
    MEME_C11.tomas.tx16Obs = params.tx16Obs;

    MEME_C11.tomas.tx17Rev = params.tx17Rev;
    MEME_C11.tomas.tx17Sop = params.tx17Sop;
    MEME_C11.tomas.tx17Limp = params.tx17Limp;
    MEME_C11.tomas.tx17Obs = params.tx17Obs;

    MEME_C11.tomas.tx19Rev = params.tx19Rev;
    MEME_C11.tomas.tx19Sop = params.tx19Sop;
    MEME_C11.tomas.tx19Limp = params.tx19Limp;
    MEME_C11.tomas.tx19Obs = params.tx19Obs;


    MEME_C11.observaciones = params.observaciones;
    MEME_C11.materialUtilizado.codigo = params.codigo;
    MEME_C11.materialUtilizado.descMaterial = params.descMaterial;
    MEME_C11.materialUtilizado.cantidad= params.cantidad;
    MEME_C11.materialUtilizado.noVale =params.noVale;

    MEME_C11.supervisor = params.supervisor;
    MEME_C11.jefeDeTurno = params.jefeDeTurno;
    MEME_C11.subgteMeyE = params.subgteMeyE;
    MEME_C11.clave = params.clave;

    MEME_C11.save((err,MEME_C11Stored)=>{
        if(err)return res.status(500).send({message: 'Error al guardar formulario'});

        if(!MEME_C11Stored) return res.status(404).send({message: 'El formulario no ha sido guardado'});
        
        return res.status(200).send({MEME_C11: MEME_C11Stored});

    });

}

//Conseguir datos
function getMEMEC11(req, res){
    var memeC11Id = req.params.id;

    memeC11.findById(memeC11Id, (err, memeC11)=>{
        if(err)
        return res.status(500).send({message: 'Error en la peticion'})

        if(!memeC11) return res.status(404).send({message: 'El formulario no existe'});

        return res.status(200).send({memeC11});
    });
}

//Actualizacion de datos

function updateMEMEC11(req, res){
    var memeC11Id = req.params.id;
    var update = req.body;

        memeC11.findByIdAndUpdate(memeC11Id, update, {new:true}, (err, memeC11Updated) => {
            if(err) return res.status(500).send({message: 'Error en la peticion'});
    
            if(!memeC11Updated) return res.status(404).send({message: 'No se ha podido actualizar el usuario'});
    
            return res.status(200).send({memeC11: memeC11Updated});
        });
}

module.exports = {
    saveMemeC11,
    getMEMEC11,
    updateMEMEC11
}
