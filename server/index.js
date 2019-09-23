require('dotenv').config()
const express = require('express')
const session = require('express-session');
const massive = require('massive')
const {registerUser, loginUser} = require('./controllers/authController')
const {CONNECTION_STRING, SESSION_SECRET} = process.env


const app = express()
app.use(express.json())

massive(CONNECTION_STRING)
.then(dbInstance => {
    app.set('db', dbInstance)
    console.log("database_connect")
})

app.use(session({
    resave: false,
    saveUninitialized: true,
    secret: SESSION_SECRET,
    // cookie: {
    //     maxAge: 1000 * 60 * 60 * 24 * 3
    // }
}))

app.post('/auth/register', registerUser)
app.post('/auth/login', loginUser)




app.listen(8060, () => console.log("Listening on Port 8060"))