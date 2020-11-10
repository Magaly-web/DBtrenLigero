'use strict'

var express = require('express');//carga express
var mmmaM03Controller = require('../../../controllers/SMM/mayor/MMMA_M03');//carga el file de los controladores de usuario

var api = express.Router();//se llama al metodo router para tener acceso a los metodos get, post, delete, put, etc.
var md_auth = require('../../../middlewares/authenticated');

var multipart = require('connect-multiparty');   

api.post('/mmmaM03-save', mmmaM03Controller.saveMmmaM03);
api.get('/mmmaM03/:id', mmmaM03Controller.getMMMAM03);
api.put('/update-mmmaM03/:id', md_auth.ensureAuth, mmmaM03Controller.updateMMMAM03);

module.exports = api;//exporta el api