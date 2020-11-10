'use strict'

var express = require('express');//carga express
var mmmeB02Controller = require('../../../../../controllers/SMM/fichasMantenimiento/SGMM/sistematico/MMME_B02');//carga el file de los controladores de usuario

var api = express.Router();//se llama al metodo router para tener acceso a los metodos get, post, delete, put, etc.
var md_auth = require('../../../../../middlewares/authenticated');

var multipart = require('connect-multiparty');   

api.post('/mmmeB02-save', mmmeB02Controller.saveMmmeB02);
api.get('/mmmeB02/:id', mmmeB02Controller.getMMMEB02);
api.put('/update-mmmeB02/:id', md_auth.ensureAuth, mmmeB02Controller.updateMMMEB02);

module.exports = api;//exporta el api