'use strict'
var moment = require('moment');

var memeC14 = require('../../../../../models/SMM/fichasMantenimiento/fichasElectricoMantenimiento/ciclico/MEME_C14');
var User = require('../../../../../models/user');

function saveMemeC14(req, res){
    var params = req.body;
    var MEME_C14 = new memeC14();
    
    MEME_C14.date_created=moment().format('DD/MM/YYYY');

    MEME_C14.num_inspeccion = params.num_inspeccion;
    MEME_C14.num_tren = params.num_tren;
    MEME_C14.kilometraje = params.kilometraje;
    MEME_C14.hora_inicio = moment().format('HH:mm');
    MEME_C14.hora_termino = moment().format('HH:mm');

    MEME_C14.operario = params.operario;

    MEME_C14.bcbs.m1car = params.m1car;
    MEME_C14.bcbs.m1cal = params.m1cal;
    MEME_C14.bcbs.rcar = params.rcar;
    MEME_C14.bcbs.rcal = params.rcal;
    MEME_C14.bcbs.m2car = params.m2car;
    MEME_C14.bcbs.m2cal = params.m2cal;
    MEME_C14.bcbs.obsca = params.obsca;

    MEME_C14.bcbs.m1zar = params.m1zar;
    MEME_C14.bcbs.m1zal = params.m1zal;
    MEME_C14.bcbs.rzar = params.rzar;
    MEME_C14.bcbs.rzal = params.rzal;
    MEME_C14.bcbs.m2zar = params.m2zar;
    MEME_C14.bcbs.m2zal = params.m2zal;
    MEME_C14.bcbs.obsza = params.obsza;

    MEME_C14.bcbs.m1tor = params.m1tor;
    MEME_C14.bcbs.m1tol = params.m1tol;
    MEME_C14.bcbs.rtor = params.rtor;
    MEME_C14.bcbs.rtol = params.rtol;
    MEME_C14.bcbs.m2tor = params.m2tor;
    MEME_C14.bcbs.m2tol = params.m2tol;
    MEME_C14.bcbs.obsto = params.obsto;

    MEME_C14.bcbs.m1cbr = params.m1cbr;
    MEME_C14.bcbs.m1cbl = params.m1cbl;
    MEME_C14.bcbs.rcbr = params.rcbr;
    MEME_C14.bcbs.rcbl = params.rcbl;
    MEME_C14.bcbs.m2cbr = params.m2cbr;
    MEME_C14.bcbs.m2cbl = params.m2cbl;
    MEME_C14.bcbs.obscb = params.obscb;

    MEME_C14.bcbs.m1scr = params.m1scr;
    MEME_C14.bcbs.m1scl = params.m1scl;
    MEME_C14.bcbs.rscr = params.rscr;
    MEME_C14.bcbs.rscl = params.rscl;
    MEME_C14.bcbs.m2scr = params.m2scr;
    MEME_C14.bcbs.m2scl = params.m2scl;
    MEME_C14.bcbs.obssc = params.obssc;


    MEME_C14.observaciones = params.observaciones;
    MEME_C14.materialUtilizado.codigo = params.codigo;
    MEME_C14.materialUtilizado.descMaterial = params.descMaterial;
    MEME_C14.materialUtilizado.cantidad= params.cantidad;
    MEME_C14.materialUtilizado.noVale =params.noVale;

    MEME_C14.supervisor = params.supervisor;
    MEME_C14.jefeDeTurno = params.jefeDeTurno;
    MEME_C14.subgteMeyE = params.subgteMeyE;
    MEME_C14.clave = params.clave;

    MEME_C14.save((err,MEME_C14Stored)=>{
        if(err)return res.status(500).send({message: 'Error al guardar formulario'});

        if(!MEME_C14Stored) return res.status(404).send({message: 'El formulario no ha sido guardado'});
        
        return res.status(200).send({MEME_C14: MEME_C14Stored});

    });
}

//Conseguir datos
function getMEMEC14(req, res){
    var memeC14Id = req.params.id;

    memeC14.findById(memeC14Id, (err, memeC14)=>{
        if(err)
        return res.status(500).send({message: 'Error en la peticion'})

        if(!memeC14) return res.status(404).send({message: 'El formulario no existe'});

        return res.status(200).send({memeC14});
    });
}

//Actualizacion de datos

function updateMEMEC14(req, res){
    var memeC14Id = req.params.id;
    var update = req.body;

        memeC14.findByIdAndUpdate(memeC14Id, update, {new:true}, (err, memeC14Updated) => {
            if(err) return res.status(500).send({message: 'Error en la peticion'});
    
            if(!memeC14Updated) return res.status(404).send({message: 'No se ha podido actualizar el usuario'});
    
            return res.status(200).send({memeC14: memeC14Updated});
        });
}

module.exports = {
    saveMemeC14,
    getMEMEC14,
    updateMEMEC14
}
