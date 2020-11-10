'use strict'

var express = require('express');//carga express
var memeC01Controller = require('../../../../../controllers/SMM/fichasMantenimiento/fichasElectricoMantenimiento/ciclico/MEME_C01');//carga el file de los controladores de usuario

var api = express.Router();//se llama al metodo router para tener acceso a los metodos get, post, delete, put, etc.
var md_auth = require('../../../../../middlewares/authenticated');

var multipart = require('connect-multiparty');   

api.post('/memeC01-save', memeC01Controller.saveMemeC01);
api.get('/memeC01/:id', memeC01Controller.getMEMEC01);
api.put('/update-memeC01/:id', md_auth.ensureAuth, memeC01Controller.updateMEMEC01);

module.exports = api;//exporta el api