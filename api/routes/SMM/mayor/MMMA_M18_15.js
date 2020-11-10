'use strict'

var express = require('express');//carga express
var mmmaM18_15Controller = require('../../../controllers/SMM/mayor/MMMA_M18_15');//carga el file de los controladores de usuario

var api = express.Router();//se llama al metodo router para tener acceso a los metodos get, post, delete, put, etc.
var md_auth = require('../../../middlewares/authenticated');

var multipart = require('connect-multiparty');   

api.post('/mmmaM18_15-save', mmmaM18_15Controller.saveMmmaM18_15);
api.get('/mmmaM18_15/:id', mmmaM18_15Controller.getMMMAM18_15);
api.put('/update-mmmaM18_15/:id', md_auth.ensureAuth, mmmaM18_15Controller.updateMMMAM18_15);

module.exports = api;//exporta el api