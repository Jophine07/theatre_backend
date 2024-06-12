const mongoose=require("mongoose")
const schema=mongoose.Schema(
    {
        "name":{type:String,required:true},
        "type":{type:String,required:true},
        "date":{type:String,required:true},
        "hero":{type:String,required:true}
    }
)
let theatreModel=mongoose.model("Theatres",schema)
module.exports={theatreModel}