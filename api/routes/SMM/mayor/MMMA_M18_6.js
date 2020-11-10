'use strict'

var express = require('express');//carga express
var mmmaM18_6Controller = require('../../../controllers/SMM/mayor/MMMA_M18_6');//carga el file de los controladores de usuario

var api = express.Router();//se llama al metodo router para tener acceso a los metodos get, post, delete, put, etc.
var md_auth = require('../../../middlewares/authenticated');

var multipart = require('connect-multiparty');   

api.post('/mmmaM18_6-save', mmmaM18_6Controller.saveMmmaM18_6);
api.get('/mmmaM18_6/:id', mmmaM18_6Controller.getMMMAM18_6);
api.put('/update-mmmaM18_6/:id', md_auth.ensureAuth, mmmaM18_6Controller.updateMMMAM18_6);

module.exports = api;//exporta el api