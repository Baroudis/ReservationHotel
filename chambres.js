const mongoose = require('mongoose')


const schema = mongoose.Schema({
    titre: {
        type:String, 
        require:false
    },
    type: String,
    //title: String,
    description: String,
    prix: Number,
    img: String,
    disponible: Boolean,
    dateArriver: {
        type: Date,
        default: Date.now
    }
})


module.exports = mongoose.model('chambre', schema);
