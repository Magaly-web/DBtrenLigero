'use strict'
var moment = require('moment');

var memeC21 = require('../../../../../models/SMM/fichasMantenimiento/fichasElectricoMantenimiento/ciclico/MEME_C21');
var User = require('../../../../../models/user');

function saveMemeC21(req, res){
    var params = req.body;
    var MEME_C21 = new memeC21();
    
    MEME_C21.date_created=moment().format('DD/MM/YYYY');

    MEME_C21.num_inspeccion = params.num_inspeccion;
    MEME_C21.num_tren = params.num_tren;
    MEME_C21.kilometraje = params.kilometraje;
    MEME_C21.hora_inicio = moment().format('HH:mm');
    MEME_C21.hora_termino = moment().format('HH:mm');

    MEME_C21.operario = params.operario;

    //-------------------------------
    MEME_C21.dom1ins = params.dom1ins;
    MEME_C21.dom2ins = params.dom2ins;
    MEME_C21.dom1lim = params.dom1lim;
    MEME_C21.dom2lim = params.dom2lim;
    MEME_C21.doObs = params.doObs;

    MEME_C21.cem1ins = params.cem1ins;
    MEME_C21.cem2ins = params.cem2ins;
    MEME_C21.cem1lim = params.cem1lim;
    MEME_C21.cem2lim = params.cem2lim;
    MEME_C21.ceObs = params.ceObs;    

    MEME_C21.cmm1ins = params.cmm1ins;
    MEME_C21.cmm2ins = params.cmm2ins;
    MEME_C21.cmm1lim = params.cmm1lim;
    MEME_C21.cmm2lim = params.cmm2lim;
    MEME_C21.cmObs = params.cmObs;

    MEME_C21.lpm1ins = params.lpm1ins;
    MEME_C21.lpm2ins = params.lpm2ins;
    MEME_C21.lpm1lim = params.lpm1lim;
    MEME_C21.lpm2lim = params.lpm2lim;
    MEME_C21.lpObs = params.lpObs;

    MEME_C21.ccm1ins = params.ccm1ins;
    MEME_C21.ccm2ins = params.ccm2ins;
    MEME_C21.ccm1lim = params.ccm1lim;
    MEME_C21.ccm2lim = params.ccm2lim;
    MEME_C21.ccObs = params.ccObs;

    MEME_C21.ivm1ins = params.ivm1ins;
    MEME_C21.ivm2ins = params.ivm2ins;
    MEME_C21.ivm1lim = params.ivm1lim;
    MEME_C21.ivm2lim = params.ivm2lim;
    MEME_C21.ivObs = params.ivObs;

    MEME_C21.sivm1ins = params.sivm1ins;
    MEME_C21.sivm2ins = params.sivm2ins;
    MEME_C21.sivm1lim = params.sivm1lim;
    MEME_C21.sivm2lim = params.sivm2lim;
    MEME_C21.sivObs = params.sivObs;

    MEME_C21.icim1ins = params.icim1ins;
    MEME_C21.icim2ins = params.icim2ins;
    MEME_C21.icim1lim = params.icim1lim;
    MEME_C21.icim2lim = params.icim2lim;
    MEME_C21.iciObs = params.iciObs;

    //-------------------------------
    MEME_C21.observaciones = params.observaciones;
    
    MEME_C21.materialUtilizado.codigo = params.codigo;
    MEME_C21.materialUtilizado.descMaterial = params.descMaterial;
    MEME_C21.materialUtilizado.cantidad= params.cantidad;
    MEME_C21.materialUtilizado.noVale =params.noVale;

    MEME_C21.supervisor = params.supervisor;
    MEME_C21.jefeDeTurno = params.jefeDeTurno;
    MEME_C21.subgteMeyE = params.subgteMeyE;
    MEME_C21.clave = params.clave;

    MEME_C21.save((err,MEME_C21Stored)=>{
        if(err)return res.status(500).send({message: 'Error al guardar formulario'});

        if(!MEME_C21Stored) return res.status(404).send({message: 'El formulario no ha sido guardado'});
        
        return res.status(210).send({MEME_C21: MEME_C21Stored});

    });
}

//Conseguir datos
function getMEMEC21(req, res){
    var memeC21Id = req.params.id;

    memeC21.findById(memeC21Id, (err, memeC21)=>{
        if(err)
        return res.status(500).send({message: 'Error en la peticion'})

        if(!memeC21) return res.status(404).send({message: 'El formulario no existe'});

        return res.status(210).send({memeC21});
    });
}

//Actualizacion de datos

function updateMEMEC21(req, res){
    var memeC21Id = req.params.id;
    var update = req.body;

        memeC21.findByIdAndUpdate(memeC21Id, update, {new:true}, (err, memeC21Updated) => {
            if(err) return res.status(500).send({message: 'Error en la peticion'});
    
            if(!memeC21Updated) return res.status(404).send({message: 'No se ha podido actualizar el usuario'});
    
            return res.status(210).send({memeC21: memeC21Updated});
        });
}

module.exports = {
    saveMemeC21,
    getMEMEC21,
    updateMEMEC21
}