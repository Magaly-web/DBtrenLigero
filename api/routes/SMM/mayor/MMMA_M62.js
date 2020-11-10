'use strict'

var express = require('express');//carga express
var mmmaM62Controller = require('../../../controllers/SMM/mayor/MMMA_M62');//carga el file de los controladores de usuario

var api = express.Router();//se llama al metodo router para tener acceso a los metodos get, post, delete, put, etc.
var md_auth = require('../../../middlewares/authenticated');

var multipart = require('connect-multiparty');   

api.post('/mmmaM62-save', mmmaM62Controller.saveMmmaM62);
api.get('/mmmaM62/:id', mmmaM62Controller.getMMMAM62);
api.put('/update-mmmaM62/:id', md_auth.ensureAuth, mmmaM62Controller.updateMMMAM62);

module.exports = api;//exporta el api