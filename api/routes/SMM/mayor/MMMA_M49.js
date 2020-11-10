'use strict'

var express = require('express');//carga express
var mmmaM49Controller = require('../../../controllers/SMM/mayor/MMMA_M49');//carga el file de los controladores de usuario

var api = express.Router();//se llama al metodo router para tener acceso a los metodos get, post, delete, put, etc.
var md_auth = require('../../../middlewares/authenticated');

var multipart = require('connect-multiparty');   

api.post('/mmmaM49-save', mmmaM49Controller.saveMmmaM49);
api.get('/mmmaM49/:id', mmmaM49Controller.getMMMAM49);
api.put('/update-mmmaM49/:id', md_auth.ensureAuth, mmmaM49Controller.updateMMMAM49);

module.exports = api;//exporta el api