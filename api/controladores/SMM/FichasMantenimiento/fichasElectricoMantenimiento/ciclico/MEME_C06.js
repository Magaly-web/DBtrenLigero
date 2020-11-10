'use strict'
var moment = require('moment');

var memeC06 = require('../../../../../models/SMM/fichasMantenimiento/fichasElectricoMantenimiento/ciclico/MEME_C06');
var User = require('../../../../../models/user');

function saveMemeC06(req, res){
    var params = req.body;
    var MEME_C06 = new memeC06();
    
    MEME_C06.date_created=moment().format('DD/MM/YYYY');

    MEME_C06.num_inspeccion = params.num_inspeccion;
    MEME_C06.num_tren = params.num_tren;
    MEME_C06.kilometraje = params.kilometraje;
    MEME_C06.hora_inicio = params.hora_inicio;
    MEME_C06.hora_termino = params.hora_termino;

    MEME_C06.operario = params.operario;
    
    //rf90

    MEME_C06.rf90.r1TyPRev90 = params.r1TyPRev90;
    MEME_C06.rf90.r1TyPLimp90 = params.r1TyPLimp90;
    MEME_C06.rf90.r1PdARev90 = params.r1PdARev90;
    MEME_C06.rf90.r1PdALimp90 = params.r1PdALimp90;
    MEME_C06.rf90.r1TorRev90 = params.r1TorRev90;
    MEME_C06.rf90.r1TorLimp90 = params.r1TorLimp90;
    MEME_C06.rf90.r1SerpRev90 = params.r1SerpRev90;
    MEME_C06.rf90.r1SerpSop90 = params.r1SerpSop90;
    MEME_C06.rf90.r1SerpLimp90 = params.r1SerpLimp90;
    MEME_C06.rf90.r1AisRev90 = params.r1AisRev90;
    MEME_C06.rf90.r1AisLimp90 = params.r1AisLimp90;

    MEME_C06.rf90.r2TyPRev90 = params.r2TyPRev90;
    MEME_C06.rf90.r2TyPLimp90 = params.r2TyPLimp;
    MEME_C06.rf90.r2PdARev90 = params.r2PdARev90;
    MEME_C06.rf90.r2PdALimp90 = params.r2PdALimp90;
    MEME_C06.rf90.r2TorRev90 = params.r2TorRev90;
    MEME_C06.rf90.r2TorLimp90 = params.r2TorLimp90;
    MEME_C06.rf90.r2SerpRev90 = params.r2SerpRev90;
    MEME_C06.rf90.r2SerpSop90 = params.r2SerpSop90;
    MEME_C06.rf90.r2SerpLimp90 = params.r2SerpLimp90;
    MEME_C06.rf90.r2AisRev90 = params.r2AisRev90;
    MEME_C06.rf90.r2AisLimp90 = params.r2AisLimp90;

    MEME_C06.rf90.r3TyPRev90 = params.r3TyPRev90;
    MEME_C06.rf90.r3TyPLimp90 = params.r3TyPLimp90;
    MEME_C06.rf90.r3PdARev90 = params.r3PdARev90;
    MEME_C06.rf90.r3PdALimp90 = params.r3PdALimp90;
    MEME_C06.rf90.r3TorRev90 = params.r3TorRev90;
    MEME_C06.rf90.r3TorLimp90 = params.r3TorLimp90;
    MEME_C06.rf90.r3SerpRev90 = params.r3SerpRev90;
    MEME_C06.rf90.r3SerpSop90 = params.r3SerpSop90;
    MEME_C06.rf90.r3SerpLimp90 = params.r3SerpLimp90;
    MEME_C06.rf90.r3AisRev90 = params.r3AisRev90;
    MEME_C06.rf90.r3AisLimp90 = params.r3AisLimp90;

    MEME_C06.rf90.r4TyPRev90 = params.r4TyPRev90;
    MEME_C06.rf90.r4TyPLimp90 = params.r4TyPLimp90;
    MEME_C06.rf90.r4PdARev90 = params.r4PdARev90;
    MEME_C06.rf90.r4PdALimp90 = params.r4PdALimp90;
    MEME_C06.rf90.r4TorRev90 = params.r4TorRev90;
    MEME_C06.rf90.r4TorLimp90 = params.r4TorLimp90;
    MEME_C06.rf90.r4SerpRev90 = params.r4SerpRev90;
    MEME_C06.rf90.r4SerpSop90 = params.r4SerpSop90;
    MEME_C06.rf90.r4SerpLimp90 = params.r4SerpLimp90;
    MEME_C06.rf90.r4AisRev90 = params.r4AisRev90;
    MEME_C06.rf90.r4AisLimp90 = params.r4AisLimp90;

    MEME_C06.rf90.r5TyPRev90 = params.r5TyPRev90;
    MEME_C06.rf90.r5TyPLimp90 = params.r5TyPLimp90;
    MEME_C06.rf90.r5PdARev90 = params.r5PdARev90;
    MEME_C06.rf90.r5PdALimp90 = params.r5PdALimp90;
    MEME_C06.rf90.r5TorRev90 = params.r5TorRev90;
    MEME_C06.rf90.r5TorLimp90 = params.r5TorLimp90;
    MEME_C06.rf90.r5SerpRev90 = params.r5SerpRev90;
    MEME_C06.rf90.r5SerpSop90 = params.r5SerpSop90;
    MEME_C06.rf90.r5SerpLimp90 = params.r5SerpLimp90;
    MEME_C06.rf90.r5AisRev90 = params.r5AisRev90;
    MEME_C06.rf90.r5AisLimp90 = params.r5AisLimp90;
    
    //rf95
    MEME_C06.rf95.r1TyPRev95 = params.r1TyPRev95;
    MEME_C06.rf95.r1TyPLimp95 = params.r1TyPLimp95;
    MEME_C06.rf95.r1PdARev95 = params.r1PdARev95;
    MEME_C06.rf95.r1PdALimp95 = params.r1PdALimp95;
    MEME_C06.rf95.r1TorRev95 = params.r1TorRev95;
    MEME_C06.rf95.r1TorLimp95 = params.r1TorLimp95;
    MEME_C06.rf95.r1SerpRev95 = params.r1SerpRev95;
    MEME_C06.rf95.r1SerpSop95 = params.r1SerpSop95;
    MEME_C06.rf95.r1SerpLimp95 = params.r1SerpLimp95;
    MEME_C06.rf95.r1AisRev95 = params.r1AisRev95;
    MEME_C06.rf95.r1AisLimp95 = params.r1AisLimp95;

    MEME_C06.rf95.r2TyPRev95 = params.r2TyPRev95;
    MEME_C06.rf95.r2TyPLimp95 = params.r2TyPLimp95;
    MEME_C06.rf95.r2PdARev95 = params.r2PdARev95;
    MEME_C06.rf95.r2PdALimp95 = params.r2PdALimp95;
    MEME_C06.rf95.r2TorRev95 = params.r2TorRev95;
    MEME_C06.rf95.r2TorLimp95 = params.r2TorLimp95;
    MEME_C06.rf95.r2SerpRev95 = params.r2SerpRev95;
    MEME_C06.rf95.r2SerpSop95 = params.r2SerpSop95;
    MEME_C06.rf95.r2SerpLimp95 = params.r2SerpLimp95;
    MEME_C06.rf95.r2AisRev95 = params.r2AisRev95;
    MEME_C06.rf95.r2AisLimp95 = params.r2AisLimp95;

    MEME_C06.rf95.r3TyPRev95 = params.r3TyPRev95;
    MEME_C06.rf95.r3TyPLimp95 = params.r3TyPLimp95;
    MEME_C06.rf95.r3PdARev95 = params.r3PdARev95;
    MEME_C06.rf95.r3PdALimp95 = params.r3PdALimp95;
    MEME_C06.rf95.r3TorRev95 = params.r3TorRev95;
    MEME_C06.rf95.r3TorLimp95 = params.r3TorLimp95;
    MEME_C06.rf95.r3SerpRev95 = params.r3SerpRev95;
    MEME_C06.rf95.r3SerpSop95 = params.r3SerpSop95;
    MEME_C06.rf95.r3SerpLimp95 = params.r3SerpLimp95;
    MEME_C06.rf95.r3AisRev95 = params.r3AisRev95;
    MEME_C06.rf95.r3AisLimp95 = params.r3AisLimp95;

    MEME_C06.rf95.r4TyPRev95 = params.r4TyPRev95;
    MEME_C06.rf95.r4TyPLimp95 = params.r4TyPLimp95;
    MEME_C06.rf95.r4PdARev95 = params.r4PdARev95;
    MEME_C06.rf95.r4PdALimp95 = params.r4PdALimp95;
    MEME_C06.rf95.r4TorRev95 = params.r4TorRev95;
    MEME_C06.rf95.r4TorLimp95 = params.r4TorLimp95;
    MEME_C06.rf95.r4SerpRev95 = params.r4SerpRev95;
    MEME_C06.rf95.r4SerpSop95 = params.r4SerpSop95;
    MEME_C06.rf95.r4SerpLimp95 = params.r4SerpLimp95;
    MEME_C06.rf95.r4AisRev95 = params.r4AisRev95;
    MEME_C06.rf95.r4AisLimp95 = params.r4AisLimp95;

    MEME_C06.rf95.r5TyPRev95 = params.r5TyPRev95;
    MEME_C06.rf95.r5TyPLimp95 = params.r5TyPLimp95;
    MEME_C06.rf95.r5PdARev95 = params.r5PdARev95;
    MEME_C06.rf95.r5PdALimp95 = params.r5PdALimp95;
    MEME_C06.rf95.r5TorRev95 = params.r5TorRev95;
    MEME_C06.rf95.r5TorLimp95 = params.r5TorLimp95;
    MEME_C06.rf95.r5SerpRev95 = params.r5SerpRev95;
    MEME_C06.rf95.r5SerpSop95 = params.r5SerpSop95;
    MEME_C06.rf95.r5SerpLimp95 = params.r5SerpLimp95;
    MEME_C06.rf95.r5AisRev95 = params.r5AisRev95;
    MEME_C06.rf95.r5AisLimp95 = params.r5AisLimp95;

    MEME_C06.rf95.r6TyPRev95 = params.r6TyPRev95;
    MEME_C06.rf95.r6TyPLimp95 = params.r6TyPLimp95;

    MEME_C06.rf95.r6PdARev95 = params.r6PdARev95;
    MEME_C06.rf95.r6PdALimp95 = params.r6PdALimp95;

    MEME_C06.rf95.r6TorRev95 = params.r6TorRev95;
    MEME_C06.rf95.r6TorLimp95 = params.r6TorLimp95;

    MEME_C06.rf95.r6SerpRev95 = params.r6SerpRev95;
    MEME_C06.rf95.r6SerpSop95 = params.r6SerpSop95;
    MEME_C06.rf95.r6SerpLimp95 = params.r6SerpLimp95;

    MEME_C06.rf95.r6AisRev95 = params.r6AisRev95;
    MEME_C06.rf95.r6AisLimp95 = params.r6AisLimp95;

    //rf06
    MEME_C06.rf06.puentesDaluminioRev = params.puentesDaluminioRev;
    MEME_C06.rf06.puentesDaluminioSop = params.puentesDaluminioSop;

    MEME_C06.rf06.tornilleriaRev = params.tornilleriaRev;
    MEME_C06.rf06.tornilleriaSop = params.tornilleriaSop;
    
    MEME_C06.rf06.serpentinesRev = params.serpentinesRev;
    MEME_C06.rf06.serpentinesSop = params.serpentinesSop;

    MEME_C06.rf06.aisladoresRev = params.aisladoresRev;
    MEME_C06.rf06.aisladoresSop = params.aisladoresSop;

    MEME_C06.rf06.bastidorRev = params.bastidorRev;
    MEME_C06.rf06.bastidoresSop = params.bastidoresSop;
    MEME_C06.rf06.bastidorLimp = params.bastidorLimp;


//_________________________________________
    MEME_C06.resistenciaTotal = params.resistenciaTotal;
    MEME_C06.observaciones = params.observaciones;

    MEME_C06.materialUtilizado.codigo = params.codigo;
    MEME_C06.materialUtilizado.descMaterial = params.descMaterial;
    MEME_C06.materialUtilizado.cantidad= params.cantidad;
    MEME_C06.materialUtilizado.noVale =params.noVale;

    MEME_C06.supervisor = params.supervisor;
    MEME_C06.jefeDeTurno = params.jefeDeTurno;
    MEME_C06.subgteMeyE = params.subgteMeyE;
    MEME_C06.clave = params.clave;

    MEME_C06.save((err,MEME_C06Stored)=>{
        if(err)return res.status(500).send({message: 'Error al guardar formulario'});

        if(!MEME_C06Stored) return res.status(404).send({message: 'El formulario no ha sido guardado'});
        
        return res.status(200).send({MEME_C06: MEME_C06Stored});

    });

}

//Conseguir datos
function getMEMEC06(req, res){
    var memeC06Id = req.params.id;

    memeC06.findById(memeC06Id, (err, memeC06)=>{
        if(err)
        return res.status(500).send({message: 'Error en la peticion'})

        if(!memeC06) return res.status(404).send({message: 'El formulario no existe'});

        return res.status(200).send({memeC06});
    });
}

//Actualizacion de datos

function updateMEMEC06(req, res){
    var memeC06Id = req.params.id;
    var update = req.body;

        memeC06.findByIdAndUpdate(memeC06Id, update, {new:true}, (err, memeC06Updated) => {
            if(err) return res.status(500).send({message: 'Error en la peticion'});
    
            if(!memeC06Updated) return res.status(404).send({message: 'No se ha podido actualizar el usuario'});
    
            return res.status(200).send({memeC06: memeC06Updated});
        });
}

module.exports = {
    saveMemeC06,
    getMEMEC06,
    updateMEMEC06
}