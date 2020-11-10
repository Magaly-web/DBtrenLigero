'use strict'

var express = require('express');//carga express
var mmmeC03Controller = require('../../../../../controllers/SMM/fichasMantenimiento/SGMM/ciclico/MMME_C03');//carga el file de los controladores de usuario

var api = express.Router();//se llama al metodo router para tener acceso a los metodos get, post, delete, put, etc.
var md_auth = require('../../../../../middlewares/authenticated');

var multipart = require('connect-multiparty');   

api.post('/mmmeC03-save', mmmeC03Controller.saveMmmeC03);
api.get('/mmmeC03/:id', mmmeC03Controller.getMMMEC03);
api.put('/update-mmmeC03/:id', md_auth.ensureAuth, mmmeC03Controller.updateMMMEC03);

module.exports = api;//exporta el api