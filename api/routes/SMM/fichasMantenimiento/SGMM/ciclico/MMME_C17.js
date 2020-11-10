'use strict'

var express = require('express');//carga express
var mmmeC17Controller = require('../../../../../controllers/SMM/fichasMantenimiento/SGMM/ciclico/MMME_C17');//carga el file de los controladores de usuario

var api = express.Router();//se llama al metodo router para tener acceso a los metodos get, post, delete, put, etc.
var md_auth = require('../../../../../middlewares/authenticated');

var multipart = require('connect-multiparty');   

api.post('/mmmeC17-save', mmmeC17Controller.saveMmmeC17);
api.get('/mmmeC17/:id', mmmeC17Controller.getMMMEC17);
api.put('/update-mmmeC17/:id', md_auth.ensureAuth, mmmeC17Controller.updateMMMEC17);

module.exports = api;//exporta el api