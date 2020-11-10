'use strict'

var express = require('express');//carga express
var mmmeC01Controller = require('../../../../../controllers/SMM/fichasMantenimiento/SGMM/ciclico/MMME_C01');//carga el file de los controladores de usuario

var api = express.Router();//se llama al metodo router para tener acceso a los metodos get, post, delete, put, etc.
var md_auth = require('../../../../../middlewares/authenticated');

var multipart = require('connect-multiparty');   

api.post('/mmmeC01-save', mmmeC01Controller.saveMmmeC01);
api.get('/mmmeC01/:id', mmmeC01Controller.getMMMEC01);
api.put('/update-mmmeC01/:id', md_auth.ensureAuth, mmmeC01Controller.updateMMMEC01);

module.exports = api;//exporta el api