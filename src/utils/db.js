const mongoose = require('mongoose')
const mongodbUrl = 'mongodb+srv://rebecca:2P6rlePW6QCXI9d2@cluster0.jwa7ma8.mongodb.net/?retryWrites=true&w=majority'

mongoose.connect(mongodbUrl, {
    useUnifiedTopology: true,
    useNewUrlParser: true,
    user: 'rebecca',
    pass: '2P6rlePW6QCXI9d2'
})

const db = mongoose.connection

db.on('error', (err) => console.error(`Error: ${err}`))
db.on('connected', (err, res) => console.log('Connected to database'))