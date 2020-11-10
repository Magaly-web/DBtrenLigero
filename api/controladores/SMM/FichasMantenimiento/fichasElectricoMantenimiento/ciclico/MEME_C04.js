'use strict'
var moment = require('moment');

var memeC04 = require('../../../../../models/SMM/fichasMantenimiento/fichasElectricoMantenimiento/ciclico/MEME_C04');
var User = require('../../../../../models/user');

function saveMemeC04(req, res){
    var params = req.body;
    var MEME_C04 = new memeC04();
    MEME_C04.date_created=moment().format('DD/MM/YYYY');

    MEME_C04.num_inspeccion = params.num_inspeccion;
    MEME_C04.num_tren = params.num_tren;
    MEME_C04.kilometraje = params.kilometraje;
    MEME_C04.hora_inicio = params.hora_inicio;
    MEME_C04.hora_termino = params.hora_termino;

    MEME_C04.operarioM1 = params.operarioM1;
    MEME_C04.operarioM2 = params.operarioM2;

    MEME_C04.m2.m2_1 = params.m2_1;
    MEME_C04.m2.m2_2 = params.m2_2;
    MEME_C04.m2.m2_3 = params.m2_3;
    MEME_C04.m2.m2_4 = params.m2_4;
    MEME_C04.m2.m2_5 = params.m2_5;
    MEME_C04.m2.m2_6 = params.m2_6;
    MEME_C04.m2.m2_7 = params.m2_7;

    MEME_C04.m1.m1_1 = params.m1_1;
    MEME_C04.m1.m1_2 = params.m1_2;
    MEME_C04.m1.m1_3 = params.m1_3;
    MEME_C04.m1.m1_4 = params.m1_4;
    MEME_C04.m1.m1_5 = params.m1_5;
    MEME_C04.m1.m1_6 = params.m1_6;
    MEME_C04.m1.m1_7 = params.m1_7;

    MEME_C04.ventilador.ventiRevision =params.ventiRevision;
    MEME_C04.ventilador.ventiLimp = params.ventiLimp;
    MEME_C04.ventilador.ventiLubrica = params.ventiLubrica;
    MEME_C04.ventilador.ventiObserva = params.ventiObserva;

    MEME_C04.ventilador.motorVentiladorRevision = params.motorVentiladorRevision;
    MEME_C04.ventilador.motorVentiladorLimp = params.motorVentiladorLimp;
    MEME_C04.ventilador.motorVentiladorLubrica = params.motorVentiladorLubrica;
    MEME_C04.ventilador.motorVentiladorObserva = params.motorVentiladorObserva;

    MEME_C04.ventilador.conexionesElectriRevision = params.conexionesElectriRevision;
    MEME_C04.ventilador.conexionesElectriLimp = params.conexionesElectriLimp;
    MEME_C04.ventilador.conexionesElectriLubrica = params.conexionesElectriLubrica;
    MEME_C04.ventilador.conexionesElectriObserva = params.conexionesElectriObserva;

    MEME_C04.ventilador.tapaRevision = params.tapaRevision;
    MEME_C04.ventilador.tapaLimp = params.tapaLimp;
    MEME_C04.ventilador.tapaLubrica = params.tapaLubrica;
    MEME_C04.ventilador.tapaObserva = params.tapaObserva;

    MEME_C04.ventilador.pestillosRevision = params.pestillosRevision;
    MEME_C04.ventilador.pestillosLimp = params.pestillosRevision;
    MEME_C04.ventilador.pestillosLubrica = params.pestillosLubrica;
    MEME_C04.ventilador.pestillosObserva = params.pestillosObserva;

    MEME_C04.ventilador.ductosRevision = params.ductosRevision;
    MEME_C04.ventilador.ductosLimp = params.ductosLimp;
    MEME_C04.ventilador.ductosLubrica = params.ductosLubrica;
    MEME_C04.ventilador.ductosObserva = params.ductosObserva;

    MEME_C04.observaciones = params.observaciones;

    MEME_C04.materialUtilizado.codigo = params.codigo;
    MEME_C04.materialUtilizado.descMaterial = params.descMaterial;
    MEME_C04.materialUtilizado.cantidad= params.cantidad;
    MEME_C04.materialUtilizado.noVale =params.noVale;
    
    MEME_C04.supervisor = params.supervisor;
    MEME_C04.jefeDeTurno = params.jefeDeTurno;
    MEME_C04.subgteMeyE = params.subgteMeyE;
    MEME_C04.clave = params.clave;

    MEME_C04.save((err,MEME_C04Stored)=>{
        if(err)return res.status(500).send({message: 'Error al guardar formulario'});

        if(!MEME_C04Stored) return res.status(404).send({message: 'El formulario no ha sido guardado'});
        
        return res.status(200).send({MEME_C04: MEME_C04Stored});

    });
     
}

//Conseguir los datos
function getMEMEC04(req, res){
    var memeC04Id = req.params.id;

    memeC04.findById(memeC04Id, (err, memeC04)=>{
        if(err)
        return res.status(500).send({message: 'Error en la peticion'})

        if(!memeC04) return res.status(404).send({message: 'El formulario no existe'});

        return res.status(200).send({memeC04});
    });
}


//Actualizar los datos

function updateMEMEC04(req, res){
    var memeC04Id = req.params.id;
    var update = req.body;

        memeC04.findByIdAndUpdate(memeC04Id, update, {new:true}, (err, memeC04Updated) => {
            if(err) return res.status(500).send({message: 'Error en la peticion'});
    
            if(!memeC04Updated) return res.status(404).send({message: 'No se ha podido actualizar el usuario'});
    
            return res.status(200).send({memeC04: memeC04Updated});
        });
}

module.exports = {
    saveMemeC04,
    getMEMEC04,
    updateMEMEC04
}