'use strict'

var express = require('express');//carga express
var mmmaM18_3Controller = require('../../../controllers/SMM/mayor/MMMA_M18_3');//carga el file de los controladores de usuario

var api = express.Router();//se llama al metodo router para tener acceso a los metodos get, post, delete, put, etc.
var md_auth = require('../../../middlewares/authenticated');

var multipart = require('connect-multiparty');   

api.post('/mmmaM18_3-save', mmmaM18_3Controller.saveMmmaM18_3);
api.get('/mmmaM18_3/:id', mmmaM18_3Controller.getMMMAM18_3);
api.put('/update-mmmaM18_3/:id', md_auth.ensureAuth, mmmaM18_3Controller.updateMMMAM18_3);

module.exports = api;//exporta el api