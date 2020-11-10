'use strict'

var express = require('express');//carga express
var mmmaM18_14Controller = require('../../../controllers/SMM/mayor/MMMA_M18_14');//carga el file de los controladores de usuario

var api = express.Router();//se llama al metodo router para tener acceso a los metodos get, post, delete, put, etc.
var md_auth = require('../../../middlewares/authenticated');

var multipart = require('connect-multiparty');   

api.post('/mmmaM18_14-save', mmmaM18_14Controller.saveMmmaM18_14);
api.get('/mmmaM18_14/:id', mmmaM18_14Controller.getMMMAM18_14);
api.put('/update-mmmaM18_14/:id', md_auth.ensureAuth, mmmaM18_14Controller.updateMMMAM18_14);

module.exports = api;//exporta el api