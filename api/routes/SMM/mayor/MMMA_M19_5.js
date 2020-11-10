'use strict'

var express = require('express');//carga express
var mmmaM19_5Controller = require('../../../controllers/SMM/mayor/MMMA_M19_5');//carga el file de los controladores de usuario

var api = express.Router();//se llama al metodo router para tener acceso a los metodos get, post, delete, put, etc.
var md_auth = require('../../../middlewares/authenticated');

var multipart = require('connect-multiparty');   

api.post('/mmmaM19_5-save', mmmaM19_5Controller.saveMmmaM19_5);
api.get('/mmmaM19_5/:id', mmmaM19_5Controller.getMMMAM19_5);
api.put('/update-mmmaM19_5/:id', md_auth.ensureAuth, mmmaM19_5Controller.updateMMMAM19_5);

module.exports = api;//exporta el api