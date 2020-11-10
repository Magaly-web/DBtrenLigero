'use strict'

var express = require('express');//carga express
var mmmeC11Controller = require('../../../../../controllers/SMM/fichasMantenimiento/SGMM/ciclico/MMME_C11');//carga el file de los controladores de usuario

var api = express.Router();//se llama al metodo router para tener acceso a los metodos get, post, delete, put, etc.
var md_auth = require('../../../../../middlewares/authenticated');

var multipart = require('connect-multiparty');   

api.post('/mmmeC11-save', mmmeC11Controller.saveMmmeC11);
api.get('/mmmeC11/:id', mmmeC11Controller.getMMMEC11);
api.put('/update-mmmeC11/:id', md_auth.ensureAuth, mmmeC11Controller.updateMMMEC11);

module.exports = api;//exporta el api