const mongoose = require('mongoose');

const {Schema} = mongoose;

const hotSpotSchema = new Schema({
    aid:{
        type:Number,
        required:false,
    },
    videos:{
        type:Number,
        default:1,
    },
    title:{
        type:String,
        // required:true,
    }
});

const HotSpot = mongoose.model('HotSpot', hotSpotSchema);
module.exports = HotSpot;