'use strict'

var express = require('express');//carga express
var mmmeC08Controller = require('../../../../../controllers/SMM/fichasMantenimiento/SGMM/ciclico/MMME_C08');//carga el file de los controladores de usuario

var api = express.Router();//se llama al metodo router para tener acceso a los metodos get, post, delete, put, etc.
var md_auth = require('../../../../../middlewares/authenticated');

var multipart = require('connect-multiparty');   

api.post('/mmmeC08-save', mmmeC08Controller.saveMmmeC08);
api.get('/mmmeC08/:id', mmmeC08Controller.getMMMEC08);
api.put('/update-mmmeC08/:id', md_auth.ensureAuth, mmmeC08Controller.updateMMMEC08);

module.exports = api;//exporta el api