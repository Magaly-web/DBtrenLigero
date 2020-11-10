'use strict'

var express = require('express');//carga express
var mmmaM39_3Controller = require('../../../controllers/SMM/mayor/MMMA_M39_3');//carga el file de los controladores de usuario

var api = express.Router();//se llama al metodo router para tener acceso a los metodos get, post, delete, put, etc.
var md_auth = require('../../../middlewares/authenticated');

var multipart = require('connect-multiparty');   

api.post('/mmmaM39_3-save', mmmaM39_3Controller.saveMmmaM39_3);
api.get('/mmmaM39_3/:id', mmmaM39_3Controller.getMMMAM39_3);
api.put('/update-mmmaM39_3/:id', md_auth.ensureAuth, mmmaM39_3Controller.updateMMMAM39_3);

module.exports = api;//exporta el api