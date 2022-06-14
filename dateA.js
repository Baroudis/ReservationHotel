const mongoose = require('mongoose')




const dateA = mongoose.Schema({
    date: String

})


module.exports = mongoose.model('datearrive', dateA);