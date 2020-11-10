'use strict'

var express = require('express');//carga express
var mmmaM33Controller = require('../../../controllers/SMM/mayor/MMMA_M33');//carga el file de los controladores de usuario

var api = express.Router();//se llama al metodo router para tener acceso a los metodos get, post, delete, put, etc.
var md_auth = require('../../../middlewares/authenticated');

var multipart = require('connect-multiparty');   

api.post('/mmmaM33-save', mmmaM33Controller.saveMmmaM33);
api.get('/mmmaM33/:id', mmmaM33Controller.getMMMAM33);
api.put('/update-mmmaM33/:id', md_auth.ensureAuth, mmmaM33Controller.updateMMMAM33);

module.exports = api;//exporta el api