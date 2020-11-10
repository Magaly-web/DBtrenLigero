'use strict'

var express = require('express');//carga express
var mmmaM65Controller = require('../../../controllers/SMM/mayor/MMMA_M65');//carga el file de los controladores de usuario

var api = express.Router();//se llama al metodo router para tener acceso a los metodos get, post, delete, put, etc.
var md_auth = require('../../../middlewares/authenticated');

var multipart = require('connect-multiparty');   

api.post('/mmmaM65-save', mmmaM65Controller.saveMmmaM65);
api.get('/mmmaM65/:id', mmmaM65Controller.getMMMAM65);
api.put('/update-mmmaM65/:id', md_auth.ensureAuth, mmmaM65Controller.updateMMMAM65);

module.exports = api;//exporta el api