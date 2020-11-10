'use strict'

var express = require('express');//carga express
var mmmaM56Controller = require('../../../controllers/SMM/mayor/MMMA_M56');//carga el file de los controladores de usuario

var api = express.Router();//se llama al metodo router para tener acceso a los metodos get, post, delete, put, etc.
var md_auth = require('../../../middlewares/authenticated');

var multipart = require('connect-multiparty');   

api.post('/mmmaM56-save', mmmaM56Controller.saveMmmaM56);
api.get('/mmmaM56/:id', mmmaM56Controller.getMMMAM56);
api.put('/update-mmmaM56/:id', md_auth.ensureAuth, mmmaM56Controller.updateMMMAM56);

module.exports = api;//exporta el api