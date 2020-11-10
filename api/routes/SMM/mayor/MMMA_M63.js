'use strict'

var express = require('express');//carga express
var mmmaM63Controller = require('../../../controllers/SMM/mayor/MMMA_M63');//carga el file de los controladores de usuario

var api = express.Router();//se llama al metodo router para tener acceso a los metodos get, post, delete, put, etc.
var md_auth = require('../../../middlewares/authenticated');

var multipart = require('connect-multiparty');   

api.post('/mmmaM63-save', mmmaM63Controller.saveMmmaM63);
api.get('/mmmaM63/:id', mmmaM63Controller.getMMMAM63);
api.put('/update-mmmaM63/:id', md_auth.ensureAuth, mmmaM63Controller.updateMMMAM63);

module.exports = api;//exporta el api