const db=require('./dbconnection')

const express=require('express')
const app=express()

const bodyparser=require('body-parser')
app.use(bodyparser.json())

const router=require('./routes')
app.use("/",router)

 app.listen(5000,()=>

    {
    
        console.log('server started')
    })