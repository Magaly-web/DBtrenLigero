'use strict'

var express = require('express');//carga express
var mmmaM19_2Controller = require('../../../controllers/SMM/mayor/MMMA_M19_2');//carga el file de los controladores de usuario

var api = express.Router();//se llama al metodo router para tener acceso a los metodos get, post, delete, put, etc.
var md_auth = require('../../../middlewares/authenticated');

var multipart = require('connect-multiparty');   

api.post('/mmmaM19_2-save', mmmaM19_2Controller.saveMmmaM19_2);
api.get('/mmmaM19_2/:id', mmmaM19_2Controller.getMMMAM19_2);
api.put('/update-mmmaM19_2/:id', md_auth.ensureAuth, mmmaM19_2Controller.updateMMMAM19_2);

module.exports = api;//exporta el api