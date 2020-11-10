'use strict'

var express = require('express');//carga express
var mmmeC13Controller = require('../../../../../controllers/SMM/fichasMantenimiento/SGMM/ciclico/MMME_C13');//carga el file de los controladores de usuario

var api = express.Router();//se llama al metodo router para tener acceso a los metodos get, post, delete, put, etc.
var md_auth = require('../../../../../middlewares/authenticated');

var multipart = require('connect-multiparty');   

api.post('/mmmeC13-save', mmmeC13Controller.saveMmmeC13);
api.get('/mmmeC13/:id', mmmeC13Controller.getMMMEC13);
api.put('/update-mmmeC13/:id', md_auth.ensureAuth, mmmeC13Controller.updateMMMEC13);

module.exports = api;//exporta el api