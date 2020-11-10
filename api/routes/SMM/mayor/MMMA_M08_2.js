'use strict'

var express = require('express');//carga express
var mmmaM08_2Controller = require('../../../controllers/SMM/mayor/MMMA_M08_2');//carga el file de los controladores de usuario

var api = express.Router();//se llama al metodo router para tener acceso a los metodos get, post, delete, put, etc.
var md_auth = require('../../../middlewares/authenticated');

var multipart = require('connect-multiparty');   

api.post('/mmmaM08_2-save', mmmaM08_2Controller.saveMmmaM08_2);
api.get('/mmmaM08_2/:id', mmmaM08_2Controller.getMMMAM08_2);
api.put('/update-mmmaM08_2/:id', md_auth.ensureAuth, mmmaM08_2Controller.updateMMMAM08_2);

module.exports = api;//exporta el api