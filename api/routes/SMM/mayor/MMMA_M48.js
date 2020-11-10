'use strict'

var express = require('express');//carga express
var mmmaM48Controller = require('../../../controllers/SMM/mayor/MMMA_M48');//carga el file de los controladores de usuario

var api = express.Router();//se llama al metodo router para tener acceso a los metodos get, post, delete, put, etc.
var md_auth = require('../../../middlewares/authenticated');

var multipart = require('connect-multiparty');   

api.post('/mmmaM48-save', mmmaM48Controller.saveMmmaM48);
api.get('/mmmaM48/:id', mmmaM48Controller.getMMMAM48);
api.put('/update-mmmaM48/:id', md_auth.ensureAuth, mmmaM48Controller.updateMMMAM48);

module.exports = api;//exporta el api