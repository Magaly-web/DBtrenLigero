'use strict'

var express = require('express');//carga express
var mmmaM35Controller = require('../../../controllers/SMM/mayor/MMMA_M35');//carga el file de los controladores de usuario

var api = express.Router();//se llama al metodo router para tener acceso a los metodos get, post, delete, put, etc.
var md_auth = require('../../../middlewares/authenticated');

var multipart = require('connect-multiparty');   

api.post('/mmmaM35-save', mmmaM35Controller.saveMmmaM35);
api.get('/mmmaM35/:id', mmmaM35Controller.getMMMAM35);
api.put('/update-mmmaM35/:id', md_auth.ensureAuth, mmmaM35Controller.updateMMMAM35);

module.exports = api;//exporta el api