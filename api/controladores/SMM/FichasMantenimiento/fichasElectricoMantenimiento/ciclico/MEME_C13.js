'use strict'
var moment = require('moment');

var memeC13 = require('../../../../../models/SMM/fichasMantenimiento/fichasElectricoMantenimiento/ciclico/MEME_C13');
var User = require('../../../../../models/user');

function saveMemeC13(req, res){
    var params = req.body;
    var MEME_C13 = new memeC13();
    
    MEME_C13.date_created=moment().format('DD/MM/YYYY');

    MEME_C13.num_inspeccion = params.num_inspeccion;
    MEME_C13.num_tren = params.num_tren;
    MEME_C13.kilometraje = params.kilometraje;
    MEME_C13.hora_inicio = moment().format('HH:mm');
    MEME_C13.hora_termino = moment().format('HH:mm');

    MEME_C13.operario = params.operario;

    MEME_C13.contaP.pcpl = params.pcpl;
    MEME_C13.contaP.pcpr = params.pcpr;
    MEME_C13.contaP.pcpo = params.pcpo;
    MEME_C13.contaP.pccl = params.pccl;
    MEME_C13.contaP.pccr = params.pccr;
    MEME_C13.contaP.pcco = params.pcco;
    MEME_C13.contaP.pcrfl = params.pcrfl;
    MEME_C13.contaP.pcrfr = params.pcrfr;
    MEME_C13.contaP.pcrfo = params.pcrfo;
    MEME_C13.contaP.pctl = params.pctl;
    MEME_C13.contaP.pctr = params.pctr;
    MEME_C13.contaP.pcto = params.pcto;

    MEME_C13.contaux.acpl = params.acpl;
    MEME_C13.contaux.acpr = params.acpr;
    MEME_C13.contaux.acpo = params.acpo;
    MEME_C13.contaux.accl = params.accl;
    MEME_C13.contaux.accr = params.accr;
    MEME_C13.contaux.acco = params.acco;
    MEME_C13.contaux.acrfl = params.acrfl;
    MEME_C13.contaux.acrfr = params.acrfr;
    MEME_C13.contaux.acrfo = params.acrfo;
    MEME_C13.contaux.actl = params.actl;
    MEME_C13.contaux.actr = params.actr;
    MEME_C13.contaux.acto = params.acto;

    MEME_C13.ctrl.cmel = params.cmel;
    MEME_C13.ctrl.cmer = params.cmer;
    MEME_C13.ctrl.cmeo = params.cmeo;
    MEME_C13.ctrl.radl = params.radl;
    MEME_C13.ctrl.radr = params.radr;
    MEME_C13.ctrl.rado = params.rado;
    MEME_C13.ctrl.ratl = params.ratl;
    MEME_C13.ctrl.ratr = params.ratr;
    MEME_C13.ctrl.rato = params.rato;
    MEME_C13.ctrl.cvtl = params.cvtl;
    MEME_C13.ctrl.cvtr = params.cvtr;
    MEME_C13.ctrl.cvto = params.cvto;
    MEME_C13.ctrl.cv1l = params.cv1l;
    MEME_C13.ctrl.cv1r = params.cv1r;
    MEME_C13.ctrl.cv1o = params.cv1o;
    MEME_C13.ctrl.cv2l = params.cv2l;
    MEME_C13.ctrl.cv2r = params.cv2r;
    MEME_C13.ctrl.cv2o = params.cv2o;
    MEME_C13.ctrl.cfsl = params.cfsl;
    MEME_C13.ctrl.cfsr = params.cfsr;
    MEME_C13.ctrl.cfso = params.cfso;

    MEME_C13.observaciones = params.observaciones;
    MEME_C13.materialUtilizado.codigo = params.codigo;
    MEME_C13.materialUtilizado.descMaterial = params.descMaterial;
    MEME_C13.materialUtilizado.cantidad= params.cantidad;
    MEME_C13.materialUtilizado.noVale =params.noVale;

    MEME_C13.supervisor = params.supervisor;
    MEME_C13.jefeDeTurno = params.jefeDeTurno;
    MEME_C13.subgteMeyE = params.subgteMeyE;
    MEME_C13.clave = params.clave;

    MEME_C13.save((err,MEME_C13Stored)=>{
        if(err)return res.status(500).send({message: 'Error al guardar formulario'});

        if(!MEME_C13Stored) return res.status(404).send({message: 'El formulario no ha sido guardado'});
        
        return res.status(200).send({MEME_C13: MEME_C13Stored});

    });
}

//Conseguir datos
function getMEMEC13(req, res){
    var memeC13Id = req.params.id;

    memeC13.findById(memeC13Id, (err, memeC13)=>{
        if(err)
        return res.status(500).send({message: 'Error en la peticion'})

        if(!memeC13) return res.status(404).send({message: 'El formulario no existe'});

        return res.status(200).send({memeC13});
    });
}

//Actualizacion de datos

function updateMEMEC13(req, res){
    var memeC13Id = req.params.id;
    var update = req.body;

        memeC13.findByIdAndUpdate(memeC13Id, update, {new:true}, (err, memeC13Updated) => {
            if(err) return res.status(500).send({message: 'Error en la peticion'});
    
            if(!memeC13Updated) return res.status(404).send({message: 'No se ha podido actualizar el usuario'});
    
            return res.status(200).send({memeC13: memeC13Updated});
        });
}

module.exports = {
    saveMemeC13,
    getMEMEC13,
    updateMEMEC13
}
