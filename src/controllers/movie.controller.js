const Movie = require('../models/movie.model')

const save = async (req, res, next) => {  
    try {
        const data = req.body
        const newMovie = new Movie(data)
        const savedMovie = await newMovie.save()
        if(!savedMovie) {
            throw new Error('Movie cold not be saved')
        }
        res.status(201).json({
            message: 'New Movie created'
        })
        
    } catch(err) {
        next(err)
    }
}

const getAll = async (req, res, next) => {
    try {
        const movies = await Movie.find()
        res.status(200).json(movies)
    } catch(err) {
        next(err)
    }
}

const getById = async (req, res, next) => {
    try {
        const id = req.params.id
        const movie = await Movie.findById(id)
        if(!movie) {
            throw new Error(`Movie with id ${id} not found`)
        }
        res.status(200).json(movie)
    } catch(err) {
        next(err)
    }
}

const update = async (req, res, next) => {
    try {
        const id = req.params.id
        const data = req.body

        const movie = await Movie.findById(id)
        if(!movie) {
            throw new Error(`Movie with id ${id} not found`)
        }

        const newMovie = await Movie.findByIdAndUpdate(id, data, {new: true})
        res.status(200).json(newMovie)
    } catch(err) {
        next(err)
    }
}

const remove = async (req, res, next) => {
    try {
        const id = req.params.id
        const movie = await Movie.findById(id)
        if(!movie) {
            throw new Error(`Movie with id ${id} not found`)
        }
        await Movie.findByIdAndDelete(id)
        res.status(200).json({message: `Movie with id ${id} has deleted`})
    } catch(err) {
        next(err)
    }
}

module.exports = {
    save,
    getAll,
    getById,
    update,
    remove
}

