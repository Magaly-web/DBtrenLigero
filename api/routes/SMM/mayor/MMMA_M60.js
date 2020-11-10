'use strict'

var express = require('express');//carga express
var mmmaM60Controller = require('../../../controllers/SMM/mayor/MMMA_M60');//carga el file de los controladores de usuario

var api = express.Router();//se llama al metodo router para tener acceso a los metodos get, post, delete, put, etc.
var md_auth = require('../../../middlewares/authenticated');

var multipart = require('connect-multiparty');   

api.post('/mmmaM60-save', mmmaM60Controller.saveMmmaM60);
api.get('/mmmaM60/:id', mmmaM60Controller.getMMMAM60);
api.put('/update-mmmaM60/:id', md_auth.ensureAuth, mmmaM60Controller.updateMMMAM60);

module.exports = api;//exporta el api