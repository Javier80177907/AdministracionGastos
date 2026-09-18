                    const express = require("express")
const router = express.Router()
const controller = require ('../controller/gastos.controller')

router.get('/movimientos', controller.consultarGastos)
router.get('/gasto', controller.consultarGastos)
router.get('/movimientos/:id', controller.consultarRegistro)
router.get('/categoria', controller.consultarCategoria)
router.post('/movimientos', controller.crearRegistro)
router.post('/gasto', controller.crearRegistro)
module.exports = router