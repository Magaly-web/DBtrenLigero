'use strict'

var express = require('express');//carga express
var mmmaM18_8Controller = require('../../../controllers/SMM/mayor/MMMA_M18_8');//carga el file de los controladores de usuario

var api = express.Router();//se llama al metodo router para tener acceso a los metodos get, post, delete, put, etc.
var md_auth = require('../../../middlewares/authenticated');

var multipart = require('connect-multiparty');   

api.post('/mmmaM18_8-save', mmmaM18_8Controller.saveMmmaM18_8);
api.get('/mmmaM18_8/:id', mmmaM18_8Controller.getMMMAM18_8);
api.put('/update-mmmaM18_8/:id', md_auth.ensureAuth, mmmaM18_8Controller.updateMMMAM18_8);

module.exports = api;//exporta el api