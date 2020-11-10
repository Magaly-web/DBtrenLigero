'use strict'

var express = require('express');//carga express
var mmmaM01_3Controller = require('../../../controllers/SMM/mayor/MMMA_M01_3');//carga el file de los controladores de usuario

var api = express.Router();//se llama al metodo router para tener acceso a los metodos get, post, delete, put, etc.
var md_auth = require('../../../middlewares/authenticated');

var multipart = require('connect-multiparty');   

api.post('/mmmaM01_3-save', mmmaM01_3Controller.saveMmmaM01_3);
api.get('/mmmaM01_3/:id', mmmaM01_3Controller.getMMMAM01_3);
api.put('/update-mmmaM01_3/:id', md_auth.ensureAuth, mmmaM01_3Controller.updateMMMAM01_3);

module.exports = api;//exporta el api