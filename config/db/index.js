const mongoose = require('mongoose');

async function connect(dbUrl) {
    try {
        // await mongoose.connect('mongodb://127.0.0.1:27017/k4_nodejs_dev');
        await mongoose.connect(dbUrl)
        console.log('Connect successfully!!!');
    } catch (error) {
        console.log('Connect failure!!!');
    }
}

module.exports = { connect };