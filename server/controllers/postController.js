
function addPost(req, res) {
    const {postTitle, postDescription} = req.body
    const db = req.app.get('db');
    console.log(req.body)
    db.getIdViaUsername(req.session.user.username).then(id => {
        console.log(id)
        let userId = id[0].user_id;
        db.addPost(userId, postTitle, postDescription).then(() => {
            res.sendStatus(200);
        })
    })
} 

function getPost (req, res) {
    const db = req.app.get('db')
    db.getPost(req.session.user.user_id).then(posts => {
        res.status(200).json(posts)
    })
}

function getPreviousPosts(req, res) {
    const db = req.app.get('db')
    db.getPreviousPosts(req.session.user.username).then(posts => {
        console.log(posts);
        res.status(200).json(posts);
    })
}
function editPost (req, res){
    const post_id = +req.params.id
    console.log(post_id)
    const {title, description} = req.body
    const db = req.app.get('db');
    // console.log('pc32', id)
    db.updatePost(title, description, post_id).then(()=> {
        db.getPreviousPosts(req.session.user.username).then(posts => {
            res.status(200).json(posts);
        })
    })
}

function deletePost (req, res ){
    const{id} = req.params
    const db = req.app.get('db')

    db.deletePost(id).then(()=> {
        db.getPreviousPosts(req.session.user.username).then(posts => {
            res.status(200).json(posts)
        })
    })
}






module.exports = {
    addPost,
    getPreviousPosts,
    getPost,
    editPost,
    deletePost
}
