'use strict'

var express = require('express');//carga express
var mmmaM18_1Controller = require('../../../controllers/SMM/mayor/MMMA_M18_1');//carga el file de los controladores de usuario

var api = express.Router();//se llama al metodo router para tener acceso a los metodos get, post, delete, put, etc.
var md_auth = require('../../../middlewares/authenticated');

var multipart = require('connect-multiparty');   

api.post('/mmmaM18_1-save', mmmaM18_1Controller.saveMmmaM18_1);
api.get('/mmmaM18_1/:id', mmmaM18_1Controller.getMMMAM18_1);
api.put('/update-mmmaM18_1/:id', md_auth.ensureAuth, mmmaM18_1Controller.updateMMMAM18_1);

module.exports = api;//exporta el api