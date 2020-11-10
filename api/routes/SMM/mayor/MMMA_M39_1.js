'use strict'

var express = require('express');//carga express
var mmmaM39_1Controller = require('../../../controllers/SMM/mayor/MMMA_M39_1');//carga el file de los controladores de usuario

var api = express.Router();//se llama al metodo router para tener acceso a los metodos get, post, delete, put, etc.
var md_auth = require('../../../middlewares/authenticated');

var multipart = require('connect-multiparty');   

api.post('/mmmaM39_1-save', mmmaM39_1Controller.saveMmmaM39_1);
api.get('/mmmaM39_1/:id', mmmaM39_1Controller.getMMMAM39_1);
api.put('/update-mmmaM39_1/:id', md_auth.ensureAuth, mmmaM39_1Controller.updateMMMAM39_1);

module.exports = api;//exporta el api