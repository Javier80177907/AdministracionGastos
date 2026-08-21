const mysql =require("mysql2")

const pool = mysql.createPool(

{   

    host: 'localhost',
    user: 'root',
    password: '',
    port:3308,
    database:'base'



}

)

module.exports=pool.promise()