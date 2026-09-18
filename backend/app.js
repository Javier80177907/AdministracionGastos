const express = require ('express')
const app = express()
const router = require("./routes/router")
const cors = require("cors")

    const puerto = 4000

    app.use(cors())
    app.use(express.json())
    app.use("/api",router)

    


    app.listen(puerto, () =>{

    console.log('el servidor esta escuchando en el puerto')

    })