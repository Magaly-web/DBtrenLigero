'use strict'
var moment = require('moment');

var memeC141 = require('../../../../../models/SMM/fichasMantenimiento/fichasElectricoMantenimiento/ciclico/MEME_C141');
var User = require('../../../../../models/user');

function saveMemeC141(req, res){
    var params = req.body;
    var MEME_C141 = new memeC141();
    
    MEME_C141.date_created=moment().format('DD/MM/YYYY');

    MEME_C141.num_inspeccion = params.num_inspeccion;
    MEME_C141.num_tren = params.num_tren;
    MEME_C141.kilometraje = params.kilometraje;
    MEME_C141.hora_inicio = moment().format('HH:mm');
    MEME_C141.hora_termino = moment().format('HH:mm');

    MEME_C141.operario = params.operario;

    MEME_C141.bcbs.m1car = params.m1car;
    MEME_C141.bcbs.m1cal = params.m1cal;
    MEME_C141.bcbs.rcar = params.rcar;
    MEME_C141.bcbs.rcal = params.rcal;
    MEME_C141.bcbs.m2car = params.m2car;
    MEME_C141.bcbs.m2cal = params.m2cal;
    MEME_C141.bcbs.obsca = params.obsca;

    MEME_C141.bcbs.m1zar = params.m1zar;
    MEME_C141.bcbs.m1zal = params.m1zal;
    MEME_C141.bcbs.rzar = params.rzar;
    MEME_C141.bcbs.rzal = params.rzal;
    MEME_C141.bcbs.m2zar = params.m2zar;
    MEME_C141.bcbs.m2zal = params.m2zal;
    MEME_C141.bcbs.obsza = params.obsza;

    MEME_C141.bcbs.m1tor = params.m1tor;
    MEME_C141.bcbs.m1tol = params.m1tol;
    MEME_C141.bcbs.rtor = params.rtor;
    MEME_C141.bcbs.rtol = params.rtol;
    MEME_C141.bcbs.m2tor = params.m2tor;
    MEME_C141.bcbs.m2tol = params.m2tol;
    MEME_C141.bcbs.obsto = params.obsto;

    MEME_C141.bcbs.m1cbr = params.m1cbr;
    MEME_C141.bcbs.m1cbl = params.m1cbl;
    MEME_C141.bcbs.rcbr = params.rcbr;
    MEME_C141.bcbs.rcbl = params.rcbl;
    MEME_C141.bcbs.m2cbr = params.m2cbr;
    MEME_C141.bcbs.m2cbl = params.m2cbl;
    MEME_C141.bcbs.obscb = params.obscb;

    MEME_C141.bcbs.m1scr = params.m1scr;
    MEME_C141.bcbs.m1scl = params.m1scl;
    MEME_C141.bcbs.rscr = params.rscr;
    MEME_C141.bcbs.rscl = params.rscl;
    MEME_C141.bcbs.m2scr = params.m2scr;
    MEME_C141.bcbs.m2scl = params.m2scl;
    MEME_C141.bcbs.obssc = params.obssc;


    MEME_C141.observaciones = params.observaciones;
    MEME_C141.materialUtilizado.codigo = params.codigo;
    MEME_C141.materialUtilizado.descMaterial = params.descMaterial;
    MEME_C141.materialUtilizado.cantidad= params.cantidad;
    MEME_C141.materialUtilizado.noVale =params.noVale;

    MEME_C141.supervisor = params.supervisor;
    MEME_C141.jefeDeTurno = params.jefeDeTurno;
    MEME_C141.subgteMeyE = params.subgteMeyE;
    MEME_C141.clave = params.clave;

    MEME_C141.save((err,MEME_C141Stored)=>{
        if(err)return res.status(500).send({message: 'Error al guardar formulario'});

        if(!MEME_C141Stored) return res.status(404).send({message: 'El formulario no ha sido guardado'});
        
        return res.status(200).send({MEME_C141: MEME_C141Stored});

    });
}

//Conseguir datos
function getMEMEC141(req, res){
    var memeC141Id = req.params.id;

    memeC141.findById(memeC141Id, (err, memeC141)=>{
        if(err)
        return res.status(500).send({message: 'Error en la peticion'})

        if(!memeC141) return res.status(404).send({message: 'El formulario no existe'});

        return res.status(200).send({memeC141});
    });
}

//Actualizacion de datos

function updateMEMEC141(req, res){
    var memeC141Id = req.params.id;
    var update = req.body;

        memeC141.findByIdAndUpdate(memeC141Id, update, {new:true}, (err, memeC141Updated) => {
            if(err) return res.status(500).send({message: 'Error en la peticion'});
    
            if(!memeC141Updated) return res.status(404).send({message: 'No se ha podido actualizar el usuario'});
    
            return res.status(200).send({memeC141: memeC141Updated});
        });
}

module.exports = {
    saveMemeC141,
    getMEMEC141,
    updateMEMEC141
}
