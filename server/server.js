const express = require('express')
    , bodyParser = require('body-parser')
    , cors = require('cors')
    , dotenv = require('dotenv').config()
    , massive = require('massive')
    , ctrl = require('./controller')

const app = new express()
app.use(bodyParser.json())
app.use(cors())

app.use( express.static( __dirname + `/../build` ) ) 

app.get('/api/students', ctrl.getAll)
app.get('/api/student/:page', ctrl.getOne)
app.get('/api/student/query', ctrl.getOneQuery)

const port = process.env.PORT

massive(process.env.CONNECTION_STRING).then(dbInstance => {
    app.set('db', dbInstance);
    app.listen(port, _ => {
        console.log(`Grab the Holy Grail and spill it ${port}`);
    })
});