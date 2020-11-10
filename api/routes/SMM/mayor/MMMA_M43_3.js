'use strict'

var express = require('express');//carga express
var mmmaM43_3Controller = require('../../../controllers/SMM/mayor/MMMA_M43_3');//carga el file de los controladores de usuario

var api = express.Router();//se llama al metodo router para tener acceso a los metodos get, post, delete, put, etc.
var md_auth = require('../../../middlewares/authenticated');

var multipart = require('connect-multiparty');   

api.post('/mmmaM43_3-save', mmmaM43_3Controller.saveMmmaM43_3);
api.get('/mmmaM43_3/:id', mmmaM43_3Controller.getMMMAM43_3);
api.put('/update-mmmaM43_3/:id', md_auth.ensureAuth, mmmaM43_3Controller.updateMMMAM43_3);

module.exports = api;//exporta el api