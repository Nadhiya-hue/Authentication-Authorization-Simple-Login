const mongoose = require('mongoose');
mongoose.connect(`mongodb://localhost:27017/Authtest`);

const usermodel = mongoose.Schema({
    name: String,
    age: Number,
    password: String,
    email: String
})
module.exports = mongoose.model('Users', usermodel);