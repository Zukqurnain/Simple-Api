const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const ObjectId = Schema.ObjectId;

const TwilioSchema = new Schema({
    
}, {strict: false});


exports.getTwilioModel = mongoose.model("Twilios", TwilioSchema);
