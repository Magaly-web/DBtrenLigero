'use strict'

var express = require('express');//carga express
var mmmaM22_1Controller = require('../../../controllers/SMM/mayor/MMMA_M22_1');//carga el file de los controladores de usuario

var api = express.Router();//se llama al metodo router para tener acceso a los metodos get, post, delete, put, etc.
var md_auth = require('../../../middlewares/authenticated');

var multipart = require('connect-multiparty');   

api.post('/mmmaM22_1-save', mmmaM22_1Controller.saveMmmaM22_1);
api.get('/mmmaM22_1/:id', mmmaM22_1Controller.getMMMAM22_1);
api.put('/update-mmmaM22_1/:id', md_auth.ensureAuth, mmmaM22_1Controller.updateMMMAM22_1);

module.exports = api;//exporta el api