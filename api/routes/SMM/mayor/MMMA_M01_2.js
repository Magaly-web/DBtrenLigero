'use strict'

var express = require('express');//carga express
var mmmaM01_2Controller = require('../../../controllers/SMM/mayor/MMMA_M01_2');//carga el file de los controladores de usuario

var api = express.Router();//se llama al metodo router para tener acceso a los metodos get, post, delete, put, etc.
var md_auth = require('../../../middlewares/authenticated');

var multipart = require('connect-multiparty');   

api.post('/mmmaM01_2-save', mmmaM01_2Controller.saveMmmaM01_2);
api.get('/mmmaM01_2/:id', mmmaM01_2Controller.getMMMAM01_2);
api.put('/update-mmmaM01_2/:id', md_auth.ensureAuth, mmmaM01_2Controller.updateMMMAM01_2);

module.exports = api;//exporta el api