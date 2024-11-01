const express=require('express')
const app=express()

const cors=require('cors')

app.use(cors())
app.get('/',(req,res)=>{
    return res.json ('From Backend side')
})

app.listen(3487,()=>{
    console.log('listening')
})
const menuRouter = require('./routes/menuRoutes')
app.use('/Menu',menuRouter)

