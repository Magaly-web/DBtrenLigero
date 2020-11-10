'use strict'

var express = require('express');//carga express
var mmmaM57_2Controller = require('../../../controllers/SMM/mayor/MMMA_M57_2');//carga el file de los controladores de usuario

var api = express.Router();//se llama al metodo router para tener acceso a los metodos get, post, delete, put, etc.
var md_auth = require('../../../middlewares/authenticated');

var multipart = require('connect-multiparty');   

api.post('/mmmaM57_2-save', mmmaM57_2Controller.saveMmmaM57_2);
api.get('/mmmaM57_2/:id', mmmaM57_2Controller.getMMMAM57_2);
api.put('/update-mmmaM57_2/:id', md_auth.ensureAuth, mmmaM57_2Controller.updateMMMAM57_2);

module.exports = api;//exporta el api