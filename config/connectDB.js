// const mongoose = require('mongoose');
// const colors = require('colors');
// mongoose.set('strictQuery', false);


// const connectDb = async() => {
//     try{
//         // await mongoose.connect("mongodb+srv://up:qwert@cluster0.wbcf5.mongodb.net/main_final_expense"),
//         // await mongoose.connect("mongodb://priyanshgargcs22:3DDR44i7gZXuYfP3/?replicaSet=atlas-393z4y-shard-0&ssl=true&authSource=admin"),
//         await mongoose.connect("mongodb+srv://priyanshgargcs22:3DDR44i7gZXuYfP3@your-cluster.mongodb.net/your-database-name?retryWrites=true&w=majority")

//         console.log(`Server running On ${mongoose.connection.host}`.bgCyan.white)
//     }
//     catch(error){
//         console.log(`${error}`.bgRed)
//     }
// }

// module.exports =connectDb
const mongoose = require('mongoose');
const colors = require('colors');
mongoose.set('strictQuery', false);

const connectDb = async () => {
    try {
        await mongoose.connect("mongodb+srv://priyanshgargcs22:3DDR44i7gZXuYfP3@cluster0.cfqqt.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0", {
            useNewUrlParser: true,
            useUnifiedTopology: true
        });

        console.log(`Server running On ${mongoose.connection.host}`.bgCyan.white);
    } catch (error) {
        console.error(`MongoDB Connection Error: ${error.message}`.bgRed.white);
        process.exit(1); // Exit process on failure
    }
};

module.exports = connectDb;

