'use strict'

var express = require('express');//carga express
var mmmaM37_1Controller = require('../../../controllers/SMM/mayor/MMMA_M37_1');//carga el file de los controladores de usuario

var api = express.Router();//se llama al metodo router para tener acceso a los metodos get, post, delete, put, etc.
var md_auth = require('../../../middlewares/authenticated');

var multipart = require('connect-multiparty');   

api.post('/mmmaM37_1-save', mmmaM37_1Controller.saveMmmaM37_1);
api.get('/mmmaM37_1/:id', mmmaM37_1Controller.getMMMAM37_1);
api.put('/update-mmmaM37_1/:id', md_auth.ensureAuth, mmmaM37_1Controller.updateMMMAM37_1);

module.exports = api;//exporta el api