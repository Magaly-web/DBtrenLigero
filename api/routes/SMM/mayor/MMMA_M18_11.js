'use strict'

var express = require('express');//carga express
var mmmaM18_11Controller = require('../../../controllers/SMM/mayor/MMMA_M18_11');//carga el file de los controladores de usuario

var api = express.Router();//se llama al metodo router para tener acceso a los metodos get, post, delete, put, etc.
var md_auth = require('../../../middlewares/authenticated');

var multipart = require('connect-multiparty');   

api.post('/mmmaM18_11-save', mmmaM18_11Controller.saveMmmaM18_11);
api.get('/mmmaM18_11/:id', mmmaM18_11Controller.getMMMAM18_11);
api.put('/update-mmmaM18_11/:id', md_auth.ensureAuth, mmmaM18_11Controller.updateMMMAM18_11);

module.exports = api;//exporta el api