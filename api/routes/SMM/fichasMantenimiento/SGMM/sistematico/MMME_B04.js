'use strict'

var express = require('express');//carga express
var mmmeB04Controller = require('../../../../../controllers/SMM/fichasMantenimiento/SGMM/sistematico/MMME_B04');//carga el file de los controladores de usuario

var api = express.Router();//se llama al metodo router para tener acceso a los metodos get, post, delete, put, etc.
var md_auth = require('../../../../../middlewares/authenticated');

var multipart = require('connect-multiparty');   

api.post('/mmmeB04-save', mmmeB04Controller.saveMmmeB04);
api.get('/mmmeB04/:id', mmmeB04Controller.getMMMEB04);
api.put('/update-mmmeB04/:id', md_auth.ensureAuth, mmmeB04Controller.updateMMMEB04);

module.exports = api;//exporta el api