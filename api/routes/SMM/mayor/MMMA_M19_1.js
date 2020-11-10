'use strict'

var express = require('express');//carga express
var mmmaM19_1Controller = require('../../../controllers/SMM/mayor/MMMA_M19_1');//carga el file de los controladores de usuario

var api = express.Router();//se llama al metodo router para tener acceso a los metodos get, post, delete, put, etc.
var md_auth = require('../../../middlewares/authenticated');

var multipart = require('connect-multiparty');   

api.post('/mmmaM19_1-save', mmmaM19_1Controller.saveMmmaM19_1);
api.get('/mmmaM19_1/:id', mmmaM19_1Controller.getMMMAM19_1);
api.put('/update-mmmaM19_1/:id', md_auth.ensureAuth, mmmaM19_1Controller.updateMMMAM19_1);

module.exports = api;//exporta el api