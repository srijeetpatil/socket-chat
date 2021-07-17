var mongoose = require("mongoose");
var Schema = mongoose.Schema;

var messageSchema = new Schema({
  content: String,
  sender: String,
  reciever: String,
  time: { type: Date, default: Date.now },  
});

module.exports =
  mongoose.models.Message || mongoose.model("Message", messageSchema);
