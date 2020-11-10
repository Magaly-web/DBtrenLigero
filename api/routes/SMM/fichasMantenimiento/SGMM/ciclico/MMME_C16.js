'use strict'

var express = require('express');//carga express
var mmmeC16Controller = require('../../../../../controllers/SMM/fichasMantenimiento/SGMM/ciclico/MMME_C16');//carga el file de los controladores de usuario

var api = express.Router();//se llama al metodo router para tener acceso a los metodos get, post, delete, put, etc.
var md_auth = require('../../../../../middlewares/authenticated');

var multipart = require('connect-multiparty');   

api.post('/mmmeC16-save', mmmeC16Controller.saveMmmeC16);
api.get('/mmmeC16/:id', mmmeC16Controller.getMMMEC16);
api.put('/update-mmmeC16/:id', md_auth.ensureAuth, mmmeC16Controller.updateMMMEC16);

module.exports = api;//exporta el api