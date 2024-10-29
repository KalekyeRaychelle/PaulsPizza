const express=require('express')
const app=express()
const mysql2=require('mysql2')
const cors=require('cors')

app.use(cors())
app.get('/',(req,res)=>{
    return res.json ('From Backend side')
})

app.listen(3400,()=>{
    console.log('listening')
})