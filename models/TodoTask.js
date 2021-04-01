const mongoose = require('mongoose');
const todoTaskSchema = new mongoose.Schema({
content: {
type: String,
required: true
},
description:
{
    type : String,
    required: true,
},
creator:
{
    type : String,
    required: true,
},
duration: {
    type : Number,
    required: true,
},
updated_at : {type:Date, default: Date.now},
date: {
type: Date,
default: Date.now
},
expireAt: {
    type: Date,
    default: Date.now,
    index: { expires: Date },
  },
})
module.exports = mongoose.model('TodoTask',todoTaskSchema);