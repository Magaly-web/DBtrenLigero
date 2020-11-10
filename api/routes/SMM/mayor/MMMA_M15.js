'use strict'

var express = require('express');//carga express
var mmmaM15Controller = require('../../../controllers/SMM/mayor/MMMA_M15');//carga el file de los controladores de usuario

var api = express.Router();//se llama al metodo router para tener acceso a los metodos get, post, delete, put, etc.
var md_auth = require('../../../middlewares/authenticated');

var multipart = require('connect-multiparty');   

api.post('/mmmaM15-save', mmmaM15Controller.saveMmmaM15);
api.get('/mmmaM15/:id', mmmaM15Controller.getMMMAM15);
api.put('/update-mmmaM15/:id', md_auth.ensureAuth, mmmaM15Controller.updateMMMAM15);

module.exports = api;//exporta el api