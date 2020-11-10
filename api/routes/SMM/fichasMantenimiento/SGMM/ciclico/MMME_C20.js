'use strict'

var express = require('express');//carga express
var mmmeC20Controller = require('../../../../../controllers/SMM/fichasMantenimiento/SGMM/ciclico/MMME_C20');//carga el file de los controladores de usuario

var api = express.Router();//se llama al metodo router para tener acceso a los metodos get, post, delete, put, etc.
var md_auth = require('../../../../../middlewares/authenticated');

var multipart = require('connect-multiparty');   

api.post('/mmmeC20-save', mmmeC20Controller.saveMmmeC20);
api.get('/mmmeC20/:id', mmmeC20Controller.getMMMEC20);
api.put('/update-mmmeC20/:id', md_auth.ensureAuth, mmmeC20Controller.updateMMMEC20);

module.exports = api;//exporta el api