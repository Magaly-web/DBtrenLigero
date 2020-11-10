'use strict'

var express = require('express');//carga express
var mmmaM52Controller = require('../../../controllers/SMM/mayor/MMMA_M52');//carga el file de los controladores de usuario

var api = express.Router();//se llama al metodo router para tener acceso a los metodos get, post, delete, put, etc.
var md_auth = require('../../../middlewares/authenticated');

var multipart = require('connect-multiparty');   

api.post('/mmmaM52-save', mmmaM52Controller.saveMmmaM52);
api.get('/mmmaM52/:id', mmmaM52Controller.getMMMAM52);
api.put('/update-mmmaM52/:id', md_auth.ensureAuth, mmmaM52Controller.updateMMMAM52);

module.exports = api;//exporta el api