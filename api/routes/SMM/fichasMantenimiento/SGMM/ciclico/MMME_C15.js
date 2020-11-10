'use strict'

var express = require('express');//carga express
var mmmeC15Controller = require('../../../../../controllers/SMM/fichasMantenimiento/SGMM/ciclico/MMME_C15');//carga el file de los controladores de usuario

var api = express.Router();//se llama al metodo router para tener acceso a los metodos get, post, delete, put, etc.
var md_auth = require('../../../../../middlewares/authenticated');

var multipart = require('connect-multiparty');   

api.post('/mmmeC15-save', mmmeC15Controller.saveMmmeC15);
api.get('/mmmeC15/:id', mmmeC15Controller.getMMMEC15);
api.put('/update-mmmeC15/:id', md_auth.ensureAuth, mmmeC15Controller.updateMMMEC15);

module.exports = api;//exporta el api