const mongoose = require("mongoose");

const objectId = mongoose.Schema.Types.ObjectId;

const categorySchema = new mongoose.Schema({

    _id:{type:objectId,auto:true},
    name:{type:String,required:true},

},{
    versionKey:false
});

module.exports = mongoose.model('categories',categorySchema);