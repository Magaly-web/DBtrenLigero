'use strict'

var express = require('express');//carga express
var mmmaM37_2Controller = require('../../../controllers/SMM/mayor/MMMA_M37_2');//carga el file de los controladores de usuario

var api = express.Router();//se llama al metodo router para tener acceso a los metodos get, post, delete, put, etc.
var md_auth = require('../../../middlewares/authenticated');

var multipart = require('connect-multiparty');   

api.post('/mmmaM37_2-save', mmmaM37_2Controller.saveMmmaM37_2);
api.get('/mmmaM37_2/:id', mmmaM37_2Controller.getMMMAM37_2);
api.put('/update-mmmaM37_2/:id', md_auth.ensureAuth, mmmaM37_2Controller.updateMMMAM37_2);

module.exports = api;//exporta el api