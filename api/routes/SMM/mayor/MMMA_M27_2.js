'use strict'

var express = require('express');//carga express
var mmmaM27_2Controller = require('../../../controllers/SMM/mayor/MMMA_M27_2');//carga el file de los controladores de usuario

var api = express.Router();//se llama al metodo router para tener acceso a los metodos get, post, delete, put, etc.
var md_auth = require('../../../middlewares/authenticated');

var multipart = require('connect-multiparty');   

api.post('/mmmaM27_2-save', mmmaM27_2Controller.saveMmmaM27_2);
api.get('/mmmaM27_2/:id', mmmaM27_2Controller.getMMMAM27_2);
api.put('/update-mmmaM27_2/:id', md_auth.ensureAuth, mmmaM27_2Controller.updateMMMAM27_2);

module.exports = api;//exporta el api