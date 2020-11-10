'use strict'

var express = require('express');//carga express
var mmmaM64_2Controller = require('../../../controllers/SMM/mayor/MMMA_M64_2');//carga el file de los controladores de usuario

var api = express.Router();//se llama al metodo router para tener acceso a los metodos get, post, delete, put, etc.
var md_auth = require('../../../middlewares/authenticated');

var multipart = require('connect-multiparty');   

api.post('/mmmaM64_2-save', mmmaM64_2Controller.saveMmmaM64_2);
api.get('/mmmaM64_2/:id', mmmaM64_2Controller.getMMMAM64_2);
api.put('/update-mmmaM64_2/:id', md_auth.ensureAuth, mmmaM64_2Controller.updateMMMAM64_2);

module.exports = api;//exporta el api