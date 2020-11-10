'use strict'

var express = require('express');//carga express
var mmmaM31_1Controller = require('../../../controllers/SMM/mayor/MMMA_M31_1');//carga el file de los controladores de usuario

var api = express.Router();//se llama al metodo router para tener acceso a los metodos get, post, delete, put, etc.
var md_auth = require('../../../middlewares/authenticated');

var multipart = require('connect-multiparty');   

api.post('/mmmaM31_1-save', mmmaM31_1Controller.saveMmmaM31_1);
api.get('/mmmaM31_1/:id', mmmaM31_1Controller.getMMMAM31_1);
api.put('/update-mmmaM31_1/:id', md_auth.ensureAuth, mmmaM31_1Controller.updateMMMAM31_1);

module.exports = api;//exporta el api