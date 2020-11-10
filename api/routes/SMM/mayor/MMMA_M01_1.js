'use strict'

var express = require('express');//carga express
var mmmaM01_1Controller = require('../../../controllers/SMM/mayor/MMMA_M01_1');//carga el file de los controladores de usuario

var api = express.Router();//se llama al metodo router para tener acceso a los metodos get, post, delete, put, etc.
var md_auth = require('../../../middlewares/authenticated');

var multipart = require('connect-multiparty');   

api.post('/mmmaM01_1-save', mmmaM01_1Controller.saveMmmaM01_1);
api.get('/mmmaM01_1/:id', mmmaM01_1Controller.getMMMAM01_1);
api.put('/update-mmmaM01_1/:id', md_auth.ensureAuth, mmmaM01_1Controller.updateMMMAM01_1);

module.exports = api;//exporta el api