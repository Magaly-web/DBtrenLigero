'use strict'

var express = require('express');//carga express
var mmmeC07Controller = require('../../../../../controllers/SMM/fichasMantenimiento/SGMM/ciclico/MMME_C07');//carga el file de los controladores de usuario

var api = express.Router();//se llama al metodo router para tener acceso a los metodos get, post, delete, put, etc.
var md_auth = require('../../../../../middlewares/authenticated');

var multipart = require('connect-multiparty');   

api.post('/mmmeC07-save', mmmeC07Controller.saveMmmeC07);
api.get('/mmmeC07/:id', mmmeC07Controller.getMMMEC07);
api.put('/update-mmmeC07/:id', md_auth.ensureAuth, mmmeC07Controller.updateMMMEC07);

module.exports = api;//exporta el api