'use strict'

var express = require('express');//carga express
var mmmaM07_1Controller = require('../../../controllers/SMM/mayor/MMMA_M07_1');//carga el file de los controladores de usuario

var api = express.Router();//se llama al metodo router para tener acceso a los metodos get, post, delete, put, etc.
var md_auth = require('../../../middlewares/authenticated');

var multipart = require('connect-multiparty');   

api.post('/mmmaM07_1-save', mmmaM07_1Controller.saveMmmaM07_1);
api.get('/mmmaM07_1/:id', mmmaM07_1Controller.getMMMAM07_1);
api.put('/update-mmmaM07_1/:id', md_auth.ensureAuth, mmmaM07_1Controller.updateMMMAM07_1);

module.exports = api;//exporta el api