'use strict'

var express = require('express');//carga express
var mmmeC06Controller = require('../../../../../controllers/SMM/fichasMantenimiento/SGMM/ciclico/MMME_C06');//carga el file de los controladores de usuario

var api = express.Router();//se llama al metodo router para tener acceso a los metodos get, post, delete, put, etc.
var md_auth = require('../../../../../middlewares/authenticated');

var multipart = require('connect-multiparty');   

api.post('/mmmeC06-save', mmmeC06Controller.saveMmmeC06);
api.get('/mmmeC06/:id', mmmeC06Controller.getMMMEC06);
api.put('/update-mmmeC06/:id', md_auth.ensureAuth, mmmeC06Controller.updateMMMEC06);

module.exports = api;//exporta el api