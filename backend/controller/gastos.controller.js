const model = require('../model/gastos.model')

class GastosController {

    static async consultarGastos(request, response) {

        const movimiento = await model.consultarGastos()


        response.status(200).json({
            data: movimiento

        })
    
    }

     static async consultarCategoria(request, response) {

        const categoria = await model.consultarCategoria()


        response.status(200).json({
            data: categoria

        })
    
    }
}


module.exports = GastosController


