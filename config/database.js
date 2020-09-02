const mongoose = require('mongoose')

const configureDB = () => {
    mongoose.connect('mongodb://localhost:27017/netfilx-app', {
        useNewUrlParser: true,
        useUnifiedTopology: true
    })
        .then(()=>{
            console.log('connected to db')
        })
        .catch(err => {
            console.log('error connecting to db', err)
        })
}

module.exports = configureDB
