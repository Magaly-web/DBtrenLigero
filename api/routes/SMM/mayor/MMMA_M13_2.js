'use strict'

var express = require('express');//carga express
var mmmaM13_2Controller = require('../../../controllers/SMM/mayor/MMMA_M13_2');//carga el file de los controladores de usuario

var api = express.Router();//se llama al metodo router para tener acceso a los metodos get, post, delete, put, etc.
var md_auth = require('../../../middlewares/authenticated');

var multipart = require('connect-multiparty');   

api.post('/mmmaM13_2-save', mmmaM13_2Controller.saveMmmaM13_2);
api.get('/mmmaM13_2/:id', mmmaM13_2Controller.getMMMAM13_2);
api.put('/update-mmmaM13_2/:id', md_auth.ensureAuth, mmmaM13_2Controller.updateMMMAM13_2);

module.exports = api;//exporta el api