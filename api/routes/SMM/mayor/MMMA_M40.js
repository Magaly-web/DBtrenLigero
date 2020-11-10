'use strict'

var express = require('express');//carga express
var mmmaM40Controller = require('../../../controllers/SMM/mayor/MMMA_M40');//carga el file de los controladores de usuario

var api = express.Router();//se llama al metodo router para tener acceso a los metodos get, post, delete, put, etc.
var md_auth = require('../../../middlewares/authenticated');

var multipart = require('connect-multiparty');   

api.post('/mmmaM40-save', mmmaM40Controller.saveMmmaM40);
api.get('/mmmaM40/:id', mmmaM40Controller.getMMMAM40);
api.put('/update-mmmaM40/:id', md_auth.ensureAuth, mmmaM40Controller.updateMMMAM40);

module.exports = api;//exporta el api