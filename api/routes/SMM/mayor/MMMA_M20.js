'use strict'

var express = require('express');//carga express
var mmmaM20Controller = require('../../../controllers/SMM/mayor/MMMA_M20');//carga el file de los controladores de usuario

var api = express.Router();//se llama al metodo router para tener acceso a los metodos get, post, delete, put, etc.
var md_auth = require('../../../middlewares/authenticated');

var multipart = require('connect-multiparty');   

api.post('/mmmaM20-save', mmmaM20Controller.saveMmmaM20);
api.get('/mmmaM20/:id', mmmaM20Controller.getMMMAM20);
api.put('/update-mmmaM20/:id', md_auth.ensureAuth, mmmaM20Controller.updateMMMAM20);

module.exports = api;//exporta el api