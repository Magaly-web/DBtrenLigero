'use strict'
var moment = require('moment');

var memeC16 = require('../../../../../models/SMM/fichasMantenimiento/fichasElectricoMantenimiento/ciclico/MEME_C16');
var User = require('../../../../../models/user');

function saveMemeC16(req, res){
    var params = req.body;
    var MEME_C16 = new memeC16();
    
    MEME_C16.date_created=moment().format('DD/MM/YYYY');

    MEME_C16.num_inspeccion = params.num_inspeccion;
    MEME_C16.num_tren = params.num_tren;
    MEME_C16.kilometraje = params.kilometraje;
    MEME_C16.hora_inicio = moment().format('HH:mm');
    MEME_C16.hora_termino = moment().format('HH:mm');

    MEME_C16.operario = params.operario;

    MEME_C16.motriz.mcm1in = params.mcm1in;
    MEME_C16.motriz.baim1in = params.baim1in;
    MEME_C16.motriz.bapm1in = params.bapm1in;
    MEME_C16.motriz.tmgm1in = params.tmgm1in;
    MEME_C16.motriz.tfem1in = params.tfem1in;
    MEME_C16.motriz.palm1in = params.palm1in;
    MEME_C16.motriz.alom1in = params.alom1in;

    MEME_C16.motriz.mcm2in = params.mcm2in;
    MEME_C16.motriz.baim2in = params.baim2in;
    MEME_C16.motriz.bapm2in = params.bapm2in;
    MEME_C16.motriz.tmgm2in = params.tmgm2in;
    MEME_C16.motriz.tfem2in = params.tfem2in;
    MEME_C16.motriz.palm2in = params.palm2in;
    MEME_C16.motriz.alom2in = params.alom2in;

    MEME_C16.motriz.mcm1li = params.mcm1li;
    MEME_C16.motriz.baim1li = params.baim1li;
    MEME_C16.motriz.bapm1li = params.bapm1li;
    MEME_C16.motriz.tmgm1li = params.tmgm1li;
    MEME_C16.motriz.tfem1li = params.tfem1li;
    MEME_C16.motriz.palm1li = params.palm1li;
    MEME_C16.motriz.alom1li = params.alom1li;

    MEME_C16.motriz.mcm2li = params.mcm2li;
    MEME_C16.motriz.baim2li = params.baim2li;
    MEME_C16.motriz.bapm2li = params.bapm2li;
    MEME_C16.motriz.tmgm2li = params.tmgm2li;
    MEME_C16.motriz.tfem2li = params.tfem2li;
    MEME_C16.motriz.palm2li = params.palm2li;
    MEME_C16.motriz.alom2li = params.alom2li;

    MEME_C16.motriz.mcm1fu = params.mcm1fu;
    MEME_C16.motriz.baim1fu = params.baim1fu;
    MEME_C16.motriz.bapm1fu = params.bapm1fu;
    MEME_C16.motriz.tmgm1fu = params.tmgm1fu;
    MEME_C16.motriz.tfem1fu = params.tfem1fu;
    MEME_C16.motriz.palm1fu = params.palm1fu;
    MEME_C16.motriz.alom1fu = params.alom1fu;

    MEME_C16.motriz.mcm2fu = params.mcm2fu;
    MEME_C16.motriz.baim2fu = params.baim2fu;
    MEME_C16.motriz.bapm2fu = params.bapm2fu;
    MEME_C16.motriz.tmgm2fu = params.tmgm2fu;
    MEME_C16.motriz.tfem2fu = params.tfem2fu;
    MEME_C16.motriz.palm2fu = params.palm2fu;
    MEME_C16.motriz.alom2fu = params.alom2fu;

    MEME_C16.observaciones = params.observaciones;
    MEME_C16.materialUtilizado.codigo = params.codigo;
    MEME_C16.materialUtilizado.descMaterial = params.descMaterial;
    MEME_C16.materialUtilizado.cantidad= params.cantidad;
    MEME_C16.materialUtilizado.noVale =params.noVale;

    MEME_C16.supervisor = params.supervisor;
    MEME_C16.jefeDeTurno = params.jefeDeTurno;
    MEME_C16.subgteMeyE = params.subgteMeyE;
    MEME_C16.clave = params.clave;

    MEME_C16.save((err,MEME_C16Stored)=>{
        if(err)return res.status(500).send({message: 'Error al guardar formulario'});

        if(!MEME_C16Stored) return res.status(404).send({message: 'El formulario no ha sido guardado'});
        
        return res.status(200).send({MEME_C16: MEME_C16Stored});

    });
}

//Conseguir datos
function getMEMEC16(req, res){
    var memeC16Id = req.params.id;

    memeC16.findById(memeC16Id, (err, memeC16Id)=>{
        if(err)
        return res.status(500).send({message: 'Error en la peticion'})

        if(!memeC16) return res.status(404).send({message: 'El formulario no existe'});

        return res.status(200).send({memeC16});
    });
}

//Actualizacion de datos

function updateMEMEC16(req, res){
    var memeC16Id = req.params.id;
    var update = req.body;

        memeC16.findByIdAndUpdate(memeC16Id, update, {new:true}, (err, memeC16Updated) => {
            if(err) return res.status(500).send({message: 'Error en la peticion'});
    
            if(!memeC16Updated) return res.status(404).send({message: 'No se ha podido actualizar el usuario'});
    
            return res.status(200).send({memeC16: memeC16Updated});
        });
}

module.exports = {
    saveMemeC16,
    getMEMEC16,
    updateMEMEC16
}
