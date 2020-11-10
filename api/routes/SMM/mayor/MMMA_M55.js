'use strict'

var express = require('express');//carga express
var mmmaM55Controller = require('../../../controllers/SMM/mayor/MMMA_M55');//carga el file de los controladores de usuario

var api = express.Router();//se llama al metodo router para tener acceso a los metodos get, post, delete, put, etc.
var md_auth = require('../../../middlewares/authenticated');

var multipart = require('connect-multiparty');   

api.post('/mmmaM55-save', mmmaM55Controller.saveMmmaM55);
api.get('/mmmaM55/:id', mmmaM55Controller.getMMMAM55);
api.put('/update-mmmaM55/:id', md_auth.ensureAuth, mmmaM55Controller.updateMMMAM55);

module.exports = api;//exporta el api