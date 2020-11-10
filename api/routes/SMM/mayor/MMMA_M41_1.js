'use strict'

var express = require('express');//carga express
var mmmaM41_1Controller = require('../../../controllers/SMM/mayor/MMMA_M41_1');//carga el file de los controladores de usuario

var api = express.Router();//se llama al metodo router para tener acceso a los metodos get, post, delete, put, etc.
var md_auth = require('../../../middlewares/authenticated');

var multipart = require('connect-multiparty');   

api.post('/mmmaM41_1-save', mmmaM41_1Controller.saveMmmaM41_1);
api.get('/mmmaM41_1/:id', mmmaM41_1Controller.getMMMAM41_1);
api.put('/update-mmmaM41_1/:id', md_auth.ensureAuth, mmmaM41_1Controller.updateMMMAM41_1);

module.exports = api;//exporta el api