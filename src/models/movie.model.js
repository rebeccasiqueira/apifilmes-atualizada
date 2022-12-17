const mongoose = require('mongoose')

const movieSchema = mongoose.Schema({
        name: {
           type: String,
            trim: true,  
           required: true,
        },
        released_on: {
           type: Date,
           trim: true,
           required: true
        }, 
       actors: {
         type: [String], 
         required: true
       }
})

module.exports = mongoose.model('Movie', movieSchema)