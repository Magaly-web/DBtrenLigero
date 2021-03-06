'use strict'

var express = require('express');//carga express
var mmmaM42_4Controller = require('../../../controllers/SMM/mayor/MMMA_M42_4');//carga el file de los controladores de usuario

var api = express.Router();//se llama al metodo router para tener acceso a los metodos get, post, delete, put, etc.
var md_auth = require('../../../middlewares/authenticated');

var multipart = require('connect-multiparty');   

api.post('/mmmaM42_4-save', mmmaM42_4Controller.saveMmmaM42_4);
api.get('/mmmaM42_4/:id', mmmaM42_4Controller.getMMMAM42_4);
api.put('/update-mmmaM42_4/:id', md_auth.ensureAuth, mmmaM42_4Controller.updateMMMAM42_4);

module.exports = api;//exporta el api