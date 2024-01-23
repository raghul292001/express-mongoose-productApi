const mongoose = require("mongoose");

const objectId = mongoose.Schema.Types.ObjectId;

const productSchema = new mongoose.Schema({

    _id:{type:objectId,auto:true},
    name:{type:String,required:true},
    unitPrice:{type:Number,required:true},
    categoryId:{type:objectId,ref:'categories'}

},{
    versionKey:false
});

module.exports = mongoose.model('products',productSchema);