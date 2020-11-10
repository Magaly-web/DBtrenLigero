'use strict'

var express = require('express');//carga express
var mmmaM19_7Controller = require('../../../controllers/SMM/mayor/MMMA_M19_7');//carga el file de los controladores de usuario

var api = express.Router();//se llama al metodo router para tener acceso a los metodos get, post, delete, put, etc.
var md_auth = require('../../../middlewares/authenticated');

var multipart = require('connect-multiparty');   

api.post('/mmmaM19_7-save', mmmaM19_7Controller.saveMmmaM19_7);
api.get('/mmmaM19_7/:id', mmmaM19_7Controller.getMMMAM19_7);
api.put('/update-mmmaM19_7/:id', md_auth.ensureAuth, mmmaM19_7Controller.updateMMMAM19_7);

module.exports = api;//exporta el api