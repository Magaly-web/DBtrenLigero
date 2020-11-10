'use strict'

var express = require('express');//carga express
var mmmaM18_12Controller = require('../../../controllers/SMM/mayor/MMMA_M18_12');//carga el file de los controladores de usuario

var api = express.Router();//se llama al metodo router para tener acceso a los metodos get, post, delete, put, etc.
var md_auth = require('../../../middlewares/authenticated');

var multipart = require('connect-multiparty');   

api.post('/mmmaM18_12-save', mmmaM18_12Controller.saveMmmaM18_12);
api.get('/mmmaM18_12/:id', mmmaM18_12Controller.getMMMAM18_12);
api.put('/update-mmmaM18_12/:id', md_auth.ensureAuth, mmmaM18_12Controller.updateMMMAM18_12);

module.exports = api;//exporta el api