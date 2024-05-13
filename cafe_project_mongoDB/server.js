const mongoose = require('mongoose')
const dotenv = require('dotenv')
//const app = require("./app")
//const { db } = require('./models/userModel')

dotenv.config({ path: "./config.env"})
const app = require("./app")
//console.log(app.get(env))

const Db = process.env.DATABASE
/*.replace(
    "<PASSWORD>",
    process.env.DATABASE_PASSWORD
)*/

console.log(`DB IS ${Db}`)

mongoose.set("strictQuery", true)
mongoose.connect(Db).then((con)=>{
    //console.log(con.connection)
    console.log("connection successfull")
})

const port = process.env.port || 3000
//port = 4000
app.listen(port, ()=>{
    console.log(`server is listening on port ${port}` )

})


//if special character is there in ur password do replace it with 
// @ = %40 (put %40 instead of @)
// ? = %3F
// # = %23
// [ = %5B
// ] = %5D
