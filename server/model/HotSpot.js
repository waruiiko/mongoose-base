const mongoose = require('mongoose');

const {Schema} = mongoose;

const hotSpotSchema = new Schema({
    aid:{
        type:Number,
        required:true,
    },
    videos:{
        type:Number,
        default:1,
    },
    title:{
        type:String,
    }
});

const HotSpot = mongoose.model('HotSpot', hotSpotSchema);
module.exports = HotSpot;