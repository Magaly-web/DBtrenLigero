'use strict'

var express = require('express');//carga express
var mmmaM42_2Controller = require('../../../controllers/SMM/mayor/MMMA_M42_2');//carga el file de los controladores de usuario

var api = express.Router();//se llama al metodo router para tener acceso a los metodos get, post, delete, put, etc.
var md_auth = require('../../../middlewares/authenticated');

var multipart = require('connect-multiparty');   

api.post('/mmmaM42_2-save', mmmaM42_2Controller.saveMmmaM42_2);
api.get('/mmmaM42_2/:id', mmmaM42_2Controller.getMMMAM42_2);
api.put('/update-mmmaM42_2/:id', md_auth.ensureAuth, mmmaM42_2Controller.updateMMMAM42_2);

module.exports = api;//exporta el api