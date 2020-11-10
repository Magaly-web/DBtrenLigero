'use strict'

var express = require('express');//carga express
var mmmaM42_1Controller = require('../../../controllers/SMM/mayor/MMMA_M42_1');//carga el file de los controladores de usuario

var api = express.Router();//se llama al metodo router para tener acceso a los metodos get, post, delete, put, etc.
var md_auth = require('../../../middlewares/authenticated');

var multipart = require('connect-multiparty');   

api.post('/mmmaM42_1-save', mmmaM42_1Controller.saveMmmaM42_1);
api.get('/mmmaM42_1/:id', mmmaM42_1Controller.getMMMAM42_1);
api.put('/update-mmmaM42_1/:id', md_auth.ensureAuth, mmmaM42_1Controller.updateMMMAM42_1);

module.exports = api;//exporta el api