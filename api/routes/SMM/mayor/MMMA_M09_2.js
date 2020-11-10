'use strict'

var express = require('express');//carga express
var mmmaM09_2Controller = require('../../../controllers/SMM/mayor/MMMA_M09_2');//carga el file de los controladores de usuario

var api = express.Router();//se llama al metodo router para tener acceso a los metodos get, post, delete, put, etc.
var md_auth = require('../../../middlewares/authenticated');

var multipart = require('connect-multiparty');   

api.post('/mmmaM09_2-save', mmmaM09_2Controller.saveMmmaM09_2);
api.get('/mmmaM09_2/:id', mmmaM09_2Controller.getMMMAM09_2);
api.put('/update-mmmaM09_2/:id', md_auth.ensureAuth, mmmaM09_2Controller.updateMMMAM09_2);

module.exports = api;//exporta el api