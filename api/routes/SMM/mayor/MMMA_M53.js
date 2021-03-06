'use strict'

var express = require('express');//carga express
var mmmaM53Controller = require('../../../controllers/SMM/mayor/MMMA_M53');//carga el file de los controladores de usuario

var api = express.Router();//se llama al metodo router para tener acceso a los metodos get, post, delete, put, etc.
var md_auth = require('../../../middlewares/authenticated');

var multipart = require('connect-multiparty');   

api.post('/mmmaM53-save', mmmaM53Controller.saveMmmaM53);
api.get('/mmmaM53/:id', mmmaM53Controller.getMMMAM53);
api.put('/update-mmmaM53/:id', md_auth.ensureAuth, mmmaM53Controller.updateMMMAM53);

module.exports = api;//exporta el api