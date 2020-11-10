'use strict'

var express = require('express');//carga express
var mmmaM11Controller = require('../../../controllers/SMM/mayor/MMMA_M11');//carga el file de los controladores de usuario

var api = express.Router();//se llama al metodo router para tener acceso a los metodos get, post, delete, put, etc.
var md_auth = require('../../../middlewares/authenticated');

var multipart = require('connect-multiparty');   

api.post('/mmmaM11-save', mmmaM11Controller.saveMmmaM11);
api.get('/mmmaM11/:id', mmmaM11Controller.getMMMAM11);
api.put('/update-mmmaM11/:id', md_auth.ensureAuth, mmmaM11Controller.updateMMMAM11);

module.exports = api;//exporta el api