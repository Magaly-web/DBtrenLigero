'use strict'

var express = require('express');//carga express
var mmmaM25Controller = require('../../../controllers/SMM/mayor/MMMA_M25');//carga el file de los controladores de usuario

var api = express.Router();//se llama al metodo router para tener acceso a los metodos get, post, delete, put, etc.
var md_auth = require('../../../middlewares/authenticated');

var multipart = require('connect-multiparty');   

api.post('/mmmaM25-save', mmmaM25Controller.saveMmmaM25);
api.get('/mmmaM25/:id', mmmaM25Controller.getMMMAM25);
api.put('/update-mmmaM25/:id', md_auth.ensureAuth, mmmaM25Controller.updateMMMAM25);

module.exports = api;//exporta el api