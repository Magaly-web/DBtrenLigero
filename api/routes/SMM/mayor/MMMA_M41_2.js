'use strict'

var express = require('express');//carga express
var mmmaM41_2Controller = require('../../../controllers/SMM/mayor/MMMA_M41_2');//carga el file de los controladores de usuario

var api = express.Router();//se llama al metodo router para tener acceso a los metodos get, post, delete, put, etc.
var md_auth = require('../../../middlewares/authenticated');

var multipart = require('connect-multiparty');   

api.post('/mmmaM41_2-save', mmmaM41_2Controller.saveMmmaM41_2);
api.get('/mmmaM41_2/:id', mmmaM41_2Controller.getMMMAM41_2);
api.put('/update-mmmaM41_2/:id', md_auth.ensureAuth, mmmaM41_2Controller.updateMMMAM41_2);

module.exports = api;//exporta el api