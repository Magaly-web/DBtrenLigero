'use strict'

var express = require('express');//carga express
var mmmaM36_1Controller = require('../../../controllers/SMM/mayor/MMMA_M36_1');//carga el file de los controladores de usuario

var api = express.Router();//se llama al metodo router para tener acceso a los metodos get, post, delete, put, etc.
var md_auth = require('../../../middlewares/authenticated');

var multipart = require('connect-multiparty');   

api.post('/mmmaM36_1-save', mmmaM36_1Controller.saveMmmaM36_1);
api.get('/mmmaM36_1/:id', mmmaM36_1Controller.getMMMAM36_1);
api.put('/update-mmmaM36_1/:id', md_auth.ensureAuth, mmmaM36_1Controller.updateMMMAM36_1);

module.exports = api;//exporta el api