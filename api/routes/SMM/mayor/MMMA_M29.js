'use strict'

var express = require('express');//carga express
var mmmaM29Controller = require('../../../controllers/SMM/mayor/MMMA_M29');//carga el file de los controladores de usuario

var api = express.Router();//se llama al metodo router para tener acceso a los metodos get, post, delete, put, etc.
var md_auth = require('../../../middlewares/authenticated');

var multipart = require('connect-multiparty');   

api.post('/mmmaM29-save', mmmaM29Controller.saveMmmaM29);
api.get('/mmmaM29/:id', mmmaM29Controller.getMMMAM29);
api.put('/update-mmmaM29/:id', md_auth.ensureAuth, mmmaM29Controller.updateMMMAM29);

module.exports = api;//exporta el api