'use strict'

var express = require('express');//carga express
var mmmaM19_8Controller = require('../../../controllers/SMM/mayor/MMMA_M19_8');//carga el file de los controladores de usuario

var api = express.Router();//se llama al metodo router para tener acceso a los metodos get, post, delete, put, etc.
var md_auth = require('../../../middlewares/authenticated');

var multipart = require('connect-multiparty');   

api.post('/mmmaM19_8-save', mmmaM19_8Controller.saveMmmaM19_8);
api.get('/mmmaM19_8/:id', mmmaM19_8Controller.getMMMAM19_8);
api.put('/update-mmmaM19_8/:id', md_auth.ensureAuth, mmmaM19_8Controller.updateMMMAM19_8);

module.exports = api;//exporta el api