'use strict'

var express = require('express');//carga express
var mmmaM64_1Controller = require('../../../controllers/SMM/mayor/MMMA_M64_1');//carga el file de los controladores de usuario

var api = express.Router();//se llama al metodo router para tener acceso a los metodos get, post, delete, put, etc.
var md_auth = require('../../../middlewares/authenticated');

var multipart = require('connect-multiparty');   

api.post('/mmmaM64_1-save', mmmaM64_1Controller.saveMmmaM64_1);
api.get('/mmmaM64_1/:id', mmmaM64_1Controller.getMMMAM64_1);
api.put('/update-mmmaM64_1/:id', md_auth.ensureAuth, mmmaM64_1Controller.updateMMMAM64_1);

module.exports = api;//exporta el api