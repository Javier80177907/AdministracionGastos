const mysql =require("mysql2")

const pool = mysql.createPool(

{   

    host: 'localhost',
    user: 'root',
    password: '',
    port:3306,
    database:'base'



}

)

module.exports=pool.promise()