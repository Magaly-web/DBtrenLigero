'use strict'

var express = require('express');//carga express
var mmmeC14_1Controller = require('../../../../../controllers/SMM/fichasMantenimiento/SGMM/ciclico/MMME_C14_1');//carga el file de los controladores de usuario

var api = express.Router();//se llama al metodo router para tener acceso a los metodos get, post, delete, put, etc.
var md_auth = require('../../../../../middlewares/authenticated');

var multipart = require('connect-multiparty');   

api.post('/mmmeC14_1-save', mmmeC14_1Controller.saveMmmeC14_1);
api.get('/mmmeC14_1/:id', mmmeC14_1Controller.getMMMEC14_1);
api.put('/update-mmmeC14_1/:id', md_auth.ensureAuth, mmmeC14_1Controller.updateMMMEC14_1);

module.exports = api;//exporta el api