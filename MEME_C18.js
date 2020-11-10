'use strict'
var moment = require('moment');

var memeC18 = require('../../../../../models/SMM/fichasMantenimiento/fichasElectricoMantenimiento/ciclico/MEME_C18');
var User = require('../../../../../models/user');

function saveMemeC18(req, res){
    var params = req.body;
    var MEME_C18 = new memeC18();
    
    MEME_C18.date_created=moment().format('DD/MM/YYYY');

    MEME_C18.num_inspeccion = params.num_inspeccion;
    MEME_C18.num_tren = params.num_tren;
    MEME_C18.kilometraje = params.kilometraje;
    MEME_C18.hora_inicio = moment().format('HH:mm');
    MEME_C18.hora_termino = moment().format('HH:mm');

    MEME_C18.operario = params.operario;  

    
    MEME_C18.act.cets = params.cets;
    MEME_C18.act.cetl =params.cetl;
    MEME_C18.act.cetr = params.cetr;

    MEME_C18.act.rts = params.rts;
    MEME_C18.act.rtl = params.rtl;
    MEME_C18.act.rtr = params.rtr;

    MEME_C18.act.ces = params.ces;
    MEME_C18.act.cel = params.cel;
    MEME_C18.act.cer = params.cer;

    MEME_C18.act.fs = params.fs;
    MEME_C18.act.fl = params.fl;
    MEME_C18.act.fr = params.fr;

    MEME_C18.act.cos = params.cos;
    MEME_C18.act.col = params.col;
    MEME_C18.act.cor = params.cor;
    
    MEME_C18.act.sfs = params.sfs;
    MEME_C18.act.sfl = params.sfl;
    MEME_C18.act.sfr = params.sfr;

    MEME_C18.te90.a10s = params.a10s;
    MEME_C18.te90.a10l = params.a10l;
    MEME_C18.te90.a10r = params.a10r;
    MEME_C18.te90.a10n = params.a10n;

    MEME_C18.te90.a20s = params.a20s;
    MEME_C18.te90.a20l = params.a20l;
    MEME_C18.te90.a20r = params.a20r;
    MEME_C18.te90.a20n = params.a20n;

    MEME_C18.te90.a30s = params.a30s;
    MEME_C18.te90.a30l = params.a30l;
    MEME_C18.te90.a30r = params.a30r;
    MEME_C18.te90.a30n = params.a30n;

    MEME_C18.te95.mods = params.mods;
    MEME_C18.te95.modl = params.modl;
    MEME_C18.te95.modr = params.modr;
    
    MEME_C18.te95.cetso = params.cetso;
    MEME_C18.te95.cetli = params.cetli;
    MEME_C18.te95.cetre = params.cetre;

    MEME_C18.te95.tms = params.tms;
    MEME_C18.te95.tml = params.tml;
    MEME_C18.te95.tmr = params.tmr;

    MEME_C18.te06.ifls = params.ifls;
    MEME_C18.te06.ifll = params.ifll;
    MEME_C18.te06.iflr = params.iflr;

    MEME_C18.te06.ctfs = params.ctfs;
    MEME_C18.te06.ctfl = params.ctfl;
    MEME_C18.te06.ctfr = params.ctfr;

    MEME_C18.te06.ctvs = params.ctvs;
    MEME_C18.te06.ctvl = params.ctvl;
    MEME_C18.te06.ctvr = params.ctvr;

    MEME_C18.te06.ctpl = params.ctpl;
    MEME_C18.te06.ctpr = params.ctpr;

    MEME_C18.te06.hvpl = params.hvpl;
    MEME_C18.te06.hvpr = params.hvpr;



    MEME_C18.observaciones = params.observaciones;
    MEME_C18.materialUtilizado.codigo = params.codigo;
    MEME_C18.materialUtilizado.descMaterial = params.descMaterial;
    MEME_C18.materialUtilizado.cantidad= params.cantidad;
    MEME_C18.materialUtilizado.noVale =params.noVale;

    MEME_C18.supervisor = params.supervisor;
    MEME_C18.jefeDeTurno = params.jefeDeTurno;
    MEME_C18.subgteMeyE = params.subgteMeyE;
    MEME_C18.clave = params.clave;

    MEME_C18.save((err,MEME_C18Stored)=>{
        if(err)return res.status(500).send({message: 'Error al guardar formulario'});

        if(!MEME_C18Stored) return res.status(404).send({message: 'El formulario no ha sido guardado'});
        
        return res.status(200).send({MEME_C18: MEME_C18Stored});

    });
}

//Conseguir datos
function getMEMEC18(req, res){
    var memeC18Id = req.params.id;

    memeC18.findById(memeC18Id, (err, memeC18)=>{
        if(err)
        return res.status(500).send({message: 'Error en la peticion'})

        if(!memeC18) return res.status(404).send({message: 'El formulario no existe'});

        return res.status(200).send({memeC18});
    });
}

//Actualizacion de datos

function updateMEMEC18(req, res){
    var memeC18Id = req.params.id;
    var update = req.body;

        memeC18.findByIdAndUpdate(memeC18Id, update, {new:true}, (err, memeC18Updated) => {
            if(err) return res.status(500).send({message: 'Error en la peticion'});
    
            if(!memeC18Updated) return res.status(404).send({message: 'No se ha podido actualizar el usuario'});
    
            return res.status(200).send({memeC18: memeC18Updated});
        });
}

module.exports = {
    saveMemeC18,
    getMEMEC18,
    updateMEMEC18
}
