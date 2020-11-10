'use strict'

var express = require('express');//carga express
var mmmeC10Controller = require('../../../../../controllers/SMM/fichasMantenimiento/SGMM/ciclico/MMME_C10');//carga el file de los controladores de usuario

var api = express.Router();//se llama al metodo router para tener acceso a los metodos get, post, delete, put, etc.
var md_auth = require('../../../../../middlewares/authenticated');

var multipart = require('connect-multiparty');   

api.post('/mmmeC10-save', mmmeC10Controller.saveMmmeC10);
api.get('/mmmeC10/:id', mmmeC10Controller.getMMMEC10);
api.put('/update-mmmeC10/:id', md_auth.ensureAuth, mmmeC10Controller.updateMMMEC10);

module.exports = api;//exporta el api