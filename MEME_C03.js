'use strict'
var moment = require('moment');

var memeC03 = require('../../../../../models/SMM/fichasMantenimiento/fichasElectricoMantenimiento/ciclico/MEME_C03');

var User = require('../../../../../models/user');

function saveMemeC03(req, res){
    var params = req.body;
    var MEME_C03 = new memeC03();
    
    MEME_C03.date_created=moment().format('DD/MM/YYYY');

    MEME_C03.num_inspeccion = params.num_inspeccion;
    MEME_C03.num_tren = params.num_tren;
    MEME_C03.kilometraje = params.kilometraje;
    MEME_C03.hora_inicio = params.hora_inicio;
    MEME_C03.hora_termino = params.hora_termino;

    MEME_C03.operarioM1 = params.operarioM1;
    MEME_C03.operarioM2 = params.operarioM2;

    MEME_C03.luminariasM1.lexanesLimp = params.lexanesLimp;
    MEME_C03.luminariasM1.lexanesFisuras = params.lexanesFisuras;
    MEME_C03.luminariasM1.lexanesRalladuras = params.lexanesRalladuras;
    MEME_C03.luminariasM1.lexanesCompleto = params.lexanesCompleto;
    MEME_C03.luminariasM1.lexanesBien =params.lexanesBien;
    MEME_C03.luminariasM1.lexanesObserva = params.lexanesObserva;

    MEME_C03.luminariasM1.soportesLimp = params.soportesLimp;
    MEME_C03.luminariasM1.soportesFisuras = params.soportesFisuras;
    //MEME_C03.luminariasM1.soportesRalladuras = params.soportesRalladuras;
    MEME_C03.luminariasM1.soportesCompleto = params.soportesCompleto;
    MEME_C03.luminariasM1.soportesBien = params.soportesBien;
    MEME_C03.luminariasM1.soportesObserva = params.soportesObserva;

    //MEME_C03.luminariasM1.tornilleraLimp = params.tornilleraLimp;
    //MEME_C03.luminariasM1.tornilleraFisuras = params.tornilleraFisuras;
    //MEME_C03.luminariasM1.tornilleraRalladura = params.tornilleraRalladura;
    MEME_C03.luminariasM1.tornilleraCompleto = params.tornilleraCompleto;
    MEME_C03.luminariasM1.tornilleraBien = params.tornilleraBien;
    MEME_C03.luminariasM1.tornilleraObserva = params.tornilleraObserva;

    MEME_C03.luminariasM1.lamparasLimp = params.lamparasLimp;
    //MEME_C03.luminariasM1.lamparasFisuras = params.lamparasFisuras;
    //MEME_C03.luminariasM1.lamparasRalladuras = params.lamparasRalladuras;
    MEME_C03.luminariasM1.lamparasCompleto = params.lamparasCompleto;
    MEME_C03.luminariasM1.lamparasBien = params.laxanesBien;
    MEME_C03.luminariasM1.lamparasObserva = params.lamparasObserva;

    MEME_C03.luminariasM1.balastrasLimp = params.balastrasLimp;
    //MEME_C03.luminariasM1.balastrasFisuras = params.balastrasFisuras;
    //MEME_C03.luminariasM1.balastrasRalladuras = params.balastrasRalladuras;
    MEME_C03.luminariasM1.balastrasCompleto = params.balastrasCompleto;
    MEME_C03.luminariasM1.balastrasBien = params.balastrasBien;
    MEME_C03.luminariasM1.balastrasObserva = params.balastrasObserva;


    MEME_C03.luminariasM1.cableadoLimp = params.cableadoLimp;
    //MEME_C03.luminariasM1.cableadoFisuras = params.cableadoFisuras;
    //MEME_C03.luminariasM1.cableadoRalladura = params.cableadoRalladura;
    MEME_C03.luminariasM1.cableadoCompleto = params.cableadoCompleto;
    MEME_C03.luminariasM1.cableadoBien = params.cableadoBien;
    MEME_C03.luminariasM1.cableadoObserva = params.cableadoObserva;
//--------------------------------------------------
    MEME_C03.luminariasM2.laxanesLimpM2 = params.laxanesLimpM2;
    MEME_C03.luminariasM2.lexanesFisurasM2 = params.lexanesFisurasM2;
    MEME_C03.luminariasM2.laxanesRalladurasM2 = params.laxanesRalladurasM2;
    MEME_C03.luminariasM2.laxanesCompletoM2 = params.laxanesCompletoM2;
    MEME_C03.luminariasM2.laxanesBienM2 =params.laxanesBienM2;
    MEME_C03.luminariasM2.laxanesObservaM2 = params.laxanesObservaM2;

    MEME_C03.luminariasM2.soportesLimpM2 = params.soportesLimpM2;
    MEME_C03.luminariasM2.soportesFisurasM2 = params.soportesFisurasM2;
    //MEME_C03.luminariasM2.soportesRalladurasM2 = params.soportesRalladurasM2;
    MEME_C03.luminariasM2.soportesCompletoM2 = params.soportesCompletoM2;
    MEME_C03.luminariasM2.soportesBienM2 = params.soportesBienM2;
    MEME_C03.luminariasM2.soportesObservaM2 = params.soportesObservaM2;

    //MEME_C03.luminariasM2.tornilleraLimpM2 = params.tornilleraLimpM2;
    //MEME_C03.luminariasM2.tornilleraFisurasM2 = params.tornilleraFisurasM2;
    //MEME_C03.luminariasM2.tornilleraRalladuraM2 = params.tornilleraRalladuraM2;
    MEME_C03.luminariasM2.tornilleraCompletoM2 = params.tornilleraCompletoM2;
    MEME_C03.luminariasM2.tornilleraBienM2 = params.tornilleraBienM2;
    MEME_C03.luminariasM2.tornilleraObservaM2 = params.tornilleraObservaM2;

    MEME_C03.luminariasM2.lamparasLimpM2 = params.lamparasLimpM2;
    //MEME_C03.luminariasM2.lamparasFisurasM2 = params.lamparasFisurasM2;
    //MEME_C03.luminariasM2.lamparasRalladurasM2 = params.lamparasRalladurasM2;
    MEME_C03.luminariasM2.lamparasCompletoM2 = params.lamparasCompletoM2;
    MEME_C03.luminariasM2.lamparasBienM2 = params.laxanesBienM2;
    MEME_C03.luminariasM2.lamparasObservaM2 = params.lamparasObservaM2;

    MEME_C03.luminariasM2.balastrasLimpM2 = params.balastrasLimpM2;
    //MEME_C03.luminariasM2.balastrasFisurasM2 = params.balastrasFisurasM2;
    //MEME_C03.luminariasM2.balastrasRalladurasM2 = params.balastrasRalladurasM2;
    MEME_C03.luminariasM2.balastrasCompletoM2 = params.balastrasCompletoM2;
    MEME_C03.luminariasM2.balastrasBienM2 = params.balastrasBienM2;
    MEME_C03.luminariasM2.balastrasObservaM2 = params.balastrasObservaM2;


    MEME_C03.luminariasM2.cableadoLimpM2 = params.cableadoLimpM2;
    //MEME_C03.luminariasM2.cableadoFisurasM2 = params.cableadoFisurasM2;
    //MEME_C03.luminariasM2.cableadoRalladuraM2 = params.cableadoRalladuraM2;
    MEME_C03.luminariasM2.cableadoCompletoM2 = params.cableadoCompletoM2;
    MEME_C03.luminariasM2.cableadoBienM2 = params.cableadoBienM2;
    MEME_C03.luminariasM2.cableadoObservaM2 = params.cableadoObservaM2; 

//------------------------------------------------
    MEME_C03.m2.m2_1 = params.m2_1;
    MEME_C03.m2.m2_2 = params.m2_2;
    MEME_C03.m2.m2_3 = params.m2_3;
    MEME_C03.m2.m2_4 = params.m2_4;
    MEME_C03.m2.m2_5 = params.m2_5;
    MEME_C03.m2.m2_6 = params.m2_6;
    MEME_C03.m2.m2_7 = params.m2_7;
    MEME_C03.m2.m2_8 = params.m2_8;
    MEME_C03.m2.m2_9 = params.m2_9;

    MEME_C03.m2.m2_1_1 = params.m2_1_1;
    MEME_C03.m2.m2_1_2 = params.m2_1_2;
    MEME_C03.m2.m2_1_3 = params.m2_1_3;
    MEME_C03.m2.m2_1_4 = params.m2_1_4;
    MEME_C03.m2.m2_1_5 = params.m2_1_5;
    MEME_C03.m2.m2_1_6 = params.m2_1_6;
    MEME_C03.m2.m2_1_7 = params.m2_1_7;
    MEME_C03.m2.m2_1_8 = params.m2_1_8;
    MEME_C03.m2.m2_1_9 = params.m2_1_9;

    //------------------------------------------------
    MEME_C03.m1.m1_1 = params.m1_1;
    MEME_C03.m1.m1_2 = params.m1_2;
    MEME_C03.m1.m1_3 = params.m1_3;
    MEME_C03.m1.m1_4 = params.m1_4;
    MEME_C03.m1.m1_5 = params.m1_5;
    MEME_C03.m1.m1_6 = params.m1_6;
    MEME_C03.m1.m1_7 = params.m1_7;
    MEME_C03.m1.m1_8 = params.m1_8;
    MEME_C03.m1.m1_9 = params.m1_9;

    MEME_C03.m1.m1_1_1 = params.m1_1_1;
    MEME_C03.m1.m1_1_2 = params.m1_1_2;
    MEME_C03.m1.m1_1_3 = params.m1_1_3;
    MEME_C03.m1.m1_1_4 = params.m1_1_4;
    MEME_C03.m1.m1_1_5 = params.m1_1_5;
    MEME_C03.m1.m1_1_6 = params.m1_1_6;
    MEME_C03.m1.m1_1_7 = params.m1_1_7;
    MEME_C03.m1.m1_1_8 = params.m1_1_8;
    MEME_C03.m1.m1_1_9 = params.m1_1_9;

    //--------------------------------------
    MEME_C03.observaciones = params.observaciones;

    MEME_C03.materialUtilizado.codigo = params.codigo;
    MEME_C03.materialUtilizado.descMaterial = params.descMaterial;
    MEME_C03.materialUtilizado.cantidad= params.cantidad;
    MEME_C03.materialUtilizado.noVale =params.noVale;
    
    MEME_C03.supervisor = params.supervisor;
    MEME_C03.jefeDeTurno = params.jefeDeTurno;
    MEME_C03.subgteMeyE = params.subgteMeyE;
    MEME_C03.clave = params.clave;


    MEME_C03.save((err,MEME_C03Stored)=>{
        if(err)return res.status(500).send({message: 'Error al guardar formulario'});

        if(!MEME_C03Stored) return res.status(404).send({message: 'El formulario no ha sido guardado'});
        
        return res.status(200).send({MEME_C03: MEME_C03Stored});

    });

}

//Conseguir datos
function getMEMEC03(req, res){
    var memeC03Id = req.params.id;

    memeC03.findById(memeC03Id, (err, memeC03)=>{
        if(err)
        return res.status(500).send({message: 'Error en la peticion'})

        if(!memeC03) return res.status(404).send({message: 'El formulario no existe'});

        return res.status(200).send({memeC03});
    });
}

//Actualizacion de datos

function updateMEMEC03(req, res){
    var memeC03Id = req.params.id;
    var update = req.body;

        memeC03.findByIdAndUpdate(memeC03Id, update, {new:true}, (err, memeC03Updated) => {
            if(err) return res.status(500).send({message: 'Error en la peticion'});
    
            if(!memeC03Updated) return res.status(404).send({message: 'No se ha podido actualizar el usuario'});
    
            return res.status(200).send({memeC03: memeC03Updated});
        });
}

module.exports = {
    saveMemeC03,
    getMEMEC03,
    updateMEMEC03
}