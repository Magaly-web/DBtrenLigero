'use strict'

var express = require('express');//carga express
var mmmaM32Controller = require('../../../controllers/SMM/mayor/MMMA_M32');//carga el file de los controladores de usuario

var api = express.Router();//se llama al metodo router para tener acceso a los metodos get, post, delete, put, etc.
var md_auth = require('../../../middlewares/authenticated');

var multipart = require('connect-multiparty');   

api.post('/mmmaM32-save', mmmaM32Controller.saveMmmaM32);
api.get('/mmmaM32/:id', mmmaM32Controller.getMMMAM32);
api.put('/update-mmmaM32/:id', md_auth.ensureAuth, mmmaM32Controller.updateMMMAM32);

module.exports = api;//exporta el api