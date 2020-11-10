'use strict'

var express = require('express');//carga express
var mmmeC19Controller = require('../../../../../controllers/SMM/fichasMantenimiento/SGMM/ciclico/MMME_C19');//carga el file de los controladores de usuario

var api = express.Router();//se llama al metodo router para tener acceso a los metodos get, post, delete, put, etc.
var md_auth = require('../../../../../middlewares/authenticated');

var multipart = require('connect-multiparty');   

api.post('/mmmeC19-save', mmmeC19Controller.saveMmmeC19);
api.get('/mmmeC19/:id', mmmeC19Controller.getMMMEC19);
api.put('/update-mmmeC19/:id', md_auth.ensureAuth, mmmeC19Controller.updateMMMEC19);

module.exports = api;//exporta el api