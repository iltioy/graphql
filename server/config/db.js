const mongoose = require("mongoose");

const connectDB = async () => {
    const connection = await mongoose.connect(process.env.MONGO_URI);

    console.log(`Connected: ${connection.connection.host}`.cyan.underline.bold);
};

module.exports = connectDB;
