'use strict'

var express = require('express');//carga express
var mmmaM10Controller = require('../../../controllers/SMM/mayor/MMMA_M10');//carga el file de los controladores de usuario

var api = express.Router();//se llama al metodo router para tener acceso a los metodos get, post, delete, put, etc.
var md_auth = require('../../../middlewares/authenticated');

var multipart = require('connect-multiparty');   

api.post('/mmmaM10-save', mmmaM10Controller.saveMmmaM10);
api.get('/mmmaM10/:id', mmmaM10Controller.getMMMAM10);
api.put('/update-mmmaM10/:id', md_auth.ensureAuth, mmmaM10Controller.updateMMMAM10);

module.exports = api;//exporta el api