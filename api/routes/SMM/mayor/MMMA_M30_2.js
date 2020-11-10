'use strict'

var express = require('express');//carga express
var mmmaM30_2Controller = require('../../../controllers/SMM/mayor/MMMA_M30_2');//carga el file de los controladores de usuario

var api = express.Router();//se llama al metodo router para tener acceso a los metodos get, post, delete, put, etc.
var md_auth = require('../../../middlewares/authenticated');

var multipart = require('connect-multiparty');   

api.post('/mmmaM30_2-save', mmmaM30_2Controller.saveMmmaM30_2);
api.get('/mmmaM30_2/:id', mmmaM30_2Controller.getMMMAM30_2);
api.put('/update-mmmaM30_2/:id', md_auth.ensureAuth, mmmaM30_2Controller.updateMMMAM30_2);

module.exports = api;//exporta el api