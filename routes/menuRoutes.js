const express=require("express")
const connection=require('../database')
const router=express.Router()
router.get('/Menu/meat-pizza',(req,res)=>{
    var query= "SELECT * FROM meat_pizza"
    connection.query(query,function(error,data){
        if(error){
            console.error(error)

        }else{
            res.json(data)
        }
    })
})
router.get('/Menu/vegan-pizza',(req,res)=>{
    var query= "SELECT * FROM veg_pizza"
    connection.query(query,function(error,data){
        if(error){
            console.error(error)
        }else{
            res.json(data)
        }
    })
})
router.get('/Menu/sides',(req,res)=>{
    var query="SELECT * FROM sides"
    connection.query(query,function(error,data){
        if(error){
            console.error(error)
        }else{
            res.json(data)
        }
    })
})
router.get('/Menu/drinks',(req,res)=>{
    var query="SELECT * FROM drinks"
    connection.query(query,function(error,data){
        if(error){
            console.error(error)
        }else{
            res.json(data)
        }
    })
})
module.exports=router;