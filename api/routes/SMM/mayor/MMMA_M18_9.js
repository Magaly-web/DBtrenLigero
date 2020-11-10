'use strict'

var express = require('express');//carga express
var mmmaM18_9Controller = require('../../../controllers/SMM/mayor/MMMA_M18_9');//carga el file de los controladores de usuario

var api = express.Router();//se llama al metodo router para tener acceso a los metodos get, post, delete, put, etc.
var md_auth = require('../../../middlewares/authenticated');

var multipart = require('connect-multiparty');   

api.post('/mmmaM18_9-save', mmmaM18_9Controller.saveMmmaM18_9);
api.get('/mmmaM18_9/:id', mmmaM18_9Controller.getMMMAM18_9);
api.put('/update-mmmaM18_9/:id', md_auth.ensureAuth, mmmaM18_9Controller.updateMMMAM18_9);

module.exports = api;//exporta el api