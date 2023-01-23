const mongoose=require("mongoose");

var schema= new mongoose.Schema({
 mno:{
 	type: String
 },
 mname:{
 	type: String
 },
 leaveFrom:{
 	type: String
 },
 leaveTill:{
 	type: String
 },
 nature:{
 	type: String
 }
})

const Managerdb = mongoose.model('managerdb', schema);

module.exports = Managerdb;