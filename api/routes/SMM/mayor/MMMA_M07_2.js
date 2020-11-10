'use strict'

var express = require('express');//carga express
var mmmaM07_2Controller = require('../../../controllers/SMM/mayor/MMMA_M07_2');//carga el file de los controladores de usuario

var api = express.Router();//se llama al metodo router para tener acceso a los metodos get, post, delete, put, etc.
var md_auth = require('../../../middlewares/authenticated');

var multipart = require('connect-multiparty');   

api.post('/mmmaM07_2-save', mmmaM07_2Controller.saveMmmaM07_2);
api.get('/mmmaM07_2/:id', mmmaM07_2Controller.getMMMAM07_2);
api.put('/update-mmmaM07_2/:id', md_auth.ensureAuth, mmmaM07_2Controller.updateMMMAM07_2);

module.exports = api;//exporta el api