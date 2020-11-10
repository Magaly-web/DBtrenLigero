'use strict'

var express = require('express');//carga express
var mmmaM16_2Controller = require('../../../controllers/SMM/mayor/MMMA_M16_2');//carga el file de los controladores de usuario

var api = express.Router();//se llama al metodo router para tener acceso a los metodos get, post, delete, put, etc.
var md_auth = require('../../../middlewares/authenticated');

var multipart = require('connect-multiparty');   

api.post('/mmmaM16_2-save', mmmaM16_2Controller.saveMmmaM16_2);
api.get('/mmmaM16_2/:id', mmmaM16_2Controller.getMMMAM16_2);
api.put('/update-mmmaM16_2/:id', md_auth.ensureAuth, mmmaM16_2Controller.updateMMMAM16_2);

module.exports = api;//exporta el api