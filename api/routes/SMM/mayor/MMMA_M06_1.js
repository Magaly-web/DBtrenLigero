'use strict'

var express = require('express');//carga express
var mmmaM06_1Controller = require('../../../controllers/SMM/mayor/MMMA_M06_1');//carga el file de los controladores de usuario

var api = express.Router();//se llama al metodo router para tener acceso a los metodos get, post, delete, put, etc.
var md_auth = require('../../../middlewares/authenticated');

var multipart = require('connect-multiparty');   

api.post('/mmmaM06_1-save', mmmaM06_1Controller.saveMmmaM06_1);
api.get('/mmmaM06_1/:id', mmmaM06_1Controller.getMMMAM06_1);
api.put('/update-mmmaM06_1/:id', md_auth.ensureAuth, mmmaM06_1Controller.updateMMMAM06_1);

module.exports = api;//exporta el api