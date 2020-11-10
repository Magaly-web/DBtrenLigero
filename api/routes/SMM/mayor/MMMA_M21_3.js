'use strict'

var express = require('express');//carga express
var mmmaM21_3Controller = require('../../../controllers/SMM/mayor/MMMA_M21_3');//carga el file de los controladores de usuario

var api = express.Router();//se llama al metodo router para tener acceso a los metodos get, post, delete, put, etc.
var md_auth = require('../../../middlewares/authenticated');

var multipart = require('connect-multiparty');   

api.post('/mmmaM21_3-save', mmmaM21_3Controller.saveMmmaM21_3);
api.get('/mmmaM21_3/:id', mmmaM21_3Controller.getMMMAM21_3);
api.put('/update-mmmaM21_3/:id', md_auth.ensureAuth, mmmaM21_3Controller.updateMMMAM21_3);

module.exports = api;//exporta el api