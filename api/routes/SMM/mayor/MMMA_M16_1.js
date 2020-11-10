'use strict'

var express = require('express');//carga express
var mmmaM16_1Controller = require('../../../controllers/SMM/mayor/MMMA_M16_1');//carga el file de los controladores de usuario

var api = express.Router();//se llama al metodo router para tener acceso a los metodos get, post, delete, put, etc.
var md_auth = require('../../../middlewares/authenticated');

var multipart = require('connect-multiparty');   

api.post('/mmmaM16_1-save', mmmaM16_1Controller.saveMmmaM16_1);
api.get('/mmmaM16_1/:id', mmmaM16_1Controller.getMMMAM16_1);
api.put('/update-mmmaM16_1/:id', md_auth.ensureAuth, mmmaM16_1Controller.updateMMMAM16_1);

module.exports = api;//exporta el api