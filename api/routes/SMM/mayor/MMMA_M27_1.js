'use strict'

var express = require('express');//carga express
var mmmaM27_1Controller = require('../../../controllers/SMM/mayor/MMMA_M27_1');//carga el file de los controladores de usuario

var api = express.Router();//se llama al metodo router para tener acceso a los metodos get, post, delete, put, etc.
var md_auth = require('../../../middlewares/authenticated');

var multipart = require('connect-multiparty');   

api.post('/mmmaM27_1-save', mmmaM27_1Controller.saveMmmaM27_1);
api.get('/mmmaM27_1/:id', mmmaM27_1Controller.getMMMAM27_1);
api.put('/update-mmmaM27_1/:id', md_auth.ensureAuth, mmmaM27_1Controller.updateMMMAM27_1);

module.exports = api;//exporta el api