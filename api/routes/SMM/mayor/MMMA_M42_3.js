'use strict'

var express = require('express');//carga express
var mmmaM42_3Controller = require('../../../controllers/SMM/mayor/MMMA_M42_3');//carga el file de los controladores de usuario

var api = express.Router();//se llama al metodo router para tener acceso a los metodos get, post, delete, put, etc.
var md_auth = require('../../../middlewares/authenticated');

var multipart = require('connect-multiparty');   

api.post('/mmmaM42_3-save', mmmaM42_3Controller.saveMmmaM42_3);
api.get('/mmmaM42_3/:id', mmmaM42_3Controller.getMMMAM42_3);
api.put('/update-mmmaM42_3/:id', md_auth.ensureAuth, mmmaM42_3Controller.updateMMMAM42_3);

module.exports = api;//exporta el api