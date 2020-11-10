'use strict'
var moment = require('moment');

var memeC07 = require('../../../../../models/SMM/fichasMantenimiento/fichasElectricoMantenimiento/ciclico/MEME_C07');
var User = require('../../../../../models/user');

function saveMemeC07(req, res){
    var params = req.body;
    var MEME_C07 = new memeC07();
    
    MEME_C07.date_created=moment().format('DD/MM/YYYY');

    MEME_C07.num_inspeccion = params.num_inspeccion;
    MEME_C07.num_tren = params.num_tren;
    MEME_C07.kilometraje = params.kilometraje;
    MEME_C07.hora_inicio = params.hora_inicio;
    MEME_C07.hora_termino = params.hora_termino;

    MEME_C07.operario = params.operario;

    MEME_C07.actividad.contenedorSop = params.contenedorSop;
    MEME_C07.actividad.contenedorLimp = params.contenedorLimp;
    MEME_C07.actividad.contenedorRev = params.contenedorRev;

    MEME_C07.actividad.ducSop = params.ducSop;
    MEME_C07.actividad.ducLimp = params.ducLimp;
    MEME_C07.actividad.ducRev = params.ducRev;

    MEME_C07.actividad.filSop = params.filSop;
    MEME_C07.actividad.filLimp = 
    params.filLimp;
    MEME_C07.actividad.filRev = params.filRev;

    MEME_C07.actividad.disSop = params.disSop;
    MEME_C07.actividad.disLimp = params.disLimp;
    MEME_C07.actividad.disRev = params.disRev;

    MEME_C07.actividad.mvSop = params.mvSop;
    MEME_C07.actividad.mvLimp = params.mvLimp;
    MEME_C07.actividad.mvRev = params.mvRev;

    MEME_C07.actividad.conexSop = params.conexSop;
    MEME_C07.actividad.conexLim = params.conexLim
    MEME_C07.actividad.conexRev= params.conexRev;

    MEME_C07.tapCaja.señaSop = params.señaSop;
    MEME_C07.tapCaja.señaLimp = params.señaLimp;
    MEME_C07.tapCaja.señaRev = params.señaRev;
    
    MEME_C07.tapCaja.pestSop = params.pestSop;
    MEME_C07.tapCaja.pestLimp = params.pestLimp;
    MEME_C07.tapCaja.pestREv = params.pestREv;

    MEME_C07.tapCaja.lamSop = params.lamSop;
    MEME_C07.tapCaja.lamLimp = params.lamLimp;
    MEME_C07.tapCaja.lamRev = params.lamRev;

    MEME_C07.tapCaja.selSop = params.selSop;
    MEME_C07.tapCaja.selLimp = params.selLimp;
    MEME_C07.tapCaja.selRev = params.selRev;

    MEME_C07.cedtTe90.a_10Sop = params.a_10Sop;
    MEME_C07.cedtTe90.a_10Limp = params.a_10Limp;
    MEME_C07.cedtTe90.a_10Rev = params.a_10Rev;
    MEME_C07.cedtTe90.a_10Serie = params.a_10Serie;

    MEME_C07.cedtTe90.a_20Sop = params.a_20Sop;
    MEME_C07.cedtTe90.a_20Limp = params.a_20Limp;
    MEME_C07.cedtTe90.a_20Rev = params.a_20Rev;
    MEME_C07.cedtTe90.a_20Serie = params.a_20Serie;

    MEME_C07.cedtTe90.a_30Sop = params.a_30Sop;
    MEME_C07.cedtTe90.a_30Limp = params.a_30Limp;
    MEME_C07.cedtTe90.a_30Rev = params.a_30Rev;
    MEME_C07.cedtTe90.a_30Serie = params.a_30Serie;

    MEME_C07.cedtTe95.rfddmSop = params.rfddmSop;
    MEME_C07.cedtTe95.rfddmLimp = params.rfddmLimp;
    MEME_C07.cedtTe95.rfddmRev = params.rfddmRev;

    MEME_C07.cedtTe95.rpdadvSop = params.rpdadvSop;
    MEME_C07.cedtTe95.rpdadvLimp = params.rpdadvLimp;
    MEME_C07.cedtTe95.rpdadvRev = params.rpdadvRev;

    MEME_C07.epuTe06.indSop = params.indSop;
    MEME_C07.epuTe06.indLimp = params.indLimp;
    MEME_C07.epuTe06.indRev= params.indRev;

    MEME_C07.epuTe06.ctfSop = params.ctfSop;
    MEME_C07.epuTe06.ctfLimp = params.ctfLimp
    MEME_C07.epuTe06.ctfRev = params.ctfRev;

    MEME_C07.epuTe06.ctvSop = params.ctvSop;
    MEME_C07.epuTe06.ctvLimp = params.ctvLimp;
    MEME_C07.epuTe06.ctvRev = params.ctvRev;

    MEME_C07.epuTe06.ctpLimp = params.ctpLimp;
    MEME_C07.epuTe06.ctpRev = params.ctpRev;

    MEME_C07.epuTe06.catpLimp = params.catpLimp;
    MEME_C07.epuTe06.catSop = params.catSop;
    MEME_C07.epuTe06.catRev = params.catRev;

    MEME_C07.observaciones = params.observaciones;

    MEME_C07.materialUtilizado.codigo = params.codigo;
    MEME_C07.materialUtilizado.descMaterial = params.descMaterial;
    MEME_C07.materialUtilizado.cantidad= params.cantidad;
    MEME_C07.materialUtilizado.noVale =params.noVale;

    MEME_C07.supervisor = params.supervisor;
    MEME_C07.jefeDeTurno = params.jefeDeTurno;
    MEME_C07.subgteMeyE = params.subgteMeyE;
    MEME_C07.clave = params.clave;

    MEME_C07.save((err,MEME_C07Stored)=>{
        if(err)return res.status(500).send({message: 'Error al guardar formulario'});

        if(!MEME_C07Stored) return res.status(404).send({message: 'El formulario no ha sido guardado'});
        
        return res.status(200).send({MEME_C07: MEME_C07Stored});

    });
}

//Conseguir datos
function getMEMEC07(req, res){
    var memeC07Id = req.params.id;

    memeC07.findById(memeC07Id, (err, memeC07)=>{
        if(err)
        return res.status(500).send({message: 'Error en la peticion'})

        if(!memeC07) return res.status(404).send({message: 'El formulario no existe'});

        return res.status(200).send({memeC07});
    });
}

//Actualizacion de datos

function updateMEMEC07(req, res){
    var memeC07Id = req.params.id;
    var update = req.body;

        memeC07.findByIdAndUpdate(memeC07Id, update, {new:true}, (err, memeC07Updated) => {
            if(err) return res.status(500).send({message: 'Error en la peticion'});
    
            if(!memeC07Updated) return res.status(404).send({message: 'No se ha podido actualizar el usuario'});
    
            return res.status(200).send({memeC07: memeC07Updated});
        });
}

module.exports = {
    saveMemeC07,
    getMEMEC07,
    updateMEMEC07
}