'use strict'

var express = require('express');//carga express
var mmmaM36_2Controller = require('../../../controllers/SMM/mayor/MMMA_M36_2');//carga el file de los controladores de usuario

var api = express.Router();//se llama al metodo router para tener acceso a los metodos get, post, delete, put, etc.
var md_auth = require('../../../middlewares/authenticated');

var multipart = require('connect-multiparty');   

api.post('/mmmaM36_2-save', mmmaM36_2Controller.saveMmmaM36_2);
api.get('/mmmaM36_2/:id', mmmaM36_2Controller.getMMMAM36_2);
api.put('/update-mmmaM36_2/:id', md_auth.ensureAuth, mmmaM36_2Controller.updateMMMAM36_2);

module.exports = api;//exporta el api