'use strict'

var express = require('express');//carga express
var mmmaM14_3Controller = require('../../../controllers/SMM/mayor/MMMA_M14_3');//carga el file de los controladores de usuario

var api = express.Router();//se llama al metodo router para tener acceso a los metodos get, post, delete, put, etc.
var md_auth = require('../../../middlewares/authenticated');

var multipart = require('connect-multiparty');   

api.post('/mmmaM14_3-save', mmmaM14_3Controller.saveMmmaM14_3);
api.get('/mmmaM14_3/:id', mmmaM14_3Controller.getMMMAM14_3);
api.put('/update-mmmaM14_3/:id', md_auth.ensureAuth, mmmaM14_3Controller.updateMMMAM14_3);

module.exports = api;//exporta el api