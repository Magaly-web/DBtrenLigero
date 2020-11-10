'use strict'

var express = require('express');//carga express
var mmmaM30_1Controller = require('../../../controllers/SMM/mayor/MMMA_M30_1');//carga el file de los controladores de usuario

var api = express.Router();//se llama al metodo router para tener acceso a los metodos get, post, delete, put, etc.
var md_auth = require('../../../middlewares/authenticated');

var multipart = require('connect-multiparty');   

api.post('/mmmaM30_1-save', mmmaM30_1Controller.saveMmmaM30_1);
api.get('/mmmaM30_1/:id', mmmaM30_1Controller.getMMMAM30_1);
api.put('/update-mmmaM30_1/:id', md_auth.ensureAuth, mmmaM30_1Controller.updateMMMAM30_1);

module.exports = api;//exporta el api