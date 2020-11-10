'use strict'

var express = require('express');//carga express
var mmmaM14_1Controller = require('../../../controllers/SMM/mayor/MMMA_M14_1');//carga el file de los controladores de usuario

var api = express.Router();//se llama al metodo router para tener acceso a los metodos get, post, delete, put, etc.
var md_auth = require('../../../middlewares/authenticated');

var multipart = require('connect-multiparty');   

api.post('/mmmaM14_1-save', mmmaM14_1Controller.saveMmmaM14_1);
api.get('/mmmaM14_1/:id', mmmaM14_1Controller.getMMMAM14_1);
api.put('/update-mmmaM14_1/:id', md_auth.ensureAuth, mmmaM14_1Controller.updateMMMAM14_1);

module.exports = api;//exporta el api