'use strict'

var express = require('express');//carga express
var mmmaM12Controller = require('../../../controllers/SMM/mayor/MMMA_M12');//carga el file de los controladores de usuario

var api = express.Router();//se llama al metodo router para tener acceso a los metodos get, post, delete, put, etc.
var md_auth = require('../../../middlewares/authenticated');

var multipart = require('connect-multiparty');   

api.post('/mmmaM12-save', mmmaM12Controller.saveMmmaM12);
api.get('/mmmaM12/:id', mmmaM12Controller.getMMMAM12);
api.put('/update-mmmaM12/:id', md_auth.ensureAuth, mmmaM12Controller.updateMMMAM12);

module.exports = api;//exporta el api