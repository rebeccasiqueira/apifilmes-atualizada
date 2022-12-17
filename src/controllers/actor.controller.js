const Actor = require('../models/actor.model')

const save = async (req, res, next) => {  
    try {
        const data = req.body
        const newActor = new Actor(data)
        const savedActor = await newActor.save()
        if(!savedActor) {
            throw new Error('Actor cold not be saved')
        }
        res.status(201).json({
            message: 'New actor created'
        })
        
    } catch(err) {
        next(err)
    }
}

const getAll = async (req, res, next) => {
    try {
        const actors = await Actor.find()
        res.status(200).json(actors)
    } catch(err) {
        next(err)
    }
}

const getById = async (req, res, next) => {
    try {
        const id = req.params.id
        const actor = await Actor.findById(id)
        if(!actor) {
            throw new Error(`Actor with id ${id} not found`)
        }
        res.status(200).json(Actor)
    } catch(err) {
        next(err)
    }
}

const update = async (req, res, next) => {
    try {
        const id = req.params.id
        const data = req.body

        const actor = await Actor.findById(id)
        if(!actor) {
            throw new Error(`Actor with id ${id} not found`)
        }

        const newActor = await Actor.findByIdAndUpdate(id, data, {new: true})
        res.status(200).json(newActor)
    } catch(err) {
        next(err)
    }
}

const remove = async (req, res, next) => {
    try {
        const id = req.params.id
        const actor = await Actor.findById(id)
        if(!actor) {
            throw new Error(`Actor with id ${id} not found`)
        }
        await Actor.findByIdAndDelete(id)
        res.status(200).json({message: `Actor with id ${id} has deleted`})
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

