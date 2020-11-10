'use strict'

var express = require('express');//carga express
var mmmaM66Controller = require('../../../controllers/SMM/mayor/MMMA_M66');//carga el file de los controladores de usuario

var api = express.Router();//se llama al metodo router para tener acceso a los metodos get, post, delete, put, etc.
var md_auth = require('../../../middlewares/authenticated');

var multipart = require('connect-multiparty');   

api.post('/mmmaM66-save', mmmaM66Controller.saveMmmaM66);
api.get('/mmmaM66/:id', mmmaM66Controller.getMMMAM66);
api.put('/update-mmmaM66/:id', md_auth.ensureAuth, mmmaM66Controller.updateMMMAM66);

module.exports = api;//exporta el api