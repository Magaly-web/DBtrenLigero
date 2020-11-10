'use strict'

var express = require('express');//carga express
var mmmaM67Controller = require('../../../controllers/SMM/mayor/MMMA_M67');//carga el file de los controladores de usuario

var api = express.Router();//se llama al metodo router para tener acceso a los metodos get, post, delete, put, etc.
var md_auth = require('../../../middlewares/authenticated');

var multipart = require('connect-multiparty');   

api.post('/mmmaM67-save', mmmaM67Controller.saveMmmaM67);
api.get('/mmmaM67/:id', mmmaM67Controller.getMMMAM67);
api.put('/update-mmmaM67/:id', md_auth.ensureAuth, mmmaM67Controller.updateMMMAM67);

module.exports = api;//exporta el api