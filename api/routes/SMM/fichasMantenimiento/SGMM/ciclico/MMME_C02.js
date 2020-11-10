'use strict'

var express = require('express');//carga express
var mmmeC02Controller = require('../../../../../controllers/SMM/fichasMantenimiento/SGMM/ciclico/MMME_C02');//carga el file de los controladores de usuario

var api = express.Router();//se llama al metodo router para tener acceso a los metodos get, post, delete, put, etc.
var md_auth = require('../../../../../middlewares/authenticated');

var multipart = require('connect-multiparty');   

api.post('/mmmeC02-save', mmmeC02Controller.saveMmmeC02);
api.get('/mmmeC02/:id', mmmeC02Controller.getMMMEC02);
api.put('/update-mmmeC02/:id', md_auth.ensureAuth, mmmeC02Controller.updateMMMEC02);

module.exports = api;//exporta el api