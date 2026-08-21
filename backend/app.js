const express = require ('express')
const app = express()
const router = require("./routes/routers")

    const puerto = 4000


    app.use("/api",router)

    app.listen(puerto, () =>{

    console.log('el servidor esta escuchando en el puerto')

    })