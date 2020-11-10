'use strict'

var express = require('express');//carga express
var mmmaM58Controller = require('../../../controllers/SMM/mayor/MMMA_M58');//carga el file de los controladores de usuario

var api = express.Router();//se llama al metodo router para tener acceso a los metodos get, post, delete, put, etc.
var md_auth = require('../../../middlewares/authenticated');

var multipart = require('connect-multiparty');   

api.post('/mmmaM58-save', mmmaM58Controller.saveMmmaM58);
api.get('/mmmaM58/:id', mmmaM58Controller.getMMMAM58);
api.put('/update-mmmaM58/:id', md_auth.ensureAuth, mmmaM58Controller.updateMMMAM58);

module.exports = api;//exporta el api