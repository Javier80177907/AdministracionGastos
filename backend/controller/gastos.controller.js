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

    static async crearRegistro(request, response) {

        const { monto, fecha, tipo, id_usuario, id_categoria } = request.body

        if (!monto || !fecha || !tipo || !id_usuario || !id_categoria) {
            return response.status(400).json({
                mensaje: 'Faltan datos requeridos'
            })
        }

        try {
            const resultado = await model.crearRegistro({
                monto,
                fecha,
                tipo,
                id_usuario,
                id_categoria
            })

            return response.status(201).json({
                mensaje: 'Registro creado correctamente',
                data: resultado
            })
        } catch (error) {
            return response.status(500).json({
                mensaje: 'Error al crear el registro',
                error: error.message
            })
        }
    }

        static async consultarRegistro(request, response) {

        const movimiento = await model.consultarRegistro(request.params.id)

        if (movimiento.length === 0) {
            return response.status(404).json({
                mensaje: 'Registro no encontrado'
            })
        }

        response.status(200).json({
            data: movimiento[0]
        })
    }

}


module.exports = GastosController


