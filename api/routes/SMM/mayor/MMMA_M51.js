'use strict'

var express = require('express');//carga express
var mmmaM51Controller = require('../../../controllers/SMM/mayor/MMMA_M51');//carga el file de los controladores de usuario

var api = express.Router();//se llama al metodo router para tener acceso a los metodos get, post, delete, put, etc.
var md_auth = require('../../../middlewares/authenticated');

var multipart = require('connect-multiparty');   

api.post('/mmmaM51-save', mmmaM51Controller.saveMmmaM51);
api.get('/mmmaM51/:id', mmmaM51Controller.getMMMAM51);
api.put('/update-mmmaM51/:id', md_auth.ensureAuth, mmmaM51Controller.updateMMMAM51);

module.exports = api;//exporta el api