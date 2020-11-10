'use strict'

var express = require('express');//carga express
var mmmaM18_7Controller = require('../../../controllers/SMM/mayor/MMMA_M18_7');//carga el file de los controladores de usuario

var api = express.Router();//se llama al metodo router para tener acceso a los metodos get, post, delete, put, etc.
var md_auth = require('../../../middlewares/authenticated');

var multipart = require('connect-multiparty');   

api.post('/mmmaM18_7-save', mmmaM18_7Controller.saveMmmaM18_7);
api.get('/mmmaM18_7/:id', mmmaM18_7Controller.getMMMAM18_7);
api.put('/update-mmmaM18_7/:id', md_auth.ensureAuth, mmmaM18_7Controller.updateMMMAM18_7);

module.exports = api;//exporta el api