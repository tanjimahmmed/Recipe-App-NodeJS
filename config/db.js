const mongoose = require('mongoose');
const dotenv = require('dotenv');
dotenv.config();

const connectDB = async () => {
    try {
        await mongoose.connect(process.env.MONGO_URI);
        console.log('MongoDb Connected...');
    } catch (error) {
        console.error(`MongoDb connection failed: `, error.message);
        process.exit(1);
    }
};

module.exports = connectDB;