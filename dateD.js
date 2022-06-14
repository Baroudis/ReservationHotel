const mongoose = require('mongoose')

const dateD = mongoose.Schema({
    date: String

})


module.exports = mongoose.model('datedepart', dateD);