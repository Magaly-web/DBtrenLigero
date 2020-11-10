'use strict'

var express = require('express');//carga express
var mmmaM13_1Controller = require('../../../controllers/SMM/mayor/MMMA_M13_1');//carga el file de los controladores de usuario

var api = express.Router();//se llama al metodo router para tener acceso a los metodos get, post, delete, put, etc.
var md_auth = require('../../../middlewares/authenticated');

var multipart = require('connect-multiparty');   

api.post('/mmmaM13_1-save', mmmaM13_1Controller.saveMmmaM13_1);
api.get('/mmmaM13_1/:id', mmmaM13_1Controller.getMMMAM13_1);
api.put('/update-mmmaM13_1/:id', md_auth.ensureAuth, mmmaM13_1Controller.updateMMMAM13_1);

module.exports = api;//exporta el api