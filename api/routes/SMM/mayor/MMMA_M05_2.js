'use strict'

var express = require('express');//carga express
var mmmaM05_2Controller = require('../../../controllers/SMM/mayor/MMMA_M05_2');//carga el file de los controladores de usuario

var api = express.Router();//se llama al metodo router para tener acceso a los metodos get, post, delete, put, etc.
var md_auth = require('../../../middlewares/authenticated');

var multipart = require('connect-multiparty');   

api.post('/mmmaM05_2-save', mmmaM05_2Controller.saveMmmaM05_2);
api.get('/mmmaM05_2/:id', mmmaM05_2Controller.getMMMAM05_2);
api.put('/update-mmmaM05_2/:id', md_auth.ensureAuth, mmmaM05_2Controller.updateMMMAM05_2);

module.exports = api;//exporta el api