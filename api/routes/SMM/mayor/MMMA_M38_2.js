'use strict'

var express = require('express');//carga express
var mmmaM38_2Controller = require('../../../controllers/SMM/mayor/MMMA_M38_2');//carga el file de los controladores de usuario

var api = express.Router();//se llama al metodo router para tener acceso a los metodos get, post, delete, put, etc.
var md_auth = require('../../../middlewares/authenticated');

var multipart = require('connect-multiparty');   

api.post('/mmmaM38_2-save', mmmaM38_2Controller.saveMmmaM38_2);
api.get('/mmmaM38_2/:id', mmmaM38_2Controller.getMMMAM38_2);
api.put('/update-mmmaM38_2/:id', md_auth.ensureAuth, mmmaM38_2Controller.updateMMMAM38_2);

module.exports = api;//exporta el api