'use strict'

var express = require('express');//carga express
var mmmaM04_1Controller = require('../../../controllers/SMM/mayor/MMMA_M04_1');//carga el file de los controladores de usuario

var api = express.Router();//se llama al metodo router para tener acceso a los metodos get, post, delete, put, etc.
var md_auth = require('../../../middlewares/authenticated');

var multipart = require('connect-multiparty');   

api.post('/mmmaM04_1-save', mmmaM04_1Controller.saveMmmaM04_1);
api.get('/mmmaM04_1/:id', mmmaM04_1Controller.getMMMAM04_1);
api.put('/update-mmmaM04_1/:id', md_auth.ensureAuth, mmmaM04_1Controller.updateMMMAM04_1);

module.exports = api;//exporta el api