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
const {registerUser, loginUser,logoutUser} = require('./controllers/authController')
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
        maxAge: 1000 * 60 * 60 * 24 * 7
    }
}))

//multiparty
// const multipartMiddleware = multipart();



massive(CONNECTION_STRING)
.then(dbInstance => {
    app.set('db', dbInstance)
    console.log("database_connect")
})

// const pusher = new Pusher({
//     appId: process.env.PUSHER_APP_ID,
//     key: process.env.PUSHER_APP_KEY,
//     secret: process.env.PUSHER_APP_SECRET,
//     cluster: process.env.PUSHER_APP_CLUSTER,
//     encrypted: true,
// });

// cloudinary.config({
//     cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
//     api_key: process.env.CLOUDINARY_API_KEY,
//     api_secret: process.env.CLOUDINARY_API_SECRET,
// });


//endpoints

//user
app.post('/auth/register', registerUser)
app.post('/auth/login', loginUser)
app.post('/auth/logout', logoutUser)
app.get("/auth/user", (req, res) => {
    res.status(200).json(req.session.user);
})

//post
app.post('/api/post', addPost)
app.get('/api/user/posts', getPreviousPosts)
app.get('/api/post', getPost)
app.put('/api/post/:id', editPost)
app.delete('/api/post/:id', deletePost)


//employer
app.get('/api/user/allPost', getAllPost)




//cloudinary endpoints

// app.get('/cloud/gallery', (req, res) => {
//     db.find({}, (err, data) => {
//     if (err) return res.status(500).send(err);
//     res.json(data);
//     });
// });

// app.post('/cloud/upload', multipartMiddleware, (req, res) => {
//     cloudinary.v2.uploader.upload(req.files.image.path, {}, function(error,result) {

//         if (error) {
//             return res.status(500).send(error);
//     } 
//     db.insert(Object.assign({}, result, req.body), (err, newDoc) => {
//             if (err) {
//                 return res.status(500).send(err);
//             }
//                     pusher.trigger('gallery', 'upload', {
//                         image: newDoc,
//             });
//                             res.status(200).json(newDoc);
//         });
//     });
// });








app.listen(8060, () => console.log("Listening on Port 8060"))