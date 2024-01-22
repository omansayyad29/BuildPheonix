const mongoose=require('mongoose')
const Schema=mongoose.Schema
const componentSchema=new Schema({
    type: {
        type: String,
        required: true,
      },
      brand: {
        type: String,
        required: true,
      },
      model: {
        type: String,
        required: true,
      },
      
}
,{ timestamps:true}
)

module.exports=mongoose.model('component',componentSchema)
