'use strict'

var express = require('express');//carga express
var mmmeC21_1Controller = require('../../../../../controllers/SMM/fichasMantenimiento/SGMM/ciclico/MMME_C21_1');//carga el file de los controladores de usuario

var api = express.Router();//se llama al metodo router para tener acceso a los metodos get, post, delete, put, etc.
var md_auth = require('../../../../../middlewares/authenticated');

var multipart = require('connect-multiparty');   

api.post('/mmmeC21_1-save', mmmeC21_1Controller.saveMmmeC21_1);
api.get('/mmmeC21_1/:id', mmmeC21_1Controller.getMMMEC21_1);
api.put('/update-mmmeC21_1/:id', md_auth.ensureAuth, mmmeC21_1Controller.updateMMMEC21_1);

module.exports = api;//exporta el api