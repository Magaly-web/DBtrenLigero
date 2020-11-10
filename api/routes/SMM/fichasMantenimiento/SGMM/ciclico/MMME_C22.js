'use strict'

var express = require('express');//carga express
var mmmeC22Controller = require('../../../../../controllers/SMM/fichasMantenimiento/SGMM/ciclico/MMME_C22');//carga el file de los controladores de usuario

var api = express.Router();//se llama al metodo router para tener acceso a los metodos get, post, delete, put, etc.
var md_auth = require('../../../../../middlewares/authenticated');

var multipart = require('connect-multiparty');   

api.post('/mmmeC22-save', mmmeC22Controller.saveMmmeC22);
api.get('/mmmeC22/:id', mmmeC22Controller.getMMMEC22);
api.put('/update-mmmeC22/:id', md_auth.ensureAuth, mmmeC22Controller.updateMMMEC22);

module.exports = api;//exporta el api