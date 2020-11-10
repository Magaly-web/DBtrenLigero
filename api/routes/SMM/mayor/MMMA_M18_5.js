'use strict'

var express = require('express');//carga express
var mmmaM18_5Controller = require('../../../controllers/SMM/mayor/MMMA_M18_5');//carga el file de los controladores de usuario

var api = express.Router();//se llama al metodo router para tener acceso a los metodos get, post, delete, put, etc.
var md_auth = require('../../../middlewares/authenticated');

var multipart = require('connect-multiparty');   

api.post('/mmmaM18_5-save', mmmaM18_5Controller.saveMmmaM18_5);
api.get('/mmmaM18_5/:id', mmmaM18_5Controller.getMMMAM18_5);
api.put('/update-mmmaM18_5/:id', md_auth.ensureAuth, mmmaM18_5Controller.updateMMMAM18_5);

module.exports = api;//exporta el api