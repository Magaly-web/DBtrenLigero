'use strict'

var express = require('express');//carga express
var mmmaM18_2Controller = require('../../../controllers/SMM/mayor/MMMA_M18_2');//carga el file de los controladores de usuario

var api = express.Router();//se llama al metodo router para tener acceso a los metodos get, post, delete, put, etc.
var md_auth = require('../../../middlewares/authenticated');

var multipart = require('connect-multiparty');   

api.post('/mmmaM18_2-save', mmmaM18_2Controller.saveMmmaM18_2);
api.get('/mmmaM18_2/:id', mmmaM18_2Controller.getMMMAM18_2);
api.put('/update-mmmaM18_2/:id', md_auth.ensureAuth, mmmaM18_2Controller.updateMMMAM18_2);

module.exports = api;//exporta el api