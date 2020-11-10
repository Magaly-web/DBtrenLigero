'use strict'

var express = require('express');//carga express
var mmmaM38_1Controller = require('../../../controllers/SMM/mayor/MMMA_M38_1');//carga el file de los controladores de usuario

var api = express.Router();//se llama al metodo router para tener acceso a los metodos get, post, delete, put, etc.
var md_auth = require('../../../middlewares/authenticated');

var multipart = require('connect-multiparty');   

api.post('/mmmaM38_1-save', mmmaM38_1Controller.saveMmmaM38_1);
api.get('/mmmaM38_1/:id', mmmaM38_1Controller.getMMMAM38_1);
api.put('/update-mmmaM38_1/:id', md_auth.ensureAuth, mmmaM38_1Controller.updateMMMAM38_1);

module.exports = api;//exporta el api