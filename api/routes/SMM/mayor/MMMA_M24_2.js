'use strict'

var express = require('express');//carga express
var mmmaM24_2Controller = require('../../../controllers/SMM/mayor/MMMA_M24_2');//carga el file de los controladores de usuario

var api = express.Router();//se llama al metodo router para tener acceso a los metodos get, post, delete, put, etc.
var md_auth = require('../../../middlewares/authenticated');

var multipart = require('connect-multiparty');   

api.post('/mmmaM24_2-save', mmmaM24_2Controller.saveMmmaM24_2);
api.get('/mmmaM24_2/:id', mmmaM24_2Controller.getMMMAM24_2);
api.put('/update-mmmaM24_2/:id', md_auth.ensureAuth, mmmaM24_2Controller.updateMMMAM24_2);

module.exports = api;//exporta el api