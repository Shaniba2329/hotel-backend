const express=require("express")
const mongoose=require("mongoose")
const cors=require("cors")
const {hotelmodel}=require("./models/hotel")

const app=express()
app.use(cors())
app.use(express.json())
mongoose.connect("mongodb+srv://shaniba:7907586363@cluster0.xsue8.mongodb.net/hoteldb?retryWrites=true&w=majority&appName=Cluster0")
app.post("/add",(req,res)=>{
    let input=req.body
    let hotel=new hotelmodel(input)
    console.log(hotel)
    hotel.save()
    res.json({"status":"success"})
})

app.listen(8080,()=>{
    console.log("server started")
})