'use strict'

var express = require('express');//carga express
var mmmaM18_13Controller = require('../../../controllers/SMM/mayor/MMMA_M18_13');//carga el file de los controladores de usuario

var api = express.Router();//se llama al metodo router para tener acceso a los metodos get, post, delete, put, etc.
var md_auth = require('../../../middlewares/authenticated');

var multipart = require('connect-multiparty');   

api.post('/mmmaM18_13-save', mmmaM18_13Controller.saveMmmaM18_13);
api.get('/mmmaM18_13/:id', mmmaM18_13Controller.getMMMAM18_13);
api.put('/update-mmmaM18_13/:id', md_auth.ensureAuth, mmmaM18_13Controller.updateMMMAM18_13);

module.exports = api;//exporta el api