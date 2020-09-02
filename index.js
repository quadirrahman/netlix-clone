const express = require('express')
const app = express()
const cors = require('cors')

const configureDB = require('./config/database')
const router = require('./config/routes')
const port = 3075
app.use(cors())

//setup DB
configureDB()
app.use(express.json())
app.use(router)

app.listen(port, ()=>{
    console.log('server is running in', port)
})
