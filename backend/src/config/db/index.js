require('dotenv').config();
const mongoose = require('mongoose');

async function connect() {
    try {
        await mongoose.connect(process.env.MONGODB_ATLAS_URL, {
            useNewUrlParser: true, 
            useUnifiedTopology: true,
            useCreateIndex: true
        });
        console.log('Connect successfully');
    }
    catch (error) {
        console.log('Connect failure');
    }
}

module.exports = { connect };