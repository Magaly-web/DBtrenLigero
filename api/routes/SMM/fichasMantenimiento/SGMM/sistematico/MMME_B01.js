'use strict'

var express = require('express');//carga express
var mmmeB01Controller = require('../../../../../controllers/SMM/fichasMantenimiento/SGMM/sistematico/MMME_B01');//carga el file de los controladores de usuario

var api = express.Router();//se llama al metodo router para tener acceso a los metodos get, post, delete, put, etc.
var md_auth = require('../../../../../middlewares/authenticated');

var multipart = require('connect-multiparty');   

api.post('/mmmeB01-save', mmmeB01Controller.saveMmmeB01);
api.get('/mmmeB01/:id', mmmeB01Controller.getMMMEB01);
api.put('/update-mmmeB01/:id', md_auth.ensureAuth, mmmeB01Controller.updateMMMEB01);

module.exports = api;//exporta el api