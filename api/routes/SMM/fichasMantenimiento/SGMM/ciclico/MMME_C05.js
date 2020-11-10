'use strict'

var express = require('express');//carga express
var mmmeC05Controller = require('../../../../../controllers/SMM/fichasMantenimiento/SGMM/ciclico/MMME_C05');//carga el file de los controladores de usuario

var api = express.Router();//se llama al metodo router para tener acceso a los metodos get, post, delete, put, etc.
var md_auth = require('../../../../../middlewares/authenticated');

var multipart = require('connect-multiparty');   

api.post('/mmmeC05-save', mmmeC05Controller.saveMmmeC05);
api.get('/mmmeC05/:id', mmmeC05Controller.getMMMEC05);
api.put('/update-mmmeC05/:id', md_auth.ensureAuth, mmmeC05Controller.updateMMMEC05);

module.exports = api;//exporta el api