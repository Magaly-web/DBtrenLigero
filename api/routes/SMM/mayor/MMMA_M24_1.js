'use strict'

var express = require('express');//carga express
var mmmaM24_1Controller = require('../../../controllers/SMM/mayor/MMMA_M24_1');//carga el file de los controladores de usuario

var api = express.Router();//se llama al metodo router para tener acceso a los metodos get, post, delete, put, etc.
var md_auth = require('../../../middlewares/authenticated');

var multipart = require('connect-multiparty');   

api.post('/mmmaM24_1-save', mmmaM24_1Controller.saveMmmaM24_1);
api.get('/mmmaM24_1/:id', mmmaM24_1Controller.getMMMAM24_1);
api.put('/update-mmmaM24_1/:id', md_auth.ensureAuth, mmmaM24_1Controller.updateMMMAM24_1);

module.exports = api;//exporta el api