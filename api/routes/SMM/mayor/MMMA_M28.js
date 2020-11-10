'use strict'

var express = require('express');//carga express
var mmmaM28Controller = require('../../../controllers/SMM/mayor/MMMA_M28');//carga el file de los controladores de usuario

var api = express.Router();//se llama al metodo router para tener acceso a los metodos get, post, delete, put, etc.
var md_auth = require('../../../middlewares/authenticated');

var multipart = require('connect-multiparty');   

api.post('/mmmaM28-save', mmmaM28Controller.saveMmmaM28);
api.get('/mmmaM28/:id', mmmaM28Controller.getMMMAM28);
api.put('/update-mmmaM28/:id', md_auth.ensureAuth, mmmaM28Controller.updateMMMAM28);

module.exports = api;//exporta el api