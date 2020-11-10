'use strict'
var moment = require('moment');

var memeC20 = require('../../../../../models/SMM/fichasMantenimiento/fichasElectricoMantenimiento/ciclico/MEME_C20');
var User = require('../../../../../models/user');

function saveMemeC20(req, res){
    var params = req.body;
    var MEME_C20 = new memeC20();
    
    MEME_C20.date_created=moment().format('DD/MM/YYYY');

    MEME_C20.num_inspeccion = params.num_inspeccion;
    MEME_C20.num_tren = params.num_tren;
    MEME_C20.kilometraje = params.kilometraje;
    MEME_C20.hora_inicio = moment().format('HH:mm');
    MEME_C20.hora_termino = moment().format('HH:mm');

    MEME_C20.operario = params.operario;
    MEME_C20.operador = params.operador;
   //----------------------------
   MEME_C20.c1 = params.c1;
   MEME_C20.n1 = params.n1;

   MEME_C20.c2 = params.c2;
   MEME_C20.n2 = params.n2;

   MEME_C20.c3 = params.c3;
   MEME_C20.n3 = params.n3;

   MEME_C20.c4 = params.c4;
   MEME_C20.n4 = params.n4;

   MEME_C20.c5 = params.c5;
   MEME_C20.n5 = params.n5;

   MEME_C20.c6 = params.c6;
   MEME_C20.n6 = params.n6;

   MEME_C20.c7 = params.c7;
   MEME_C20.n7 = params.n7;
   
   MEME_C20.c8 = params.c8;
   MEME_C20.n8 = params.n8;

   //Motriz
   MEME_C20.m1p1 = params.m1p1;
   MEME_C20.m1v1 = params.m1v1;
   MEME_C20.m1li1 = params.m1li1;
   MEME_C20.m1g1 = params.m1g1;

   MEME_C20.m1p2 = params.m1p2;
   MEME_C20.m1v2 = params.m1v2;
   MEME_C20.m1li2 = params.m1li2;
   MEME_C20.m1g2 = params.m1g2;

   MEME_C20.m1p3 = params.m1p3;
   MEME_C20.m1v3 = params.m1v3;
   MEME_C20.m1li3 = params.m1li3;
   MEME_C20.m1g3 = params.m1g3;

   MEME_C20.m1p4 = params.m1p4;
   MEME_C20.m1v4 = params.m1v4;
   MEME_C20.m1li4 = params.m1li4;
   MEME_C20.m1g4 = params.m1g4;

   //Motriz 2

   MEME_C20.m2p5 = params.m2p5;
   MEME_C20.m2v5 = params.m2v5;
   MEME_C20.m2li5 = params.m2li5;
   MEME_C20.m2g5 = params.m2g5;

   MEME_C20.m2p6 = params.m2p6;
   MEME_C20.m2v6 = params.m2v6;
   MEME_C20.m2li6 = params.m2li6;
   MEME_C20.m2g6 = params.m2g6;

   MEME_C20.m2p7 = params.m2p7;
   MEME_C20.m2v7 = params.m2v7;
   MEME_C20.m2li7 = params.m2li7;
   MEME_C20.m2g7 = params.m2g7;

   MEME_C20.m2p8 = params.m2p8;
   MEME_C20.m2v8 = params.m2v8;
   MEME_C20.m2li8 = params.m2li8;
   MEME_C20.m2g8 = params.m2g8;

   MEME_C20.vi1 = params.vi1;
   MEME_C20.vi2 = params.vi2;
   MEME_C20.vi3 = params.vi3;
   MEME_C20.vi4 = params.vi4;
   MEME_C20.vi5 = params.vi5;
   MEME_C20.vi6 = params.vi6;
   MEME_C20.vi7 = params.vi7;
   MEME_C20.vi8 = params.vi8;

   MEME_C20.dm1 = params.dm1;
   MEME_C20.dm2 = params.dm2;
   MEME_C20.dm3 = params.dm3;
   MEME_C20.dm4 = params.dm4;
   MEME_C20.dm5 = params.dm5;
   MEME_C20.dm6 = params.dm6;
   MEME_C20.dm7 = params.dm7;
   MEME_C20.dm8 = params.dm8;

   MEME_C20.rf1 = params.rf1;
   MEME_C20.rf2 = params.rf2;
   MEME_C20.rf3 = params.rf3;
   MEME_C20.rf4 = params.rf4;
   MEME_C20.rf5 = params.rf5;
   MEME_C20.rf6 = params.rf6;
   MEME_C20.rf7 = params.rf7;
   MEME_C20.rf8 = params.rf8;


    //----------------------------

    MEME_C20.observaciones = params.observaciones;
    
    MEME_C20.materialUtilizado.codigo = params.codigo;
    MEME_C20.materialUtilizado.descMaterial = params.descMaterial;
    MEME_C20.materialUtilizado.cantidad= params.cantidad;
    MEME_C20.materialUtilizado.noVale =params.noVale;

    MEME_C20.supervisor = params.supervisor;
    MEME_C20.jefeDeTurno = params.jefeDeTurno;
    MEME_C20.subgteMeyE = params.subgteMeyE;
    MEME_C20.clave = params.clave;

    MEME_C20.save((err,MEME_C20Stored)=>{
        if(err)return res.status(500).send({message: 'Error al guardar formulario'});

        if(!MEME_C20Stored) return res.status(404).send({message: 'El formulario no ha sido guardado'});
        
        return res.status(200).send({MEME_C20: MEME_C20Stored});

    });
}

//Conseguir datos
function getMEMEC20(req, res){
    var memeC20Id = req.params.id;

    memeC20.findById(memeC20Id, (err, memeC20)=>{
        if(err)
        return res.status(500).send({message: 'Error en la peticion'})

        if(!memeC20) return res.status(404).send({message: 'El formulario no existe'});

        return res.status(200).send({memeC20});
    });
}

//Actualizacion de datos

function updateMEMEC20(req, res){
    var memeC20Id = req.params.id;
    var update = req.body;

        memeC20.findByIdAndUpdate(memeC20Id, update, {new:true}, (err, memeC20Updated) => {
            if(err) return res.status(500).send({message: 'Error en la peticion'});
    
            if(!memeC20Updated) return res.status(404).send({message: 'No se ha podido actualizar el usuario'});
    
            return res.status(200).send({memeC20: memeC20Updated});
        });
}

module.exports = {
    saveMemeC20,
    getMEMEC20,
    updateMEMEC20
}
