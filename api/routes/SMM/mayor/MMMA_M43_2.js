'use strict'

var express = require('express');//carga express
var mmmaM43_2Controller = require('../../../controllers/SMM/mayor/MMMA_M43_2');//carga el file de los controladores de usuario

var api = express.Router();//se llama al metodo router para tener acceso a los metodos get, post, delete, put, etc.
var md_auth = require('../../../middlewares/authenticated');

var multipart = require('connect-multiparty');   

api.post('/mmmaM43_2-save', mmmaM43_2Controller.saveMmmaM43_2);
api.get('/mmmaM43_2/:id', mmmaM43_2Controller.getMMMAM43_2);
api.put('/update-mmmaM43_2/:id', md_auth.ensureAuth, mmmaM43_2Controller.updateMMMAM43_2);

module.exports = api;//exporta el api