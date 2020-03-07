const mongoose = require('mongoose');

mongoose.connect('mongodb+srv://Admin:admin@nstore-tngrg.mongodb.net/nstore?retryWrites=true&w=majority').then(()=>{
    console.log("Connected sucessfully...");

}).catch((err)=>{
    console.log(err);
});

module.exports.mongoose = mongoose;