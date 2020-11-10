'use strict'

var express = require('express');//carga express
var mmmaM61Controller = require('../../../controllers/SMM/mayor/MMMA_M61');//carga el file de los controladores de usuario

var api = express.Router();//se llama al metodo router para tener acceso a los metodos get, post, delete, put, etc.
var md_auth = require('../../../middlewares/authenticated');

var multipart = require('connect-multiparty');   

api.post('/mmmaM61-save', mmmaM61Controller.saveMmmaM61);
api.get('/mmmaM61/:id', mmmaM61Controller.getMMMAM61);
api.put('/update-mmmaM61/:id', md_auth.ensureAuth, mmmaM61Controller.updateMMMAM61);

module.exports = api;//exporta el api