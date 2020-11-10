'use strict'

var express = require('express');//carga express
var mmmaM39_2Controller = require('../../../controllers/SMM/mayor/MMMA_M39_2');//carga el file de los controladores de usuario

var api = express.Router();//se llama al metodo router para tener acceso a los metodos get, post, delete, put, etc.
var md_auth = require('../../../middlewares/authenticated');

var multipart = require('connect-multiparty');   

api.post('/mmmaM39_2-save', mmmaM39_2Controller.saveMmmaM39_2);
api.get('/mmmaM39_2/:id', mmmaM39_2Controller.getMMMAM39_2);
api.put('/update-mmmaM39_2/:id', md_auth.ensureAuth, mmmaM39_2Controller.updateMMMAM39_2);

module.exports = api;//exporta el api