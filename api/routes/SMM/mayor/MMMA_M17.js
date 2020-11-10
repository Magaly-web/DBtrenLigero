'use strict'

var express = require('express');//carga express
var mmmaM17Controller = require('../../../controllers/SMM/mayor/MMMA_M17');//carga el file de los controladores de usuario

var api = express.Router();//se llama al metodo router para tener acceso a los metodos get, post, delete, put, etc.
var md_auth = require('../../../middlewares/authenticated');

var multipart = require('connect-multiparty');   

api.post('/mmmaM17-save', mmmaM17Controller.saveMmmaM17);
api.get('/mmmaM17/:id', mmmaM17Controller.getMMMAM17);
api.put('/update-mmmaM17/:id', md_auth.ensureAuth, mmmaM17Controller.updateMMMAM17);

module.exports = api;//exporta el api