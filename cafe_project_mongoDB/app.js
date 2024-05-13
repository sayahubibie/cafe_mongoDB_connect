const express = require('express')
const logger = require('morgan')
const user = require('./models/userModel')
const cafeRouter = require("./routers/cafe_route")

//const  Db = 'mongodb+srv://sayalishende:sayali@123@sayalishende.otpu5gi.mongodb.net/?retryWrites=true&w=majority&appName=sayalishende'

//mongoose.connect('mongodb+srv://sayalishende:sayali@123@sayalishende.otpu5gi.mongodb.net/?retryWrites=true&w=majority&appName=sayalishende')
/*mongoose.connect(Db, {
        useNewUrlParser: true,
        useCreateIndex: true,
        useUnifiedTopology: true,
        useFindAndModify: false,
        usestrictQuery: true,


}).then(() =>{
    console.log("successfully connection established ")
}).catch((err)=> console.log("fail to connect "))
//const { Module } = require('module')
*/
const app = new express();

if (process.env.NODE_ENV === "development"){
    app.use(logger("dev"))
}


app.use(express.json());

//middleware 

app.use((req,res,next)=>{
    console.log('i am coming from middleware')
    next()
});

app.use('/cafe', cafeRouter)
//app.use("/cafe/:id", cafeRouter)
//app.use("/cafe/add", cafeRouter)
//app.use("/cafe/:id", cafeRouter)
//app.use("/cafe/:id", cafeRouter)

module.exports = app

