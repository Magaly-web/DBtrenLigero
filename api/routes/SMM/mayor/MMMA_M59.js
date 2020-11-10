'use strict'

var express = require('express');//carga express
var mmmaM59Controller = require('../../../controllers/SMM/mayor/MMMA_M59');//carga el file de los controladores de usuario

var api = express.Router();//se llama al metodo router para tener acceso a los metodos get, post, delete, put, etc.
var md_auth = require('../../../middlewares/authenticated');

var multipart = require('connect-multiparty');   

api.post('/mmmaM59-save', mmmaM59Controller.saveMmmaM59);
api.get('/mmmaM59/:id', mmmaM59Controller.getMMMAM59);
api.put('/update-mmmaM59/:id', md_auth.ensureAuth, mmmaM59Controller.updateMMMAM59);

module.exports = api;//exporta el api