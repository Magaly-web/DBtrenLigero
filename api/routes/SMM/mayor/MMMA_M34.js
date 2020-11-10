'use strict'

var express = require('express');//carga express
var mmmaM34Controller = require('../../../controllers/SMM/mayor/MMMA_M34');//carga el file de los controladores de usuario

var api = express.Router();//se llama al metodo router para tener acceso a los metodos get, post, delete, put, etc.
var md_auth = require('../../../middlewares/authenticated');

var multipart = require('connect-multiparty');   

api.post('/mmmaM34-save', mmmaM34Controller.saveMmmaM34);
api.get('/mmmaM34/:id', mmmaM34Controller.getMMMAM34);
api.put('/update-mmmaM34/:id', md_auth.ensureAuth, mmmaM34Controller.updateMMMAM34);

module.exports = api;//exporta el api