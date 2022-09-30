const router = require('express').Router();
const listado_controller = require('../controllers/listado.controllers')

router.get('/list', listado_controller.listar);

module.exports = router;