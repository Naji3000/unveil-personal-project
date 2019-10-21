require('dotenv').config();
const express = require('express')
const session = require('express-session');
const massive = require('massive')
// const multipart = require('connect-multiparty');
const bodyParser = require('body-parser');
// const cloudinary = require('cloudinary');
const cors = require('cors');
// const Datastore = require('nedb');
// const Pusher = require('pusher')
const {registerUser, loginUser,logoutUser, isUserTrue} = require('./controllers/authController')

const {addPost, getPost, getAllPost, getPreviousPosts, editPost, deletePost} = require('./controllers/postController')

const {CONNECTION_STRING, SESSION_SECRET} = process.env

//express app
const app = express()
// const db = new Datastore()

//middleware

app.use(express.json()) 
app.use( express.static( `${__dirname}/../build` ) ); 
app.use(cors())
app.use(bodyParser.urlencoded({extended: false}))
app.use(bodyParser.json())

app.use(session({
    resave: false,
    saveUninitialized: true,
    secret: SESSION_SECRET,
    cookie: {
        maxAge: 1000 * 60 * 60 * 24 * 10
    }
}))

//multiparty
// const multipartMiddleware = multipart();



massive(CONNECTION_STRING)
.then(dbInstance => {
    app.set('db', dbInstance)
    console.log("database_connect")
})



//endpoints

//user
app.post('/auth/register', registerUser)
app.post('/auth/login', loginUser)
app.post('/auth/logout', logoutUser)
app.get("/auth/user", (req, res) => {
    res.status(200).json(req.session.user);
})
// app.get('/auth/userTrue', isUserTrue);

//post
app.post('/api/post', addPost)
app.get('/api/user/posts', getPreviousPosts)
app.get('/api/post', getPost)
app.put('/api/post/:id', editPost)
app.delete('/api/post/:id', deletePost)


//employer
app.get('/api/user/allPost', getAllPost)










app.listen(8060, () => console.log("Listening on Port 8060"))