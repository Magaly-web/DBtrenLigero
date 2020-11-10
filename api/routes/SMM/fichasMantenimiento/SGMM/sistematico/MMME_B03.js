'use strict'

var express = require('express');//carga express
var mmmeB03Controller = require('../../../../../controllers/SMM/fichasMantenimiento/SGMM/sistematico/MMME_B03');//carga el file de los controladores de usuario

var api = express.Router();//se llama al metodo router para tener acceso a los metodos get, post, delete, put, etc.
var md_auth = require('../../../../../middlewares/authenticated');

var multipart = require('connect-multiparty');   

api.post('/mmmeB03-save', mmmeB03Controller.saveMmmeB03);
api.get('/mmmeB03/:id', mmmeB03Controller.getMMMEB03);
api.put('/update-mmmeB03/:id', md_auth.ensureAuth, mmmeB03Controller.updateMMMEB03);

module.exports = api;//exporta el api