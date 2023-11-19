const mongoose = require('mongoose');

async function connect() {
    try {
        // await mongoose.connect('mongodb://127.0.0.1:27017/k4_nodejs_dev');
        await mongoose.connect('mongodb+srv://vanhoa690:nPBfHodxbT4RnEr1@cluster0.iz2ewiz.mongodb.net/?retryWrites=true&w=majority')
        console.log('Connect successfully!!!');
    } catch (error) {
        console.log('Connect failure!!!');
    }
}

module.exports = { connect };