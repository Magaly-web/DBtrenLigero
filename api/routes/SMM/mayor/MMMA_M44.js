'use strict'

var express = require('express');//carga express
var mmmaM44Controller = require('../../../controllers/SMM/mayor/MMMA_M44');//carga el file de los controladores de usuario

var api = express.Router();//se llama al metodo router para tener acceso a los metodos get, post, delete, put, etc.
var md_auth = require('../../../middlewares/authenticated');

var multipart = require('connect-multiparty');   

api.post('/mmmaM44-save', mmmaM44Controller.saveMmmaM44);
api.get('/mmmaM44/:id', mmmaM44Controller.getMMMAM44);
api.put('/update-mmmaM44/:id', md_auth.ensureAuth, mmmaM44Controller.updateMMMAM44);

module.exports = api;//exporta el api