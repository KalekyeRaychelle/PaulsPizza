const express=require('express')
const app=express()

const cors=require('cors')

app.use(cors())
app.get('/api',(req,res)=>{
    return res.json ('From Backend side')
})

app.listen(3400,()=>{
    console.log('listening')
})