'use strict'

var express = require('express');//carga express
var mmmaM50Controller = require('../../../controllers/SMM/mayor/MMMA_M50');//carga el file de los controladores de usuario

var api = express.Router();//se llama al metodo router para tener acceso a los metodos get, post, delete, put, etc.
var md_auth = require('../../../middlewares/authenticated');

var multipart = require('connect-multiparty');   

api.post('/mmmaM50-save', mmmaM50Controller.saveMmmaM50);
api.get('/mmmaM50/:id', mmmaM50Controller.getMMMAM50);
api.put('/update-mmmaM50/:id', md_auth.ensureAuth, mmmaM50Controller.updateMMMAM50);

module.exports = api;//exporta el api