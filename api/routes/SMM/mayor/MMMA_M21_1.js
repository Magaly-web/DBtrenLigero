'use strict'

var express = require('express');//carga express
var mmmaM21_1Controller = require('../../../controllers/SMM/mayor/MMMA_M21_1');//carga el file de los controladores de usuario

var api = express.Router();//se llama al metodo router para tener acceso a los metodos get, post, delete, put, etc.
var md_auth = require('../../../middlewares/authenticated');

var multipart = require('connect-multiparty');   

api.post('/mmmaM21_1-save', mmmaM21_1Controller.saveMmmaM21_1);
api.get('/mmmaM21_1/:id', mmmaM21_1Controller.getMMMAM21_1);
api.put('/update-mmmaM21_1/:id', md_auth.ensureAuth, mmmaM21_1Controller.updateMMMAM21_1);

module.exports = api;//exporta el api