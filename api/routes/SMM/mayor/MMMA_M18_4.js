'use strict'

var express = require('express');//carga express
var mmmaM18_4Controller = require('../../../controllers/SMM/mayor/MMMA_M18_4');//carga el file de los controladores de usuario

var api = express.Router();//se llama al metodo router para tener acceso a los metodos get, post, delete, put, etc.
var md_auth = require('../../../middlewares/authenticated');

var multipart = require('connect-multiparty');   

api.post('/mmmaM18_4-save', mmmaM18_4Controller.saveMmmaM18_4);
api.get('/mmmaM18_4/:id', mmmaM18_4Controller.getMMMAM18_4);
api.put('/update-mmmaM18_4/:id', md_auth.ensureAuth, mmmaM18_4Controller.updateMMMAM18_4);

module.exports = api;//exporta el api