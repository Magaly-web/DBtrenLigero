'use strict'

var express = require('express');//carga express
var mmmaM14_2Controller = require('../../../controllers/SMM/mayor/MMMA_M14_2');//carga el file de los controladores de usuario

var api = express.Router();//se llama al metodo router para tener acceso a los metodos get, post, delete, put, etc.
var md_auth = require('../../../middlewares/authenticated');

var multipart = require('connect-multiparty');   

api.post('/mmmaM14_2-save', mmmaM14_2Controller.saveMmmaM14_2);
api.get('/mmmaM14_2/:id', mmmaM14_2Controller.getMMMAM14_2);
api.put('/update-mmmaM14_2/:id', md_auth.ensureAuth, mmmaM14_2Controller.updateMMMAM14_2);

module.exports = api;//exporta el api