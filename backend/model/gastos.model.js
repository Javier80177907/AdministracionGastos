const mysql = require('mysql2')
const db = require("../config/db")



class GastosModel{

    static async consultarGastos(){

      const [resultados]  = await db.query("SELECT * FROM movimiento")
       
      return resultados
      


    }

 static async consultarCategoria(){

      const [resultados]  = await db.query("SELECT * FROM categoria")
       
      return resultados
      


    }

    static async crearRegistro({ monto, fecha, tipo, id_usuario, id_categoria }) {

      const [resultado] = await db.query(
        "INSERT INTO movimiento (monto, fecha, tipo, id_usuario, id_categoria) VALUES (?, ?, ?, ?, ?)",
        [monto, fecha, tipo, id_usuario, id_categoria]
      )

      return resultado

    }


static async consultarRegistro(idMovimiento){

      const [resultados] = await db.query(
        "SELECT * FROM movimiento WHERE id_movimiento = ?",
        [idMovimiento]
      )
      
        return resultados   
      


    }


}

module.exports = GastosModel 