const express=require("express")
const mongoose=require("mongoose")
const cors=require("cors")
const theatre=require("./models/theatre.js")
const {theatreModel}=require("./models/theatre.js")

const app=express()
app.use(cors())
app.use(express.json())

mongoose.connect("mongodb+srv://jophine:jophinepaul@cluster0.oyyvgui.mongodb.net/theatreDB?retryWrites=true&w=majority&appName=Cluster0")


app.post("/add",(req,res)=>{
let input=req.body
let theatre=new theatreModel(input)
theatre.save()
console.log(theatre)
res.json({"status":"success"})
})

app.post("/search",(req,res)=>{
    

})

app.get("/view",(req,res)=>{
theatre.theatreModel.find().then(
    (data=>{
        res.json(data)
    })
)
})

app.get("/Search",(req,res)=>{
    let input=req.body
    theatreModel.find().then(
        (data)=>{
            res.json(data)
        }
    ).catch(
        (error)=>{
            res.json(error)
        }
    )
})

app.post("/delete",(req,res)=>{
    let input=req.body
    theatreModel.findByIdAndDelete(input._id).then(
        (response)=>{
            res.json({"status":"success"})
            }
    ).catch(
        (error)=>{
            res.json({"status":"error"})
        }
    )
    })

app.listen(8080,()=>{
    console.log("Server initiated")
})