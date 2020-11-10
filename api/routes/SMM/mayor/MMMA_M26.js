'use strict'

var express = require('express');//carga express
var mmmaM26Controller = require('../../../controllers/SMM/mayor/MMMA_M26');//carga el file de los controladores de usuario

var api = express.Router();//se llama al metodo router para tener acceso a los metodos get, post, delete, put, etc.
var md_auth = require('../../../middlewares/authenticated');

var multipart = require('connect-multiparty');   

api.post('/mmmaM26-save', mmmaM26Controller.saveMmmaM26);
api.get('/mmmaM26/:id', mmmaM26Controller.getMMMAM26);
api.put('/update-mmmaM26/:id', md_auth.ensureAuth, mmmaM26Controller.updateMMMAM26);

module.exports = api;//exporta el api