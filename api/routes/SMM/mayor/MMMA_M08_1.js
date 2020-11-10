'use strict'

var express = require('express');//carga express
var mmmaM08_1Controller = require('../../../controllers/SMM/mayor/MMMA_M08_1');//carga el file de los controladores de usuario

var api = express.Router();//se llama al metodo router para tener acceso a los metodos get, post, delete, put, etc.
var md_auth = require('../../../middlewares/authenticated');

var multipart = require('connect-multiparty');   

api.post('/mmmaM08_1-save', mmmaM08_1Controller.saveMmmaM08_1);
api.get('/mmmaM08_1/:id', mmmaM08_1Controller.getMMMAM08_1);
api.put('/update-mmmaM08_1/:id', md_auth.ensureAuth, mmmaM08_1Controller.updateMMMAM08_1);

module.exports = api;//exporta el api