'use strict'

var express = require('express');//carga express
var mmmaM46Controller = require('../../../controllers/SMM/mayor/MMMA_M46');//carga el file de los controladores de usuario

var api = express.Router();//se llama al metodo router para tener acceso a los metodos get, post, delete, put, etc.
var md_auth = require('../../../middlewares/authenticated');

var multipart = require('connect-multiparty');   

api.post('/mmmaM46-save', mmmaM46Controller.saveMmmaM46);
api.get('/mmmaM46/:id', mmmaM46Controller.getMMMAM46);
api.put('/update-mmmaM46/:id', md_auth.ensureAuth, mmmaM46Controller.updateMMMAM46);

module.exports = api;//exporta el api