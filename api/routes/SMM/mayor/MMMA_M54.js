'use strict'

var express = require('express');//carga express
var mmmaM54Controller = require('../../../controllers/SMM/mayor/MMMA_M54');//carga el file de los controladores de usuario

var api = express.Router();//se llama al metodo router para tener acceso a los metodos get, post, delete, put, etc.
var md_auth = require('../../../middlewares/authenticated');

var multipart = require('connect-multiparty');   

api.post('/mmmaM54-save', mmmaM54Controller.saveMmmaM54);
api.get('/mmmaM54/:id', mmmaM54Controller.getMMMAM54);
api.put('/update-mmmaM54/:id', md_auth.ensureAuth, mmmaM54Controller.updateMMMAM54);

module.exports = api;//exporta el api