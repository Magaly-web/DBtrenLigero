'use strict'

var express = require('express');//carga express
var mmmaM02Controller = require('../../../controllers/SMM/mayor/MMMA_M02');//carga el file de los controladores de usuario

var api = express.Router();//se llama al metodo router para tener acceso a los metodos get, post, delete, put, etc.
var md_auth = require('../../../middlewares/authenticated');

var multipart = require('connect-multiparty');   

api.post('/mmmaM02-save', mmmaM02Controller.saveMmmaM02);
api.get('/mmmaM02/:id', mmmaM02Controller.getMMMAM02);
api.put('/update-mmmaM02/:id', md_auth.ensureAuth, mmmaM02Controller.updateMMMAM02);

module.exports = api;//exporta el api