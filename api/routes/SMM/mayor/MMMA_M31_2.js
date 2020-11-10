'use strict'

var express = require('express');//carga express
var mmmaM31_2Controller = require('../../../controllers/SMM/mayor/MMMA_M31_2');//carga el file de los controladores de usuario

var api = express.Router();//se llama al metodo router para tener acceso a los metodos get, post, delete, put, etc.
var md_auth = require('../../../middlewares/authenticated');

var multipart = require('connect-multiparty');   

api.post('/mmmaM31_2-save', mmmaM31_2Controller.saveMmmaM31_2);
api.get('/mmmaM31_2/:id', mmmaM31_2Controller.getMMMAM31_2);
api.put('/update-mmmaM31_2/:id', md_auth.ensureAuth, mmmaM31_2Controller.updateMMMAM31_2);

module.exports = api;//exporta el api