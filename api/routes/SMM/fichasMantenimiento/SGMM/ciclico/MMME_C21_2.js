'use strict'

var express = require('express');//carga express
var mmmeC21_2Controller = require('../../../../../controllers/SMM/fichasMantenimiento/SGMM/ciclico/MMME_C21_2');//carga el file de los controladores de usuario

var api = express.Router();//se llama al metodo router para tener acceso a los metodos get, post, delete, put, etc.
var md_auth = require('../../../../../middlewares/authenticated');

var multipart = require('connect-multiparty');   

api.post('/mmmeC21_2-save', mmmeC21_2Controller.saveMmmeC21_2);
api.get('/mmmeC21_2/:id', mmmeC21_2Controller.getMMMEC21_2);
api.put('/update-mmmeC21_2/:id', md_auth.ensureAuth, mmmeC21_2Controller.updateMMMEC21_2);

module.exports = api;//exporta el api