const mongoose = require('mongoose');
const colors = require('colors');
mongoose.set('strictQuery', false);


const connectDb = async() => {
    try{
        // await mongoose.connect("mongodb+srv://up:qwert@cluster0.wbcf5.mongodb.net/main_final_expense"),
        await mongoose.connect("mongodb://localhost:27017/local_test"),
        console.log(`Server running On ${mongoose.connection.host}`.bgCyan.white)
    }
    catch(error){
        console.log(`${error}`.bgRed)
    }
}

module.exports =connectDb
