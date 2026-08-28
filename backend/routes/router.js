const express = require("express")
const router = express.Router()
const controller = require ('../controller/gastos.controller')

router.get('/movimientos', controller.consultarGastos)

module.exports = router