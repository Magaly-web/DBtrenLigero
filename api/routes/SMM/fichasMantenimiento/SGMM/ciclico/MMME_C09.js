'use strict'

var express = require('express');//carga express
var mmmeC09Controller = require('../../../../../controllers/SMM/fichasMantenimiento/SGMM/ciclico/MMME_C09');//carga el file de los controladores de usuario

var api = express.Router();//se llama al metodo router para tener acceso a los metodos get, post, delete, put, etc.
var md_auth = require('../../../../../middlewares/authenticated');

var multipart = require('connect-multiparty');   

api.post('/mmmeC09-save', mmmeC09Controller.saveMmmeC09);
api.get('/mmmeC09/:id', mmmeC09Controller.getMMMEC09);
api.put('/update-mmmeC09/:id', md_auth.ensureAuth, mmmeC09Controller.updateMMMEC09);

module.exports = api;//exporta el api