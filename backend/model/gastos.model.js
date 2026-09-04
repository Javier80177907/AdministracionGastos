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




}

module.exports = GastosModel 