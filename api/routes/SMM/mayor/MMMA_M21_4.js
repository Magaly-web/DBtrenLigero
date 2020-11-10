'use strict'

var express = require('express');//carga express
var mmmaM21_4Controller = require('../../../controllers/SMM/mayor/MMMA_M21_4');//carga el file de los controladores de usuario

var api = express.Router();//se llama al metodo router para tener acceso a los metodos get, post, delete, put, etc.
var md_auth = require('../../../middlewares/authenticated');

var multipart = require('connect-multiparty');   

api.post('/mmmaM21_4-save', mmmaM21_4Controller.saveMmmaM21_4);
api.get('/mmmaM21_4/:id', mmmaM21_4Controller.getMMMAM21_4);
api.put('/update-mmmaM21_4/:id', md_auth.ensureAuth, mmmaM21_4Controller.updateMMMAM21_4);

module.exports = api;//exporta el api