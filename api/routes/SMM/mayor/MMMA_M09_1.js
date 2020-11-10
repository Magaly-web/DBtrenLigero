'use strict'

var express = require('express');//carga express
var mmmaM09_1Controller = require('../../../controllers/SMM/mayor/MMMA_M09_1');//carga el file de los controladores de usuario

var api = express.Router();//se llama al metodo router para tener acceso a los metodos get, post, delete, put, etc.
var md_auth = require('../../../middlewares/authenticated');

var multipart = require('connect-multiparty');   

api.post('/mmmaM09_1-save', mmmaM09_1Controller.saveMmmaM09_1);
api.get('/mmmaM09_1/:id', mmmaM09_1Controller.getMMMAM09_1);
api.put('/update-mmmaM09_1/:id', md_auth.ensureAuth, mmmaM09_1Controller.updateMMMAM09_1);

module.exports = api;//exporta el api