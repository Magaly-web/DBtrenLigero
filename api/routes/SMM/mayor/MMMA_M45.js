'use strict'

var express = require('express');//carga express
var mmmaM45Controller = require('../../../controllers/SMM/mayor/MMMA_M45');//carga el file de los controladores de usuario

var api = express.Router();//se llama al metodo router para tener acceso a los metodos get, post, delete, put, etc.
var md_auth = require('../../../middlewares/authenticated');

var multipart = require('connect-multiparty');   

api.post('/mmmaM45-save', mmmaM45Controller.saveMmmaM45);
api.get('/mmmaM45/:id', mmmaM45Controller.getMMMAM45);
api.put('/update-mmmaM45/:id', md_auth.ensureAuth, mmmaM45Controller.updateMMMAM45);

module.exports = api;//exporta el api