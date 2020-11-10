'use strict'

var express = require('express');//carga express
var mmmaM18_10Controller = require('../../../controllers/SMM/mayor/MMMA_M18_10');//carga el file de los controladores de usuario

var api = express.Router();//se llama al metodo router para tener acceso a los metodos get, post, delete, put, etc.
var md_auth = require('../../../middlewares/authenticated');

var multipart = require('connect-multiparty');   

api.post('/mmmaM18_10-save', mmmaM18_10Controller.saveMmmaM18_10);
api.get('/mmmaM18_10/:id', mmmaM18_10Controller.getMMMAM18_10);
api.put('/update-mmmaM18_10/:id', md_auth.ensureAuth, mmmaM18_10Controller.updateMMMAM18_10);

module.exports = api;//exporta el api