'use strict'

var express = require('express');//carga express
var mmmaM21_2Controller = require('../../../controllers/SMM/mayor/MMMA_M21_2');//carga el file de los controladores de usuario

var api = express.Router();//se llama al metodo router para tener acceso a los metodos get, post, delete, put, etc.
var md_auth = require('../../../middlewares/authenticated');

var multipart = require('connect-multiparty');   

api.post('/mmmaM21_2-save', mmmaM21_2Controller.saveMmmaM21_2);
api.get('/mmmaM21_2/:id', mmmaM21_2Controller.getMMMAM21_2);
api.put('/update-mmmaM21_2/:id', md_auth.ensureAuth, mmmaM21_2Controller.updateMMMAM21_2);

module.exports = api;//exporta el api