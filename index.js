const express = require('express')
const bodyParser = require('body-parser')
const app = express()
const db = require('./src/utils/db')
const movieRouter = require('./src/routes/movie.route')
const userRouter = require('./src/routes/users.route')
const actorRouter = require('./src/routes/actor.route')
const port = 3000

app.use(bodyParser.json())

app.get('/', (req, res) => {
    res.send('api-filmes is running')
})

app.use('/api/v1/movie', movieRouter)
app.use('/api/v1/users', userRouter)
app.use('/api/v1/actor', actorRouter)

app.use((error, req, res, next) => {
    console.log('ERRO', error) 
    res.status(500).json({errorMessage: error.message})
 })

app.listen(port, () => {
    console.log(`api-filmes running on port ${port}`)
})