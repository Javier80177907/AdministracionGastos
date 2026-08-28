const model = require('../model/gastos.model')

class GastosController{

static async consultarGastos(request,response){ 

    const movimiento = await model.consultarGastos()


    response.status(200).json({
        data: movimiento

    }

    )
}

}

module.exports = GastosController


