'use strict'

var express = require('express');//carga express
var mmmeC14_2Controller = require('../../../../../controllers/SMM/fichasMantenimiento/SGMM/ciclico/MMME_C14_2');//carga el file de los controladores de usuario

var api = express.Router();//se llama al metodo router para tener acceso a los metodos get, post, delete, put, etc.
var md_auth = require('../../../../../middlewares/authenticated');

var multipart = require('connect-multiparty');   

api.post('/mmmeC14_2-save', mmmeC14_2Controller.saveMmmeC14_2);
api.get('/mmmeC14_2/:id', mmmeC14_2Controller.getMMMEC14_2);
api.put('/update-mmmeC14_2/:id', md_auth.ensureAuth, mmmeC14_2Controller.updateMMMEC14_2);

module.exports = api;//exporta el api