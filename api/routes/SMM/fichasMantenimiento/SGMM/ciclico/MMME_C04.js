'use strict'

var express = require('express');//carga express
var mmmeC04Controller = require('../../../../../controllers/SMM/fichasMantenimiento/SGMM/ciclico/MMME_C04');//carga el file de los controladores de usuario

var api = express.Router();//se llama al metodo router para tener acceso a los metodos get, post, delete, put, etc.
var md_auth = require('../../../../../middlewares/authenticated');

var multipart = require('connect-multiparty');   

api.post('/mmmeC04-save', mmmeC04Controller.saveMmmeC04);
api.get('/mmmeC04/:id', mmmeC04Controller.getMMMEC04);
api.put('/update-mmmeC04/:id', md_auth.ensureAuth, mmmeC04Controller.updateMMMEC04);

module.exports = api;//exporta el api