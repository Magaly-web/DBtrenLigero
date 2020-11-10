'use strict'

var express = require('express');//carga express
var mmmeC18Controller = require('../../../../../controllers/SMM/fichasMantenimiento/SGMM/ciclico/MMME_C18');//carga el file de los controladores de usuario

var api = express.Router();//se llama al metodo router para tener acceso a los metodos get, post, delete, put, etc.
var md_auth = require('../../../../../middlewares/authenticated');

var multipart = require('connect-multiparty');   

api.post('/mmmeC18-save', mmmeC18Controller.saveMmmeC18);
api.get('/mmmeC18/:id', mmmeC18Controller.getMMMEC18);
api.put('/update-mmmeC18/:id', md_auth.ensureAuth, mmmeC18Controller.updateMMMEC18);

module.exports = api;//exporta el api