'use strict'
var moment = require('moment');

var memeC15 = require('../../../../../models/SMM/fichasMantenimiento/fichasElectricoMantenimiento/ciclico/MEME_C15');
var User = require('../../../../../models/user');

function saveMemeC15(req, res){
    var params = req.body;
    var MEME_C15 = new memeC15();
    
    MEME_C15.date_created=moment().format('DD/MM/YYYY');

    MEME_C15.num_inspeccion = params.num_inspeccion;
    MEME_C15.num_tren = params.num_tren;
    MEME_C15.kilometraje = params.kilometraje;
    MEME_C15.hora_inicio = moment().format('HH:mm');
    MEME_C15.hora_termino = moment().format('HH:mm');

    MEME_C15.operario = params.operario;

    MEME_C15.s16tr = params.s16tr;
    MEME_C15.s16ts = params.s16ts;
    MEME_C15.s16tl = params.s16tl;
    MEME_C15.s16to = params.s16to;

    MEME_C15.s16cr = params.s16cr;
    MEME_C15.s16cs = params.s16cs;
    MEME_C15.s16cl = params.s16cl;
    MEME_C15.s16co = params.s16co;

    MEME_C15.s16cor = params.s16cor;
    MEME_C15.s16cos = params.s16cos;
    MEME_C15.s16col = params.s16col;
    MEME_C15.s16coo = params.s16coo;

    MEME_C15.uefcr = params.uefcr;
    MEME_C15.uefcs = params.uefcs;
    MEME_C15.uefcl = params.uefcl;
    MEME_C15.uefco = params.uefco;

    MEME_C15.ueftr = params.ueftr;
    MEME_C15.uefts = params.uefts;
    MEME_C15.ueftl = params.ueftl;
    MEME_C15.uefto = params.uefto;

    MEME_C15.g011 = params.g011;
    MEME_C15.g027 = params.g027;

    MEME_C15.observaciones = params.observaciones;
    MEME_C15.materialUtilizado.codigo = params.codigo;
    MEME_C15.materialUtilizado.descMaterial = params.descMaterial;
    MEME_C15.materialUtilizado.cantidad= params.cantidad;
    MEME_C15.materialUtilizado.noVale =params.noVale;

    MEME_C15.supervisor = params.supervisor;
    MEME_C15.jefeDeTurno = params.jefeDeTurno;
    MEME_C15.subgteMeyE = params.subgteMeyE;
    MEME_C15.clave = params.clave;

    MEME_C15.save((err,MEME_C15Stored)=>{
        if(err)return res.status(500).send({message: 'Error al guardar formulario'});

        if(!MEME_C15Stored) return res.status(404).send({message: 'El formulario no ha sido guardado'});
        
        return res.status(200).send({MEME_C15: MEME_C15Stored});

    });
}

//Conseguir datos
function getMEMEC15(req, res){
    var memeC15Id = req.params.id;

    memeC15.findById(memeC15Id, (err, memeC15)=>{
        if(err)
        return res.status(500).send({message: 'Error en la peticion'})

        if(!memeC15) return res.status(404).send({message: 'El formulario no existe'});

        return res.status(200).send({memeC15});
    });
}

//Actualizacion de datos

function updateMEMEC15(req, res){
    var memeC15Id = req.params.id;
    var update = req.body;

        memeC15.findByIdAndUpdate(memeC15Id, update, {new:true}, (err, memeC15Updated) => {
            if(err) return res.status(500).send({message: 'Error en la peticion'});
    
            if(!memeC15Updated) return res.status(404).send({message: 'No se ha podido actualizar el usuario'});
    
            return res.status(200).send({memeC15: memeC15Updated});
        });
}

module.exports = {
    saveMemeC15,
    getMEMEC15,
    updateMEMEC15
}
