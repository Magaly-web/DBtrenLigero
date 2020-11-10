'use strict'

var express = require('express');//carga express
var mmmaM47Controller = require('../../../controllers/SMM/mayor/MMMA_M47');//carga el file de los controladores de usuario

var api = express.Router();//se llama al metodo router para tener acceso a los metodos get, post, delete, put, etc.
var md_auth = require('../../../middlewares/authenticated');

var multipart = require('connect-multiparty');   

api.post('/mmmaM47-save', mmmaM47Controller.saveMmmaM47);
api.get('/mmmaM47/:id', mmmaM47Controller.getMMMAM47);
api.put('/update-mmmaM47/:id', md_auth.ensureAuth, mmmaM47Controller.updateMMMAM47);

module.exports = api;//exporta el api