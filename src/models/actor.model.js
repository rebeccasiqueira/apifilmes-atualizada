const mongoose = require('mongoose')

const actorSchema = mongoose.Schema({
      name: {
        type: String, 
        required: true
      }, 
      birth_year: {
        type: Number, 
        required: true
    
      }, 
      movies: {
        type : [String],
        required: false
      }
})

module.exports = mongoose.model('Actor', actorSchema)