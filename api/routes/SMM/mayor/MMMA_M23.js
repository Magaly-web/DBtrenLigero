'use strict'

var express = require('express');//carga express
var mmmaM23Controller = require('../../../controllers/SMM/mayor/MMMA_M23');//carga el file de los controladores de usuario

var api = express.Router();//se llama al metodo router para tener acceso a los metodos get, post, delete, put, etc.
var md_auth = require('../../../middlewares/authenticated');

var multipart = require('connect-multiparty');   

api.post('/mmmaM23-save', mmmaM23Controller.saveMmmaM23);
api.get('/mmmaM23/:id', mmmaM23Controller.getMMMAM23);
api.put('/update-mmmaM23/:id', md_auth.ensureAuth, mmmaM23Controller.updateMMMAM23);

module.exports = api;//exporta el api