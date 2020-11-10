'use strict'

var express = require('express');//carga express
var mmmaM68Controller = require('../../../controllers/SMM/mayor/MMMA_M68');//carga el file de los controladores de usuario

var api = express.Router();//se llama al metodo router para tener acceso a los metodos get, post, delete, put, etc.
var md_auth = require('../../../middlewares/authenticated');

var multipart = require('connect-multiparty');   

api.post('/mmmaM68-save', mmmaM68Controller.saveMmmaM68);
api.get('/mmmaM68/:id', mmmaM68Controller.getMMMAM68);
api.put('/update-mmmaM68/:id', md_auth.ensureAuth, mmmaM68Controller.updateMMMAM68);

module.exports = api;//exporta el api