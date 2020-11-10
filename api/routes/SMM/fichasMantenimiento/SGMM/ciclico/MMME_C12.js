'use strict'

var express = require('express');//carga express
var mmmeC12Controller = require('../../../../../controllers/SMM/fichasMantenimiento/SGMM/ciclico/MMME_C12');//carga el file de los controladores de usuario

var api = express.Router();//se llama al metodo router para tener acceso a los metodos get, post, delete, put, etc.
var md_auth = require('../../../../../middlewares/authenticated');

var multipart = require('connect-multiparty');   

api.post('/mmmeC12-save', mmmeC12Controller.saveMmmeC12);
api.get('/mmmeC12/:id', mmmeC12Controller.getMMMEC12);
api.put('/update-mmmeC12/:id', md_auth.ensureAuth, mmmeC12Controller.updateMMMEC12);

module.exports = api;//exporta el api