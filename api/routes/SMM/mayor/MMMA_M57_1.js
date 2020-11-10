'use strict'

var express = require('express');//carga express
var mmmaM57_1Controller = require('../../../controllers/SMM/mayor/MMMA_M57_1');//carga el file de los controladores de usuario

var api = express.Router();//se llama al metodo router para tener acceso a los metodos get, post, delete, put, etc.
var md_auth = require('../../../middlewares/authenticated');

var multipart = require('connect-multiparty');   

api.post('/mmmaM57_1-save', mmmaM57_1Controller.saveMmmaM57_1);
api.get('/mmmaM57_1/:id', mmmaM57_1Controller.getMMMAM57_1);
api.put('/update-mmmaM57_1/:id', md_auth.ensureAuth, mmmaM57_1Controller.updateMMMAM57_1);

module.exports = api;//exporta el api