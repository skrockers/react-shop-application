const mongoose = require('mongoose');

module.exports = async(req, res, next) => {
    try{
        await mongoose.connect('mongodb+srv://jarvis:jarvis@main-app-cluster.dmvmoad.mongodb.net/?retryWrites=true&w=majority&appName=main-app-cluster');
        console.log('Connected to MongoDB');
    }catch(error){
        console.log(error.message);
    }
    next();
}
