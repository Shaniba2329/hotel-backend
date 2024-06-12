const mongoose=require("mongoose")
const schema=mongoose.Schema(
    {
        "hotelid":{type:String,required:true},
        "name":{type:String,required:true},
        "category":{type:String,required:true},
        "place":{type:String,required:true}
    }
)
let hotelmodel=mongoose.model("hotels",schema)
module.exports={hotelmodel}