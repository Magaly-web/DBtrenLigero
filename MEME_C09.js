'use strict'
var moment = require('moment');

var memeC09 = require('../../../../../models/SMM/fichasMantenimiento/fichasElectricoMantenimiento/ciclico/MEME_C09');
var User = require('../../../../../models/user');

function saveMemeC09(req, res){
    var params = req.body;
    var MEME_C09 = new memeC09();
    
    MEME_C09.date_created=moment().format('DD/MM/YYYY');

    MEME_C09.num_inspeccion = params.num_inspeccion;
    MEME_C09.num_tren = params.num_tren;
    MEME_C09.kilometraje = params.kilometraje;
    MEME_C09.hora_inicio = params.hora_inicio;
    MEME_C09.hora_termino = params.hora_termino;

    MEME_C09.operario = params.operario;

    MEME_C09.motriz.m1caLimp = params.m1caLimp;
    MEME_C09.motriz.m1caRev = params.m1caRev;
    MEME_C09.motriz.m1caLub = params.m1caLub;

    MEME_C09.motriz.m1cpLimp = params.m1cpLimp;
    MEME_C09.motriz.m1cpRev = params.m1cpRev;
    MEME_C09.motriz.m1cpLub = params.m1cpLub;

    MEME_C09.motriz.m1tpaLimp = params.m1tpaLimp;
    MEME_C09.motriz.m1tpaRev = params.m1tpaRev;

    MEME_C09.motriz.m1tppLimp = params.m1tppLimp;
    MEME_C09.motriz.m1tppRev = params.m1tppRev;

    MEME_C09.motriz.m2caLimp = params.m2caLimp;
    MEME_C09.motriz.m2caRev = params.m2caRev;
    MEME_C09.motriz.m2caLub = params.m2caLub;

    MEME_C09.motriz.m2cpLimp = params.m2cpLimp;
    MEME_C09.motriz.m2cpRev = params.m2cpRev;
    MEME_C09.motriz.m2cpLub = params.m2cpLub;

    MEME_C09.motriz.m2tpaLimp = params.m2tpaLimp;
    MEME_C09.motriz.m2tpaRev = params.m2tpaRev;

    MEME_C09.motriz.m2tppLimp = params.m2tppLimp;
    MEME_C09.motriz.m2tppRev = params.m2tppRev;

    MEME_C09.motriz.serieMotor = params.serieMotor;

    MEME_C09.observaciones = params.observaciones;

    MEME_C09.materialUtilizado.codigo = params.codigo;
    MEME_C09.materialUtilizado.descMaterial = params.descMaterial;
    MEME_C09.materialUtilizado.cantidad= params.cantidad;
    MEME_C09.materialUtilizado.noVale =params.noVale;

    MEME_C09.supervisor = params.supervisor;
    MEME_C09.jefeDeTurno = params.jefeDeTurno;
    MEME_C09.subgteMeyE = params.subgteMeyE;
    MEME_C09.clave = params.clave;

    MEME_C09.save((err,MEME_C09Stored)=>{
        if(err)return res.status(500).send({message: 'Error al guardar formulario'});

        if(!MEME_C09Stored) return res.status(404).send({message: 'El formulario no ha sido guardado'});
        
        return res.status(200).send({MEME_C09: MEME_C09Stored});

    });

}

//Conseguir datos
function getMEMEC09(req, res){
    var memeC09Id = req.params.id;

    memeC09.findById(memeC09Id, (err, memeC09)=>{
        if(err)
        return res.status(500).send({message: 'Error en la peticion'})

        if(!memeC09) return res.status(404).send({message: 'El formulario no existe'});

        return res.status(200).send({memeC09});
    });
}

//Actualizacion de datos

function updateMEMEC09(req, res){
    var memeC09Id = req.params.id;
    var update = req.body;

        memeC09.findByIdAndUpdate(memeC09Id, update, {new:true}, (err, memeC09Updated) => {
            if(err) return res.status(500).send({message: 'Error en la peticion'});
    
            if(!memeC09Updated) return res.status(404).send({message: 'No se ha podido actualizar el usuario'});
    
            return res.status(200).send({memeC09: memeC09Updated});
        });
}

module.exports = {
    saveMemeC09,
    getMEMEC09,
    updateMEMEC09
}