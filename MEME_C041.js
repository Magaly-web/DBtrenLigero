'use strict'
var moment = require('moment');

var memeC041 = require('../../../../../models/SMM/fichasMantenimiento/fichasElectricoMantenimiento/ciclico/MEME_C041');
var User = require('../../../../../models/user');

function saveMemeC041(req, res){
    var params = req.body;
    var MEME_C041 = new memeC041();
    MEME_C041.date_created=moment().format('DD/MM/YYYY');

    MEME_C041.num_inspeccion = params.num_inspeccion;
    MEME_C041.num_tren = params.num_tren;
    MEME_C041.kilometraje = params.kilometraje;
    MEME_C041.hora_inicio = params.hora_inicio;
    MEME_C041.hora_termino = params.hora_termino;

    MEME_C041.operarioM1 = params.operarioM1;
    MEME_C041.operarioM2 = params.operarioM2;

    MEME_C041.m2.m2_1 = params.m2_1;
    MEME_C041.m2.m2_2 = params.m2_2;
    MEME_C041.m2.m2_3 = params.m2_3;
    MEME_C041.m2.m2_4 = params.m2_4;
    MEME_C041.m2.m2_5 = params.m2_5;
    MEME_C041.m2.m2_6 = params.m2_6;
    MEME_C041.m2.m2_7 = params.m2_7;

    MEME_C041.m1.m1_1 = params.m1_1;
    MEME_C041.m1.m1_2 = params.m1_2;
    MEME_C041.m1.m1_3 = params.m1_3;
    MEME_C041.m1.m1_4 = params.m1_4;
    MEME_C041.m1.m1_5 = params.m1_5;
    MEME_C041.m1.m1_6 = params.m1_6;
    MEME_C041.m1.m1_7 = params.m1_7;

    MEME_C041.ventilador.ventiRevision =params.ventiRevision;
    MEME_C041.ventilador.ventiLimp = params.ventiLimp;
    MEME_C041.ventilador.ventiLubrica = params.ventiLubrica;
    MEME_C041.ventilador.ventiObserva = params.ventiObserva;

    MEME_C041.ventilador.motorVentiladorRevision = params.motorVentiladorRevision;
    MEME_C041.ventilador.motorVentiladorLimp = params.motorVentiladorLimp;
    MEME_C041.ventilador.motorVentiladorLubrica = params.motorVentiladorLubrica;
    MEME_C041.ventilador.motorVentiladorObserva = params.motorVentiladorObserva;

    MEME_C041.ventilador.conexionesElectriRevision = params.conexionesElectriRevision;
    MEME_C041.ventilador.conexionesElectriLimp = params.conexionesElectriLimp;
    MEME_C041.ventilador.conexionesElectriLubrica = params.conexionesElectriLubrica;
    MEME_C041.ventilador.conexionesElectriObserva = params.conexionesElectriObserva;

    MEME_C041.ventilador.tapaRevision = params.tapaRevision;
    MEME_C041.ventilador.tapaLimp = params.tapaLimp;
    MEME_C041.ventilador.tapaLubrica = params.tapaLubrica;
    MEME_C041.ventilador.tapaObserva = params.tapaObserva;

    MEME_C041.ventilador.pestillosRevision = params.pestillosRevision;
    MEME_C041.ventilador.pestillosLimp = params.pestillosRevision;
    MEME_C041.ventilador.pestillosLubrica = params.pestillosLubrica;
    MEME_C041.ventilador.pestillosObserva = params.pestillosObserva;

    MEME_C041.ventilador.ductosRevision = params.ductosRevision;
    MEME_C041.ventilador.ductosLimp = params.ductosLimp;
    MEME_C041.ventilador.ductosLubrica = params.ductosLubrica;
    MEME_C041.ventilador.ductosObserva = params.ductosObserva;

    MEME_C041.observaciones = params.observaciones;

    MEME_C041.materialUtilizado.codigo = params.codigo;
    MEME_C041.materialUtilizado.descMaterial = params.descMaterial;
    MEME_C041.materialUtilizado.cantidad= params.cantidad;
    MEME_C041.materialUtilizado.noVale =params.noVale;
    
    MEME_C041.supervisor = params.supervisor;
    MEME_C041.jefeDeTurno = params.jefeDeTurno;
    MEME_C041.subgteMeyE = params.subgteMeyE;
    MEME_C041.clave = params.clave;

    MEME_C041.save((err,MEME_C041Stored)=>{
        if(err)return res.status(500).send({message: 'Error al guardar formulario'});

        if(!MEME_C041Stored) return res.status(4041).send({message: 'El formulario no ha sido guardado'});
        
        return res.status(200).send({MEME_C041: MEME_C041Stored});

    });
     
}

//Conseguir los datos
function getMEMEC041(req, res){
    var memeC041Id = req.params.id;

    memeC041.findById(memeC041Id, (err, memeC041)=>{
        if(err)
        return res.status(500).send({message: 'Error en la peticion'})

        if(!memeC041) return res.status(4041).send({message: 'El formulario no existe'});

        return res.status(200).send({memeC041});
    });
}


//Actualizar los datos

function updateMEMEC041(req, res){
    var memeC041Id = req.params.id;
    var update = req.body;

        memeC041.findByIdAndUpdate(memeC041Id, update, {new:true}, (err, memeC041Updated) => {
            if(err) return res.status(500).send({message: 'Error en la peticion'});
    
            if(!memeC041Updated) return res.status(4041).send({message: 'No se ha podido actualizar el usuario'});
    
            return res.status(200).send({memeC041: memeC041Updated});
        });
}

module.exports = {
    saveMemeC041,
    getMEMEC041,
    updateMEMEC041
}