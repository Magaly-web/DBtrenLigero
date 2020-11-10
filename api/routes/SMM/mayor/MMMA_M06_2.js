'use strict'

var express = require('express');//carga express
var mmmaM06_2Controller = require('../../../controllers/SMM/mayor/MMMA_M06_2');//carga el file de los controladores de usuario

var api = express.Router();//se llama al metodo router para tener acceso a los metodos get, post, delete, put, etc.
var md_auth = require('../../../middlewares/authenticated');

var multipart = require('connect-multiparty');   

api.post('/mmmaM06_2-save', mmmaM06_2Controller.saveMmmaM06_2);
api.get('/mmmaM06_2/:id', mmmaM06_2Controller.getMMMAM06_2);
api.put('/update-mmmaM06_2/:id', md_auth.ensureAuth, mmmaM06_2Controller.updateMMMAM06_2);

module.exports = api;//exporta el api