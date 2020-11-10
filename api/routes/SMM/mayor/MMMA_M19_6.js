'use strict'

var express = require('express');//carga express
var mmmaM19_6Controller = require('../../../controllers/SMM/mayor/MMMA_M19_6');//carga el file de los controladores de usuario

var api = express.Router();//se llama al metodo router para tener acceso a los metodos get, post, delete, put, etc.
var md_auth = require('../../../middlewares/authenticated');

var multipart = require('connect-multiparty');   

api.post('/mmmaM19_6-save', mmmaM19_6Controller.saveMmmaM19_6);
api.get('/mmmaM19_6/:id', mmmaM19_6Controller.getMMMAM19_6);
api.put('/update-mmmaM19_6/:id', md_auth.ensureAuth, mmmaM19_6Controller.updateMMMAM19_6);

module.exports = api;//exporta el api