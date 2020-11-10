'use strict'

var express = require('express');//carga express
var mmmaM43_1Controller = require('../../../controllers/SMM/mayor/MMMA_M43_1');//carga el file de los controladores de usuario

var api = express.Router();//se llama al metodo router para tener acceso a los metodos get, post, delete, put, etc.
var md_auth = require('../../../middlewares/authenticated');

var multipart = require('connect-multiparty');   

api.post('/mmmaM43_1-save', mmmaM43_1Controller.saveMmmaM43_1);
api.get('/mmmaM43_1/:id', mmmaM43_1Controller.getMMMAM43_1);
api.put('/update-mmmaM43_1/:id', md_auth.ensureAuth, mmmaM43_1Controller.updateMMMAM43_1);

module.exports = api;//exporta el api