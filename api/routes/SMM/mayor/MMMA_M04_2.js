'use strict'

var express = require('express');//carga express
var mmmaM04_2Controller = require('../../../controllers/SMM/mayor/MMMA_M04_2');//carga el file de los controladores de usuario

var api = express.Router();//se llama al metodo router para tener acceso a los metodos get, post, delete, put, etc.
var md_auth = require('../../../middlewares/authenticated');

var multipart = require('connect-multiparty');   

api.post('/mmmaM04_2-save', mmmaM04_2Controller.saveMmmaM04_2);
api.get('/mmmaM04_2/:id', mmmaM04_2Controller.getMMMAM04_2);
api.put('/update-mmmaM04_2/:id', md_auth.ensureAuth, mmmaM04_2Controller.updateMMMAM04_2);

module.exports = api;//exporta el api