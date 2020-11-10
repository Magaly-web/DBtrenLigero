'use strict'

var express = require('express');//carga express
var mmmaM22_2Controller = require('../../../controllers/SMM/mayor/MMMA_M22_2');//carga el file de los controladores de usuario

var api = express.Router();//se llama al metodo router para tener acceso a los metodos get, post, delete, put, etc.
var md_auth = require('../../../middlewares/authenticated');

var multipart = require('connect-multiparty');   

api.post('/mmmaM22_2-save', mmmaM22_2Controller.saveMmmaM22_2);
api.get('/mmmaM22_2/:id', mmmaM22_2Controller.getMMMAM22_2);
api.put('/update-mmmaM22_2/:id', md_auth.ensureAuth, mmmaM22_2Controller.updateMMMAM22_2);

module.exports = api;//exporta el api